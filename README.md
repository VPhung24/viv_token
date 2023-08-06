<p align="center">
<img src="static/viv_banner.png" width="90%" alt="red circle logo with `viv` carved out on a white background. `i` letter flipped in viv and looks like a mouth">
</p>

# viv token erc 20
 * smart contract deployed:
    * mainnet: [0x9693De0E8196ca28033A2E8d82E48C817d76b1ED](https://etherscan.io/address/0x9693De0E8196ca28033A2E8d82E48C817d76b1ED)
    * goerli: [0x0900D8c5ed492778d3f99691567bCE6A63513BA1](https://goerli.etherscan.io/address/0x0900D8c5ed492778d3f99691567bCE6A63513BA1#code)

### deploy

```
npx hardhat run scripts/deploy.ts --network <network ie. goerli>
```

### etherscan verification
```
npx hardhat verify <DEPLOYED_CONTRACT_ADDRESS> --network <network>
```

### replicate

```console
npx hardhat
hardhat init # used advanced hardhat sample project 
npm install @rari-capital/solmate
```
