require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember exchange hockey arena outer swap'; 
let testAccounts = [
"0xe692c5618da034549fda4f96ff35ec0e8939d69ea7fe137698c35a64c682a555",
"0x9ea5639db72058c2ce6b44232dfb7ea1795bb0756eb84a439aca26fd643d5430",
"0x559eacc1f21fd5b5d8a690c5feb49a1932fb346bd014c28f412f1d5b0e9b77af",
"0x16d87d31783aa8ee5d55ac356154edc9b00752f48255f1ea7b09bd8cc6413817",
"0xf5f15cd82a36606273abfbeead3c524a27a7facbe51793b5729e1ebea1781b7e",
"0xd3f06076a37bab1598fe2890e6161b31182ead591d604bd6a3c2b662b5d918b9",
"0xe82c3238e92730bdfac188d08c1ddcee911cbb8d9d1df1d94226d1add2bcc83a",
"0xc680baa1f00f218c7af9507c0ad6b6de9d819b00e83191f6237f0fe45cce3384",
"0x1470cbdf282860454d54552a1e86f8896da9d9b2f2ccad9641990ec39a64e246",
"0xcce9cb091a237b134ba0b584da033f83960d477a3000eeaf70a43496133e3424"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


