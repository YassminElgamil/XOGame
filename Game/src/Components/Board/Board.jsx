import GameButton from "../GameButton/GameButton";
import "./Board.css";

export default function Board({ boardList, player, OnButtonChanged }) {
  return (
    <>
      <div className="board">
        {boardList.map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <GameButton
                key={`${rowIndex}-${colIndex}`}
                player={cell}
                onButtonClick={() =>
                  OnButtonChanged(rowIndex, colIndex, player)
                }
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
