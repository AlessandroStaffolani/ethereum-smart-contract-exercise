import React, { useEffect, useState } from "react";
import "./App.css";
import web3 from "./web3";
import lottery from "./lottery";
import EnterForm from "./components/EnterForm";
import PickWinner from "./components/PickWinner";

function App() {
  const [message, setMessage] = useState("");
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [lotteryBalance, setLotteryBalance] = useState("");

  useEffect(() => {
    async function fetchManager() {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      setManager(manager);
      setPlayers(players);
      setLotteryBalance(balance);
    }

    fetchManager();
  });

  console.log(manager);
  console.log(players);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}</p>
      <p>
        There are currently {players.length} people entered, competing to win{" "}
        {web3.utils.fromWei(lotteryBalance, "ether")} ether!
      </p>
      <hr />
      <EnterForm setMessage={setMessage} />
      <hr />
      <PickWinner setMessage={setMessage} />
      <hr />
      <h1>{message}</h1>
    </div>
  );
}

export default App;
