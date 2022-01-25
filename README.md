<p align="center">
<img src="static/vivTokenLogo.png" height="200px" alt="red circle logo with `viv` carved out on a white background. `i` letter flipped in viv and looks like a mouth">
</p>

# viv token erc 20
 * smart contract deployed @ [0x9693De0E8196ca28033A2E8d82E48C817d76b1ED](https://etherscan.io/address/0x9693De0E8196ca28033A2E8d82E48C817d76b1ED)
 * [airdrop](https://whalerdao.github.io/astrodrop/claim/Qmai3LEL3sLdgatQkWVUvNynBZXS69ehLwBab5a3xg8KfM) (til end of march 2022)


### replicate

```console
$ npx hardhat
$ hardhat init # used advanced hardhat sample project 
$ npm install @rari-capital/solmate
```

### deploy

tip: test on ropsten before deploying to mainnet

```
npx hardhat run scripts/deploy.ts --network <network ie. ropsten>
```

### etherscan verification
```
npx hardhat verify <DEPLOYED_CONTRACT_ADDRESS> --network <network>
```

### .env

```
ETHERSCAN_API_KEY=<>
ROPSTEN_URL=https://ropsten.infura.io/v3/<>
PRIVATE_KEY=<>
```