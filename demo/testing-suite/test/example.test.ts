import artifact from '../artifacts/example.json' assert { type: "json" };
import { Contract, MockNetworkProvider, randomUtxo } from 'cashscript/dist/src';
import 'cashscript/dist/test/JestExtensions';

describe("test example contract functions", () => {
  it("should check for output logs and error messages", async () => {
    const provider = new MockNetworkProvider();
    const contract = new Contract(artifact, [], { provider });
    provider.addUtxo(contract.address, randomUtxo());

    let transaction = contract.functions.test(0n).to(contract.address, 10000n);
    await (expect(transaction)).toLog(/0 test/);
    await (expect(transaction)).toFailRequireWith(/Wrong value passed/);

    transaction = contract.functions.test(1n).to(contract.address, 10000n);
    await expect(transaction.send()).resolves.not.toThrow();
  });
});