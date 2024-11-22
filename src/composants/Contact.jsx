import React from "react";

export default function Contact() {
  return (
    <div>
      <form action="">
        <label htmlFor="nom">Nom:</label>
        <input type="text" name="nom" id="nom" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
