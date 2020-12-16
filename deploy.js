const path = require('path');
const dotenv = require('dotenv');
const HDWallerProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// Load from the .env file the environmental variable
dotenv.config({
    path: path.join(__dirname, '.env'),
});

// We need to create an instance of provider in order to connect to the Rinkeby network through the Infura node
const provider = new HDWallerProvider(
    process.env.MNEMOMIC, // mnemomic of an Ethereum account
    process.env.INFURA_NODE_URL  // We need a real node of the Rinkeby network in order to deploy the contract, so we use infura which offers an api for accessing the network
);

const web3 = new Web3(provider);

const deploy = async () => {
    // We may have registered more than one account to the same mnemomic
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode
        })
        .send({ gas: '1000000', from: accounts[0] });

    console.log(interface);
    console.log('Contract deployed to', result.options.address);

    provider.engine.stop();
};
deploy();

// Navigate to https://rinkeby.etherscan.io/
