const { ethers } = require("hardhat");

async function main() {
  const Calculator = await ethers.getContractFactory("Calculator");
  const calculator = await Calculator.deploy();

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
