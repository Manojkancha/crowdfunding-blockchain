// deploy.js

const Web3 = require('web3');
const CrowdfundingPlatform = require('./CrowdfundingPlatform.json'); // Assuming the contract ABI and bytecode are in this JSON file

const web3 = new Web3('http://localhost:8545'); // Replace with your provider

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Deploying contract from account:', accounts[0]);

    const result = await new web3.eth.Contract(CrowdfundingPlatform.abi)
        .deploy({ data: CrowdfundingPlatform.bytecode })
        .send({ from: accounts[0], gas: '3000000' });

    console.log('Contract deployed to:', result.options.address);
};

deploy();