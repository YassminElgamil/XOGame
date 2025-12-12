import React from "react";

export default function NewGameForm() {
  let [playerOne, setPlayerOne] = React.useState("");
  let [playerTwo, setPlayerTwo] = React.useState("");

  function OnPlayerOneChanged(event) {
    setPlayerOne(event.target.value);
  }
  function OnPlayerTwoChanged(event) {
    setPlayerTwo(event.target.value);
  }
  function OnButtonClicked() {
    console.log(playerOne, playerTwo);
  }
  return (
    <>
      <div className="form-container">
        <h2>Enter Players</h2>
        <form onSubmit={OnButtonClicked}>
          <label>Player One</label>
          <input
            type="text"
            id="playerOne"
            name="playerOne"
            placeholder="Enter Player One Name"
            value={playerOne}
            onChange={OnPlayerOneChanged}
            required
          />

          <label>Player Two</label>
          <input
            type="text"
            id="playerTwo"
            name="playerTwo"
            placeholder="Enter Player Two Name"
            value={playerTwo}
            onChange={OnPlayerTwoChanged}
            required
          />

          <button type="submit">Start Game</button>
        </form>
      </div>
    </>
  );
}
