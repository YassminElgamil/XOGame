import "./NewGameButton.css";
import { Link } from "react-router-dom";

export default function NewGameButton() {
  return (
    <div className="newGame-Container">
      <Link className="newGame-Button" to="board">
        Start New Game
      </Link>
    </div>
  );
}
