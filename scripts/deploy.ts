import { ethers } from "hardhat";

async function main() {
  const VivToken = await ethers.getContractFactory("VivToken");
  const vivtoken = await VivToken.deploy();

  await vivtoken.deployed();

  console.log("VivToken deployed to:", vivtoken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
