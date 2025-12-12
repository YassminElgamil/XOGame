import "./GameNavBar.css";
import { Link } from "react-router-dom";

export default function GameNavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="" className="navbar-logo">
            <img
              src="tic-tac-toe.svg"
              alt="Tic Tac Toe icon"
              width="48"
              height="48"
            ></img>
          </Link>
          <ul className="navbar-menu">
            <li>
              <Link to="/XOGame" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
