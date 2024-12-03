export default {
  contractName: 'HodlVault',
  constructorInputs: [
    {
      name: 'ownerPk',
      type: 'pubkey',
    },
    {
      name: 'oraclePk',
      type: 'pubkey',
    },
    {
      name: 'minBlock',
      type: 'int',
    },
    {
      name: 'priceTarget',
      type: 'int',
    },
  ],
  abi: [
    {
      name: 'spend',
      inputs: [
        {
          name: 'ownerSig',
          type: 'sig',
        },
        {
          name: 'oracleSig',
          type: 'datasig',
        },
        {
          name: 'oracleMessage',
          type: 'bytes8',
        },
      ],
    },
  ],
  bytecode: 'OP_6 OP_PICK OP_4 OP_SPLIT OP_SWAP OP_BIN2NUM OP_SWAP OP_BIN2NUM OP_OVER OP_5 OP_ROLL OP_GREATERTHANOREQUAL OP_VERIFY OP_SWAP OP_CHECKLOCKTIMEVERIFY OP_DROP OP_3 OP_ROLL OP_GREATERTHANOREQUAL OP_VERIFY OP_3 OP_ROLL OP_4 OP_ROLL OP_3 OP_ROLL OP_CHECKDATASIGVERIFY OP_CHECKSIG',
  source: '// This contract forces HODLing until a certain price target has been reached\n// A minimum block is provided to ensure that oracle price entries from before this block are disregarded\n// i.e. when the BCH price was $1000 in the past, an oracle entry with the old block number and price can not be used.\n// Instead, a message with a block number and price from after the minBlock needs to be passed.\n// This contract serves as a simple example for checkDataSig-based contracts.\ncontract HodlVault(\n    pubkey ownerPk,\n    pubkey oraclePk,\n    int minBlock,\n    int priceTarget\n) {\n    function spend(sig ownerSig, datasig oracleSig, bytes8 oracleMessage) {\n        // message: { blockHeight, price }\n        bytes4 blockHeightBin, bytes4 priceBin = oracleMessage.split(4);\n        int blockHeight = int(blockHeightBin);\n        int price = int(priceBin);\n\n        // Check that blockHeight is after minBlock and not in the future\n        require(blockHeight >= minBlock);\n        require(tx.time >= blockHeight);\n\n        // Check that current price is at least priceTarget\n        require(price >= priceTarget);\n\n        // Handle necessary signature checks\n        require(checkDataSig(oracleSig, oracleMessage, oraclePk));\n        require(checkSig(ownerSig, ownerPk));\n    }\n}\n',
  compiler: {
    name: 'cashc',
    version: '0.8.0-next.0',
  },
  updatedAt: '2023-02-10T15:22:49.985Z',
} as const;
