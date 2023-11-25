import { Contract, ElectrumNetworkProvider, MockNetworkProvider, Network } from '../../src/index.js';
import {
  alicePkh,
  bobPkh,
  aliceAddress,
  bobAddress,
} from '../fixture/vars.js';
import { getTxOutputs } from '../test-util.js';
import { FailedRequireError, Reason } from '../../src/Errors.js';
import artifact from '../fixture/mecenas.json' assert { type: "json" };
import { AuthenticationErrorCommon } from '@bitauth/libauth';
import { randomUtxo, toRegExp } from '../../src/utils.js';

// Mecenas has tx.age check omitted for testing
describe('Mecenas', () => {
  let mecenas: Contract;
  const pledge = 10000n;
  const minerFee = 1000n;

  beforeAll(() => {
    const provider = process.env.TESTS_USE_MOCKNET ? new MockNetworkProvider() : new ElectrumNetworkProvider(Network.CHIPNET);
    mecenas = new Contract(artifact, [alicePkh, bobPkh, pledge], { provider });
    console.log(mecenas.address);
    (provider as any).addUtxo?.(mecenas.address, randomUtxo());
  });

  describe('send', () => {
    it('should fail when trying to send more than pledge', async () => {
      // given
      const to = aliceAddress;
      const amount = pledge + 10n;

      // when
      const txPromise = mecenas.functions
        .receive()
        .to(to, amount)
        .withHardcodedFee(minerFee)
        .send();

      // then
      await expect(txPromise).rejects.toThrow(FailedRequireError);
      await expect(txPromise).rejects.toThrow(toRegExp([
        Reason.NUMEQUALVERIFY,
        AuthenticationErrorCommon.failedVerify,
      ]));
    });

    it('should fail when trying to send to wrong person', async () => {
      // given
      const to = bobAddress;
      const amount = pledge;

      // when
      const txPromise = mecenas.functions
        .receive()
        .to(to, amount)
        .withHardcodedFee(minerFee)
        .send();

      // then
      await expect(txPromise).rejects.toThrow(FailedRequireError);
      await expect(txPromise).rejects.toThrow(toRegExp([
        Reason.VERIFY,
        AuthenticationErrorCommon.failedVerify,
      ]));
    });

    it('should fail when trying to send to multiple people', async () => {
      // given
      const to = aliceAddress;
      const amount = pledge;

      // when
      const txPromise = mecenas.functions
        .receive()
        .to(to, amount)
        .to(to, amount)
        .withHardcodedFee(minerFee)
        .send();

      // then
      await expect(txPromise).rejects.toThrow(FailedRequireError);
      await expect(txPromise).rejects.toThrow(toRegExp([
        Reason.VERIFY,
        AuthenticationErrorCommon.failedVerify,
      ]));
    });

    it('should fail when sending incorrect amount of change', async () => {
      // given
      const to = aliceAddress;
      const amount = pledge;

      // when
      const txPromise = mecenas.functions
        .receive()
        .to(to, amount)
        .withHardcodedFee(minerFee * 2n)
        .send();

      // then
      await expect(txPromise).rejects.toThrow(FailedRequireError);
      await expect(txPromise).rejects.toThrow(toRegExp([
        Reason.NUMEQUALVERIFY,
        AuthenticationErrorCommon.failedVerify,
      ]));
    });

    it('should succeed when sending pledge to receiver', async () => {
      // given
      const to = aliceAddress;
      const amount = pledge;

      // when
      const tx = await mecenas.functions
        .receive()
        .to(to, amount)
        .withHardcodedFee(minerFee)
        .send();

      // then
      const txOutputs = getTxOutputs(tx);
      expect(txOutputs).toEqual(expect.arrayContaining([{ to, amount }]));
    });
  });
});
