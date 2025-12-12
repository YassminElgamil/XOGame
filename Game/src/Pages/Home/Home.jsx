import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <h1>Tic Tac Toe</h1>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
