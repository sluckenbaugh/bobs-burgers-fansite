import { useParams } from "react-router-dom";
import NavSimple from "./components/NavSimple";
import { useEffect, useState } from "react";
import { Character } from "./Home";
import CharacterDetailCard from "./components/CharacterDetailCard";

const CharDetails = () => {
  const params = useParams();
  const id = parseInt(params.id!);

  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const getCharacters = async () => {
      const URL = `https://bobsburgers-api.herokuapp.com/characters/${id}`;
      const response = await fetch(URL);
      response.json().then((data) => setCharacter(data));
    };
    getCharacters();
  }, []);
  return (
    <div>
      <NavSimple />
      {character && <CharacterDetailCard character={character} />}
    </div>
  );
};

export default CharDetails;
