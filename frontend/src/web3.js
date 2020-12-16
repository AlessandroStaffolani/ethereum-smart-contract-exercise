import Web3 from "web3";

let web3;

const loadWeb3 = async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
    } catch (err) {
      alert(err.toString());
    }
  } else if (window.web3) {
    // Legacy dapp browsers...
    web3 = new Web3(window.web3.currentProvider);
  } else {
    // Non-dapp browsers...
    alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

loadWeb3();

export default web3;
