import React, { useState } from "react";

function Compteur(props) {
  const [compteur, setCompteur] = useState(0);
  const increment = () => {
    setCompteur(compteur + 1);
  };
  const decrement = () => {
    setCompteur(compteur - 1);
  }
  return (
    <div className="compteur">
      <button onClick={increment}>plus</button>
      <p className={compteur < 0 && "erreur"}>{compteur}</p>
      <button onClick={decrement}>moins</button>
    </div>
  );
}

export default Compteur;