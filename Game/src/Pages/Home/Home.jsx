import GameNavBar from "../../Components/GameNavBar/GameNavBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <GameNavBar />
      </div>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
