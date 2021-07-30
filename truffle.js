// Allows us to use ES6 in our migrations and tests.
require('babel-register')
var fs = require('fs')
var HDWalletProvider = require('@truffle/hdwallet-provider')
var mnemonic = 'solution any scorpion air speak leaf inherit silly alley list fever nuclear'

// if (fs.existsSync('./pass12')) {
//     mnemonic =  fs.readFileSync('./pass12', {encoding: 'utf8'})
//     console.log("Exists and is : ", mnemonic)
// }


module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            skipDryRun: true,
            network_id: '*' // Match any network id
        },
        mumbai: {
            provider: function () {
                return new HDWalletProvider(mnemonic, 'https://matic-mumbai.chainstacklabs.com')
            },
            skipDryRun: true,
            network_id: 80001
        },
        kovan: {
            provider: function () {
                return new HDWalletProvider(mnemonic, 'https://kovan.infura.io/v3/c3422181d0594697a38defe7706a1e5b')
            },
            skipDryRun: true,
            network_id: 42
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/c3422181d0594697a38defe7706a1e5b')
            },
            skipDryRun: true,
            network_id: 4
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/c3422181d0594697a38defe7706a1e5b')
            },
            network_id: 3,
            skipDryRun: true,
            gasLimit: 2.8e6
        },
        kotti: {
            provider: function () {
                const wallet = new HDWalletProvider(mnemonic, 'https://www.ethercluster.com/kotti')
                return wallet
            },
            skipDryRun: true,
            network_id: 6
        },
        ethereum_classic_mainnet: {
            provider: function () {
                const wallet = new HDWalletProvider(mnemonic, 'https://www.ethercluster.com/etc')
                return wallet
            },
            skipDryRun: true,
            network_id: 61
        }
    },
    compilers: {
        solc: {
            version: '0.7.6'
        }
    }
}
