/* eslint-disable no-undef */
const { assert } = require("chai");
const truffleAssert = require("truffle-assertions");

const Color = artifacts.require("./Color.sol");

contract("Color", (accounts) => {
  let contract;
  let colors = [];

  before(async () => {
    contract = await Color.deployed();
  });

  describe("deployment", async () => {
    it("deployed successfully", async () => {
      const address = contract.address;

      assert.notEqual(address, "");
      assert.notEqual(address, 0x0);
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await contract.name();
      assert.equal(name, "Color");
    });

    it("has a symbol", async () => {
      const symbol = await contract.symbol();
      assert.equal(symbol, "COLOR");
    });
  });

  describe("minting", async () => {
    it("creates a new token", async () => {
      colors.push("#E8F6F3");

      await contract.mint(colors[0]);
      const color = await contract.colors(0);

      // SUCCESS
      assert.equal(color, colors[0]);

      // FAIL
      truffleAssert.reverts(contract.mint(colors[0]));
    });
  });
});
