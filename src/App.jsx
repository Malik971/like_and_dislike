import "./App.css";
import Compteur from "./composants/Compteur";
import React, { useState } from "react";
import Navbar from "./composants/Navbar";
import Post from "./composants/Post";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titre: "Amani Kaso",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 2,
      titre: "Amani Kaso",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 6,
      titre: "Audy mbuyu",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 3,
      titre: "Jean Julien",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
    {
      id: 4,
      titre: "Pierre Simon",
      description:
        "Voic un exemple de texte qui vient juste remplacer ce texte ici",
      liker: false,
    },
  ]);

  const liker = (PremièreElementTitre) => {
    const JeCopieLesDonnées = [...posts];
    const JePrendIndex = posts.indexOf(PremièreElementTitre);
    JeCopieLesDonnées[JePrendIndex] = {
      ...posts[JePrendIndex],
      liker: !posts[JePrendIndex].liker,
    };
    setPosts(JeCopieLesDonnées);
    console.log(JeCopieLesDonnées);
  };

  const EfacerPoste = (id) => {
    const NewDonnes = posts.filter((p) => p.id != id);
    setPosts(NewDonnes);
  };

  const nombrelike = posts.filter((p) =>  p.liker)

  return (
    <div className="App">
      <Navbar nombrelike = {nombrelike.length} />
      {posts.map((p) => (
        <Post
          PremièreElementTitre={p}
          key={p.id}
          liker={liker}
          supression={EfacerPoste}
        />
      ))}
    </div>
  );
}
