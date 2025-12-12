import "./NewGameButton.css";
import { Link } from "react-router-dom";

export default function NewGameButton() {
  return (
    <>
      <div className="newGame-Button">
        <Link to="board">Start New Game</Link>
      </div>
    </>
  );
}
