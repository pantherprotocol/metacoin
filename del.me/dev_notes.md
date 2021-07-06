# The Original task
Clone & updage `open-gsn` package so that:
- it runs on Mumbai network
- it runs in AWS virtual machine
- it runs as a part of the PantherProtocol relayer network

## The result shall be
- A cloned `open-gsn` repository with:
    - Updated `HdWalletProvider` dependency (otherwise it does not run on Mumbai)
    - Docs (README) on how to run it on Mumbai, and a script(s) automating it
    - Docs (README) on how to run it on AWS, and a script(s) automating it
    - Docs (README) on how to run it as a PantherProtocol relayer, and a script(s) automating it
- A working instance on AWS which is a prototype of the PantherProtocol relayer
- An integration/e2e test(s)

# Done so far
1. Updated `HdWalletProvider` dependency
2. Tested the standard deployment (with updated `HdWalletProvider` locally)
> Problem unsolved:
> `gsn-cli start` command does not have parameter to pass the accounts or mnemonic key to be used for relay
> As this command is only used for tests in the local environment (while for the prod deployment another script used, gsn/docker/relaydc/rdc - shell script written for google cloud and unix local environemnt), we can ignore it for now.
3. 
> 
> Problem:
> Deployed `StakeManager` contract fails to set the owner when trying to register the relay. This is most probably configuration issue.

# Still to do

# "Plan B" actions
If the problems above still remain after .... the following actions/help is requested:
- Pair programming
- Raising an issue with GSN community
