import React, { useState } from "react";
import { Link } from "react-router-dom";

function Compteur(props) {
  const [compteur, setCompteur] = useState(0);
  const increment = () => {
    setCompteur(compteur + 1);
  };
  const decrement = () => {
    setCompteur(compteur - 1);
  };
  return (
    <>
      <Link to="/">Retour</Link>
      <div className="compteur">
        <button onClick={increment}>plus</button>
        <p className={compteur < 0 && "erreur"}>{compteur}</p>
        <button onClick={decrement}>moins</button>
      </div>
    </>
  );
}

export default Compteur;
