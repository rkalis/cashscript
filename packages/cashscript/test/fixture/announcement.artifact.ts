export default {
  contractName: 'Announcement',
  constructorInputs: [],
  abi: [
    {
      name: 'announce',
      inputs: [],
    },
  ],
  bytecode: '6a 6d02 OP_SIZE OP_SWAP OP_CAT OP_CAT 4120636f6e7472616374206d6179206e6f7420696e6a75726520612068756d616e206265696e67206f722c207468726f75676820696e616374696f6e2c20616c6c6f7720612068756d616e206265696e6720746f20636f6d6520746f206861726d2e OP_SIZE OP_DUP 4b OP_GREATERTHAN OP_IF 4c OP_SWAP OP_CAT OP_ENDIF OP_SWAP OP_CAT OP_CAT OP_0 OP_OUTPUTVALUE OP_0 OP_NUMEQUALVERIFY OP_0 OP_OUTPUTBYTECODE OP_EQUALVERIFY e803 OP_INPUTINDEX OP_UTXOVALUE OP_OVER OP_SUB OP_DUP OP_ROT OP_GREATERTHANOREQUAL OP_IF OP_1 OP_OUTPUTBYTECODE OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUALVERIFY OP_1 OP_OUTPUTVALUE OP_OVER OP_NUMEQUALVERIFY OP_ENDIF OP_DROP OP_1',
  source: 'pragma cashscript ^0.9.0;\n\n/* This is a contract showcasing covenants outside of regular transactional use.\n * It enforces the contract to make an "announcement" on Memo.cash, and send the\n * remainder of contract funds back to the contract.\n */\ncontract Announcement() {\n    function announce() {\n        // Create the memo.cash announcement output\n        bytes announcement = new LockingBytecodeNullData([\n            0x6d02,\n            bytes(\'A contract may not injure a human being or, through inaction, allow a human being to come to harm.\')\n        ]);\n\n        // Check that the first tx output matches the announcement\n        require(tx.outputs[0].value == 0);\n        require(tx.outputs[0].lockingBytecode == announcement);\n\n        // Calculate leftover money after fee (1000 sats)\n        // Check that the second tx output sends the change back if there\'s enough leftover for another announcement\n        int minerFee = 1000;\n        int changeAmount = tx.inputs[this.activeInputIndex].value - minerFee;\n        if (changeAmount >= minerFee) {\n            require(tx.outputs[1].lockingBytecode == tx.inputs[this.activeInputIndex].lockingBytecode);\n            require(tx.outputs[1].value == changeAmount);\n        }\n    }\n}\n',
  compiler: {
    name: 'cashc',
    version: '0.8.0-next.0',
  },
  updatedAt: '2023-02-10T15:22:49.703Z',
} as const;
