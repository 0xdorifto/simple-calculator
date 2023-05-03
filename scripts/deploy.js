const { ethers } = require("hardhat");

async function main() {
  // Compile the contracts
  const Addition = await ethers.getContractFactory("Addition");
  const Subtraction = await ethers.getContractFactory("Subtraction");
  const Multiplication = await ethers.getContractFactory("Multiplication");
  const Division = await ethers.getContractFactory("Division");
  const Calculator = await ethers.getContractFactory("Calculator");

  // Deploy the contracts
  const addition = await Addition.deploy();
  const subtraction = await Subtraction.deploy();
  const multiplication = await Multiplication.deploy();
  const division = await Division.deploy();
  const calculator = await Calculator.deploy(
    addition.address,
    subtraction.address,
    multiplication.address,
    division.address
  );

  // Wait for the contract to be deployed
  await calculator.deployed();

  // Log the contract address
  console.log("Calculator deployed to:", calculator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
