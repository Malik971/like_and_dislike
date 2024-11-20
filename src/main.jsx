import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Compteur from "./composants/Compteur";
import { Link } from "react-router-dom";
import Navbar from "./composants/Navbar";
import PageErreurs from "./PageErreurs";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageErreurs />
  },
  {
    path: "/Compteur",
    element: <>
    <Compteur />
    <Link to="/Compteur/500">Navbar</Link>
    </>
  },
  {
    path: "/Compteur/:id",
    element: <Navbar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
