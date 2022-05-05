// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CronosToken is ERC20 {
    address private _owner;

    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _owner = msg.sender;
        _mint(msg.sender, initialSupply);

    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    modifier onlyOwner {
        require(msg.sender == _owner, "not the owner");
        _;
    }
}
