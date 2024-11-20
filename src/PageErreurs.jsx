import React from "react";
import { Link, useRouteError } from "react-router-dom";


export default function PageErreurs() {
    const erreur = useRouteError();
  return (
    <div>
      <h2>Vous avez une erreur: {erreur.status || erreur.message}</h2>
      <h1>
        <center>
          <Link to="/">Retour à L'accueil</Link>
        </center>
      </h1>
    </div>
  );
}
