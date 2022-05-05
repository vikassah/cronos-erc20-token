// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
require("dotenv").config();
const hre = require("hardhat");

const user1_address = '0xe26cc535d9c1c90e62a1794a816c525940f421b3';
const user2_address = '0xc4578ef058a19c6705fea198dc0586bf84d4a0e2';

async function main() {
  const CronosToken = await hre.ethers.getContractFactory("CronosToken");
  let cronosToken = await CronosToken.deploy("Cronos Token", "CRT", "1000000000000000000000000");

  await cronosToken.deployed();

  console.log("CronosToken deployed to:", cronosToken.address);

  let txn = await cronosToken.mint(user1_address, ethers.utils.parseUnits("10000", 18));
  txn.wait();
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
