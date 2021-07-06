# GSN-Based metacoin.

This a basic metacoin, with minimal modifications to support working through GSN, without the client paying for gas.
You still need a wallet, but only for signing transactions, not paying for them.

See https://github.com/opengsn/gsn for the GSN project.

The Metacoin itself pays for all transactions.

Other than supporting GSN, the project added links to [tenderly](https://dashboard.tenderly.dev/contract/kovan/0x2E0d94754b348D208D64d52d78BcD443aFA9fa52) and [etherscan](https://kovan.etherscan.io/address/0x2e0d94754b348d208d64d52d78bcd443afa9fa52), to ease seeing the various components on the blockchain

## Running the project locally
#### The "TL;DR"
1. Run `yarn install `
2. Run `truffle develop` to run local ganache and truffle console 
3. In the truffle console run `migrate` to deploy the contracts
4. In another terminal run `yarn run dev` to run metacoin demo on `http://localhost:8080`
5. Open a browser, and you can mint, and send coins, with no eth in your (metamask) account

#### NOTES:
Alternatively, steps 2 and 3 you can accomplish starting `gsn-with-ganache` script that does 2 things:
- Starts `ganache` with same chainId and networkId (to overcome [limitation](https://github.com/MetaMask/metamask-extension/issues/8385) of Metamask)
- calls `npx gsn start`, to start all GSN components locally.

## Deploying the instance of GSN HUB to Mumbai network
1. Run `yarn install `
2. Add `pass12` file to the root of project with mnemonic words inside
3. Fund the accounts using this faucet: https://faucet.matic.network/
4. Run `npx gsn deploy --mnemonic ./pass12 --workdir . --network https://rpc-mumbai.maticvigil.com`
