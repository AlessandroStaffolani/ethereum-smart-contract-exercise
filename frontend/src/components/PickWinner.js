import React from "react";
import web3 from "../web3";
import lottery from "../lottery";

function PickWinner({ setMessage }) {
  const onPickWinnerHandler = async () => {
    const accounts = await web3.eth.getAccounts();

    setMessage("Waiting on transaction success...");

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });

    setMessage("A winner has been picked!");
  };

  return (
    <div>
      <h4>Ready to pick a winner?</h4>
      <button onClick={onPickWinnerHandler}>Pick a winner!</button>
    </div>
  );
}

export default PickWinner;
