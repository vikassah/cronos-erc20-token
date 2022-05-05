# Tutorial - smart contract deployment

**How do I create a token on Cronos?**

## Brief

In this directory, please create a tutorial (blog post) and full repository to explain how the reader can (1) test, (2) deploy and (3) demo a simple token contract to the Cronos Testnet. For the token contract, feel free to select a ERC20, ERC721 or ERC1155.

Deliverables:

- A tutorial.md file which contains your blog post, including instructions to create, test, deploy and demo the token.
- A full Hardhat directory including the smart contracts, the unit tests (full coverage), the deployment script, and the demo script.

As part of the demo, some tokens should be minted by the owner / admin to user 1, who will then transfer some tokens to user 2.

You can leverage existing open-source code.

## Pre-requisites

The contracts' owner / admin wallet is:

- Address: 0x4b9324ee9f3a2700636c5b1045cdf61be33c1cd0
- Private key: 9ae8fbd3f15deacb7fccb52f44daae958a4729e32ff8a0431a30991d1194e3eb

The user 1 wallet is:

- Address: 0xe26cc535d9c1c90e62a1794a816c525940f421b3
- Private key: 02df9c94a388332079f148d09d757a880c9ad75d7337078ebb80a39d97c61f59

The user 2 wallet is:

- Address: 0xc4578ef058a19c6705fea198dc0586bf84d4a0e2
- Private key: 49b3ebe0867ac596bc6b1bbf2e2ecdbeabea85904d054ea25231de24b1350f02

You may need to top up the above accounts and subscriptions on Cronos Testnet using the faucet.

Make sure that none of the sensitive values above are included in your commits, except in this file.

## Evaluation Criteria

For a list of evaluation criteria, please refer to the ../README.md file in the root directory of this project.

Please do not forget to include unit tests. As part of the tests, please leverage npm in order for the test results to show the test coverage of the smart contracts that you have newly created.
