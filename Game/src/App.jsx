import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Board from "./Pages/Board/Board.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewGameButton from "./Components/NewGameButton/NewGameButton.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <NewGameButton /> },
      { path: "board", element: <Board /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
