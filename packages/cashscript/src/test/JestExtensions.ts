import { MatcherContext } from '@jest/expect';
import { SyncExpectationResult } from 'expect';
import { printExpected, printReceived, matcherHint } from 'jest-matcher-utils';
import { Transaction } from '../index.js';

export {};

declare global {
  namespace jest {
    // eslint-disable-next-line
    interface Matchers<R> {
      toLog(value: RegExp | string): Promise<void>;
      toFailRequireWith(value: RegExp | string): Promise<void>;
    }
  }
}

expect.extend({
  async toLog(
    this: MatcherContext,
    transaction: Transaction,
    match: RegExp | string,
  ): Promise<SyncExpectationResult> {
    const spyOnLoggerError = jest.spyOn(console, 'log');

    // silence actual stdout output
    spyOnLoggerError.mockImplementation(() => {});
    try {
      await transaction.debug();
    } catch {}
    let message: string = '';

    const failMessage = (received: string, expected: RegExp | string) => () => `${matcherHint(
      '.toLog',
      'received',
      'expected',
    )}

Expected: ${printExpected(expected)}
Received: ${printReceived(received)}`;

    try {
      expect(spyOnLoggerError).toBeCalledWith(expect.stringMatching(match));
    } catch (error) {
      message = error as any;
    }

    // TODO: If no console.log was called, then spyOnLoggerError.mock.calls[0] is undefined.
    // We should handle that case properly.
    const received = spyOnLoggerError.mock.calls[0][0];
    spyOnLoggerError.mockClear();

    return {
      message: failMessage(received, match),
      pass: !message,
    };
  },
});

expect.extend({
  async toFailRequireWith(
    this: MatcherContext,
    transaction: Transaction,
    match: RegExp | string,
  ): Promise<SyncExpectationResult> {
    let message: string = '';
    let failMessage: any = () => {};

    try {
      await transaction.debug();
      failMessage = () => () => `${matcherHint(
        '.toFailRequireWith',
        undefined,
        '',
      )}

Contract function did not fail a require statement`;
    } catch (error) {
      message = error as any;
    }

    // should not have failed
    if (this.isNot) {
      return {
        message: () => `${matcherHint(
          '.toFailRequireWith',
          'received',
          '',
          { isNot: true },
        )}`,
        pass: false,
      };
    }

    if (message) {
      try {
        expect(message).toMatch(match);
        message = '';
      } catch (error: any) {
        message = error.message;
        failMessage = () => () => message.replace('.toMatch', '.toFailRequireWith');
      }
    }

    return {
      message: failMessage(message, match),
      pass: !message,
    };
  },
});