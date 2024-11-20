import React from "react";
import { useParams } from "react-router-dom";

export default function Navbar({nombrelike}) {
//   const { nombrelike2 } = useParams();

  return (
    <div className="entete">
      <h2>Il y a {nombrelike} Like</h2>
    </div>
  );
}
