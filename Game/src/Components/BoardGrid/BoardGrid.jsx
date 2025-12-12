import Cell from "../Cell/Cell";
import "./BoardGrid.css";

export default function BoardGrid({ boardList, player, OnButtonChanged }) {
  return (
    <>
      <div className="boardGrid">
        {boardList.map((row, rowIndex) => (
          <div className="boardGrid-row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <Cell
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
