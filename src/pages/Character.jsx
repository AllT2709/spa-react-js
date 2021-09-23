import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getData from "../utils/getData";

const Character = () => {
  const [character, setCharacter] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getData(id)
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Characters-inner">
      <article className="Characters-card">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </article>
      <article className="Characters-card">
        <h3>Episodes: <span>{character.episode ? character.episode.length : 'loading...'}</span></h3>
        <h3>Status: <span>{character.status}</span></h3>
        <h3>Species: <span>{character.species}</span></h3>
        <h3>Gender: <span>{character.gender}</span></h3>
        <h3>Origin: <span>{character.origin ? character.origin.name : 'loading...'}</span></h3>
        <h3>Last Location: <span>{character.location ? character.location.name : 'loading...'}</span></h3>
      </article>
    </div>
  )
}; 

export default Character;
