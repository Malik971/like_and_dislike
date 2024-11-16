import "./App.css";
import Compteur from "./composants/Compteur";
import React from "react";

export default function App() {
  const age = 4;
  return (
    <div className="App">
      <Compteur  />
      <Compteur  />
      <Compteur  />
      <Compteur  />
    </div>
  );
}
