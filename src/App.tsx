import { useEffect, useState } from "react";
import SearchCharacter from "./components/SearchCharacter";
import CharacterCard from "./components/CharacterCard";

export interface Character {
  id: number;
  name: string;
  image: string;
}

const App = () => {
  const [characters, setCharacters] = useState<Character[]>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    // fetch function
    const getCharacters = async () => {
      const baseURL = "https://bobsburgers-api.herokuapp.com/characters";
      const response = await fetch(baseURL);
      response
        .json()
        .then((data) =>
          search
            ? setCharacters(
                data.filter((character: Character) => character.name === search)
              )
            : setCharacters(data)
        );
    };
    getCharacters();
  }, [search]);

  return (
    <div>
      <h1>Bob's Burgers</h1>
      <SearchCharacter handleSearch={(input) => setSearch(input)} />
      {characters?.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  );
};

export default App;
