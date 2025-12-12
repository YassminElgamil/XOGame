import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Board from "./Pages/Board/Board.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewGameButton from "./Components/NewGameButton/NewGameButton.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

let router = createBrowserRouter([
  {
    path: "/XOGame",
    element: <Home />,
    children: [
      { index: true, element: <NewGameButton /> },
      { path: "board", element: <Board /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
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
