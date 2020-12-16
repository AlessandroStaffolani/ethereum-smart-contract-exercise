import React, { useState } from "react";
import web3 from "../web3";
import lottery from "../lottery";

function EnterForm({ setMessage }) {
  const [enterValue, setEnterValue] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {

      const accounts = await web3.eth.getAccounts();
      console.log(accounts);

      setMessage("Waiting on transaction success...");

      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(enterValue, "ether"),
      });

      setMessage("You have been entered!");
      setEnterValue("")
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Want to try your luck?</h4>
      <div>
        <label htmlFor="enter-value">Amount of ether to enter</label>
        <input
          id="enter-value"
          value={enterValue}
          onChange={(event) => setEnterValue(event.target.value)}
        />
      </div>
      <button type="submit">Enter</button>
    </form>
  );
}

export default EnterForm;
