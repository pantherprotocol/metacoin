# Steps to deploy opengsn relay to aws

- Get custom domain name and transfer DNS to Route53
- Launch EC2 instance (t2.medium, ubuntu 20.04 preferred)
- Allocate Elastic IP address and associate it to the EC2 instance launched
- Create A record in hosted zone for your subdomain to point at Elastic IP associated with the EC2 instance 
- Install git, docker and node
- Clone OpenGSN - version with fix for Mumbai Support
- Edit .env file in gsn/dockers/relaydc/.env to contain subdomain name for you relayer
- Edit relay-config.json file in gsn/dockers/relaydc/config/relay-config.json (ovnerAddress, versionRegistry, networkUrl)
- Run .rdc script for local (`gsn/dockers/relayd/rdc local up -d`)
- Wait for docker containers to run
- Create mnemonic file with funded account (details on how to get account funded etc.)
- Run relay-register script with relevant parameters and wait for relay to be registered
- Check if everything is alright by running metacoin tests
