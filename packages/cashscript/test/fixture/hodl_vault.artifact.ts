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
  debug: {
    bytecode: '5679547f517a81517a815179557aa269517ab175007a537aa269537a547a537aba69517a517aac',
    sourceMap: '14:49:14:62;;:69::70;:49::71:1;15:30:15:44:0;;:26::45:1;16:24:16:32:0;;:20::33:1;19:16:19:27:0;;:31::39;;:16:::1;:8::41;20:27:20:38:0;;:8::40:1;;23:16:23:21:0;;:25::36;;:16:::1;:8::38;26:29:26::0;;:40::53;;:55::63;;:16::64:1;:8::66;27:25:27:33:0;;:35::42;;:16::43:1',
    logs: [],
    requires: [
      {
        ip: 19,
        line: 19,
      },
      {
        ip: 22,
        line: 20,
      },
      {
        ip: 29,
        line: 23,
      },
      {
        ip: 37,
        line: 26,
      },
      {
        ip: 43,
        line: 27,
      },
    ],
  },
  compiler: {
    name: 'cashc',
    version: '0.10.4',
  },
  updatedAt: '2024-12-03T13:57:08.243Z',
} as const;
