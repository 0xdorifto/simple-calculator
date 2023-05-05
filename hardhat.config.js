require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
const SEPOLIA_PRIVATE_KEY = fs.readFileSync(".secret").toString().trim();
const INFURA_API_KEY = fs.readFileSync(".infura").toString().trim();
const ETHERSCAN_API_KEY = fs.readFileSync(".etherscan").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
