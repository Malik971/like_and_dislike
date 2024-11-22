import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./composants/Navbar";
import PageErreurs from "./PageErreurs";
import Contact from "./composants/Contact";
import Emploi from "./composants/emploi";
import Compteur from "./composants/Compteur";
import Erreur404 from "./composants/Erreur404";
import Proteger from "./composants/Proteger";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageErreurs />,
  },
  {
    path: "/Compteur",
    element: (
      <>
        <Compteur />
        <Link to="/Compteur">Navbar</Link>
      </>
    ),
    children: [
      {
        path: "/Compteur/emploi",
        element: (
          <Proteger estConnecter={false}>
            <Emploi />,
          </Proteger>
        ),
      },
      {
        path: "/Compteur/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/Compteur/:id",
    element: <Navbar />,
  },
  {
    path: "*",
    element: <Erreur404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
