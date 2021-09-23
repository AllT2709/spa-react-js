import React, { useState, useEffect } from "react";
import getData from "../utils/getData";
import Characters from "../templates/Characters.jsx";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData()
    .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="Characters">
      {characters.map((character) => (
        <Characters key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Home;
