import React from "react";

export default function Post({ PremièreElementTitre, liker, supression }) {
  return (
    <div className={PremièreElementTitre.liker ? "post active" : "post"}>
      <div>
        <h2>{PremièreElementTitre.titre}</h2>
        <p>{PremièreElementTitre.description}</p>
      </div>
      <div className="btn">
        <button onClick={() => liker(PremièreElementTitre)}>
          {PremièreElementTitre.liker ? "Dislike" : "Like"}
        </button>
        <button className="delete" onClick={() => supression(PremièreElementTitre.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
