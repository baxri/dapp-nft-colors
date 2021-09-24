// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721 {
    string[] public colors;

    uint256 public nextTokenId = 0;

    mapping(string => bool) existingColors;

    constructor() ERC721("Color", "COLOR") {}

    function mint(string memory _color) public {
        require(!existingColors[_color]);

        colors.push(_color);
        nextTokenId++;

        existingColors[_color] = true;

        _mint(msg.sender, nextTokenId);
    }
}
