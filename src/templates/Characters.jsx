import React from "react";
import { Link } from "react-router-dom";

const Characters = ({ character }) => {

  return (
    <article className="Character-item">
      <Link to={`/${character.id}`} className="link">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </Link>
    </article>
  );
};

export default Characters;
