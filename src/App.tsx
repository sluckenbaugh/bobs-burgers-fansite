import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Nav from "./components/Nav";

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
                data.filter(
                  (character: Character) =>
                    character.name.substring(0, 3) === search.substring(0, 3)
                )
              )
            : setCharacters(data)
        );
    };
    getCharacters();
  }, [search]);

  if (characters?.length === 0) return <p>No matching results</p>;
  return (
    <div>
      <Nav handleSearch={(input) => setSearch(input)} />
      {characters?.map((c) => (
        <CharacterCard key={c.id} character={c} />
      ))}
    </div>
  );
};

export default App;
