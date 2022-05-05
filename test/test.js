const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

describe("Deploy Cronos Token Contract", function () {
    let cronosToken;
    const user1_address = '0xe26cc535d9c1c90e62a1794a816c525940f421b3';
    let owner;

    before(async function () {
        const CronosToken = await hre.ethers.getContractFactory("CronosToken");
        cronosToken = await CronosToken.deploy("Cronos Token", "CRT", "1000000000000000000000000");

        await cronosToken.deployed();

        [owner] = await ethers.getSigners();

        //console.log("CronosToken deployed to:", cronosToken.address);
        
      });

    it("check balance of owner", async function () {

        let userBal = await cronosToken.balanceOf(owner.address);
        //console.log("user bal: ", userBal);

        expect(userBal).to.equal(ethers.utils.parseUnits("1000000", 18));

    });

    it("mint 10000 tokens to user1 and check", async function () {
    
        let txn = await cronosToken.mint(user1_address, ethers.utils.parseUnits("10000", 18));
        txn.wait();

        let userBal = await cronosToken.balanceOf(user1_address);
        console.log("user bal: ", userBal);

        expect(userBal).to.equal(ethers.utils.parseUnits("10000", 18));

    });


});
