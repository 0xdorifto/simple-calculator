// test/Calculator.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", function () {
  let calculator;

  beforeEach(async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
  });

  it("should emit an event on addition", async function () {
    const tx = await calculator.add(10, 5);
    const receipt = await tx.wait();
    const event = receipt.events[0];

    expect(event.event).to.equal("Log");
    expect(event.args[0]).to.equal(10);
    expect(event.args[1]).to.equal(5);
    expect(event.args[2]).to.equal("Addition");
    expect(event.args[3]).to.equal(15);
  });

  it("should emit an event on subtraction", async function () {
    const tx = await calculator.subtract(10, 5);
    const receipt = await tx.wait();
    const event = receipt.events[0];

    expect(event.event).to.equal("Log");
    expect(event.args[0]).to.equal(10);
    expect(event.args[1]).to.equal(5);
    expect(event.args[2]).to.equal("Subtraction");
    expect(event.args[3]).to.equal(5);
  });

  it("should emit an event on multiplication", async function () {
    const tx = await calculator.multiply(10, 5);
    const receipt = await tx.wait();
    const event = receipt.events[0];

    expect(event.event).to.equal("Log");
    expect(event.args[0]).to.equal(10);
    expect(event.args[1]).to.equal(5);
    expect(event.args[2]).to.equal("Multiplication");
    expect(event.args[3]).to.equal(50);
  });

  it("should emit an event on division", async function () {
    const tx = await calculator.divide(10, 5);
    const receipt = await tx.wait();
    const event = receipt.events[0];

    expect(event.event).to.equal("Log");
    expect(event.args[0]).to.equal(10);
    expect(event.args[1]).to.equal(5);
    expect(event.args[2]).to.equal("Division");
    expect(event.args[3]).to.equal(2);
  });
});
