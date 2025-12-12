import "./ResetGameButton.css";

export default function ResetGameButton({ OnResetButtonChanged }) {
  return (
    <div className="resetGame-Container">
      <button className="resetGame-Button" onClick={OnResetButtonChanged}>
        Reset Game
      </button>
    </div>
  );
}
