import { useState } from "react";
import BoardGrid from "../../Components/BoardGrid/BoardGrid";
import GameReslut from "../GameResult/GameReslut";
import ResetGameButton from "../../Components/ResetGameButton/ResetGameButton";

export default function Board() {
  let [player, setPlayer] = useState("X");
  let [winnerPlayer, setWinnerPlayer] = useState(null);
  let [boardList, setBoardList] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  let [hasWinner, setHasWinner] = useState(false);
  let [EndGame, setEndGame] = useState(false);

  function OnResetButtonChanged() {
    setBoardList([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setPlayer("X");
    setHasWinner(false);
    setWinnerPlayer(null);
    setEndGame(false);
  }

  function OnButtonChanged(rowIndex, colIndex, player) {
    let hasValue = UpdateBoardList(rowIndex, colIndex, player);
    CheckForWinner(rowIndex, colIndex, player);
    if (!hasValue) UpdatePlayer();
  }

  function UpdateBoardList(rowIndex, colIndex, player) {
    let hasValue = boardList[rowIndex][colIndex] !== "";
    if (!hasValue) {
      boardList[rowIndex][colIndex] = player;
      setBoardList([...boardList]);
    }

    return hasValue;
  }

  function CheckForWinner(rowIndex, colIndex, player) {
    let hasWinner =
      boardList[rowIndex].every((val) => val === player) ||
      boardList.every((row) => row[colIndex] === player) ||
      (rowIndex === colIndex &&
        boardList.every((row, idx) => row[idx] === player)) ||
      (rowIndex + colIndex === boardList.length - 1 &&
        boardList.every(
          (row, idx) => row[boardList.length - 1 - idx] === player
        ));

    setHasWinner(hasWinner);

    if (hasWinner) {
      setWinnerPlayer(player); //Replace with the name of the player
      setEndGame(true);
      return;
    }

    let gameOver = boardList.every((row) => row.every((cell) => cell !== ""));
    if (gameOver) setEndGame(true);
  }

  function UpdatePlayer() {
    if (player === "X") setPlayer("O");
    else setPlayer("X");
  }

  return (
    <>
      <div className="container">
        {EndGame ? (
          <GameReslut hasWinner={hasWinner} winnerPlayer={winnerPlayer} />
        ) : (
          <>
            <BoardGrid
              boardList={boardList}
              player={player}
              OnButtonChanged={OnButtonChanged}
            />
            <ResetGameButton OnResetButtonChanged={OnResetButtonChanged} />
          </>
        )}
      </div>
    </>
  );
}
