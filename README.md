# ethereum-smart-contract-exercise
Sample Ethereum smart contract for the Security class seminar at UNIBO

## Install 

To install the project, clone the repository and install the node dependencies

```
git clone https://github.com/ale8193/ethereum-smart-contract-exercise.git

cd ethereum-smart-contract-exercise
npm install
```

## Test run

To run the test execute

```
npm run test
```

## Deploy a contract on rinkeby

Firstly, set the environment variables by creating the `.env` file (or renaming the `.env.sample` file) with the following content:

```
MNEMOMIC=<YOUR_METAMASK_MNEMOMIC>
INFURA_NODE_URL=https://rinkeby.infura.io/v3/<YOUR_APP_TOKEN>
```

The ``MNEMOMIC`` is the set of words given to you by metamask when you create a new account.

The ``INFURA_NODE_URL`` is the token to Ethereum Rinkeby network for deploying the smart contract. 
You can get it by logging to the [infura.io](https://infura.io/), then create a project and select the key for the Rinkeby network.

Finally, deploy the contract by running:

```
node deploy.js
``` 

## Optional start the frontend

Firstly, you need to install the node dependencies also for the frontend, so run:

```
cd frontend
npm install
```

Secondly, set the environment variables by creating the `.env` file inside the `frontend` folder (or renaming the `frontend/.env.sample` file) with the following content:

```
REACT_APP_LOTTERY_ADDRESS=<YOUR_DEPLOYED_SMART_CONTRACT_ADDRESS>
```

The ``YOUR_DEPLOYED_SMART_CONTRACT_ADDRESS`` is the address of the contract deployed on the Rinkeby network

Finally, run the start script inside the ``frontend`` folder

```
npm start
```

