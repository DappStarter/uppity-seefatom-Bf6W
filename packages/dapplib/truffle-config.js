require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name rifle night proud gesture pet swap giant'; 
let testAccounts = [
"0xe0bb346fe4a47bc2a8a6614ed67ffa52fe850bd5499a4dbdf42a8018389a38bc",
"0xc4591a7b99a59521a4b5d8b7e62d3a29e62c7ef4d139bda1855d932c376c4b63",
"0xeb6135a3436ebbf6fff7c981c98958077c49a1ac4ebfa19ce1e0e0746b11dc37",
"0xcfc5c63a98d380b7fbdd924c53d714c6dd19f6f95a16bf4b0237c4d90aa74faf",
"0x79b128ad50dc6e0fa07a4e55a8940a3c1d9ec76bd372bde1951980ae682e00f2",
"0xc74fbee627f51c7b9d5ea0e59a37a82b5d7fb18f061d7f695018cfdaa764d53a",
"0xc9b3c0f69963aedc33c4b01934980422ca1b23a89aa21a2475574d97dfb5cead",
"0x23435c6d2b2d4d7e5d450040ffbe8fdcbc0b2d67848cd19c8dd52ccd1e06799d",
"0x22c41c81002a5fa0f23559f8faf0cd83aae75a1ccb37efdc7ea963b637b8983f",
"0x5dd6b1afed17b7646b5a3fb7a94ab10a89010dccfd48c0e76a0747bbc4f8c70f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

