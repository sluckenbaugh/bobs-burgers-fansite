import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Nav from "./components/Nav";
export interface Relative {
  name: string;
}
export interface Character {
  id: number;
  age: string;
  name: string;
  image: string;
  gender: string;
  hair: string;
  firstEpisode: string;
  voicedBy: string;
  wikiUrl: string;
  relatives: Relative[];
  allOccupations: string[];
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
      <Nav text="Characters" handleSearch={(input) => setSearch(input)} />
      <div className="header">
        <h1 data-aos="slide-left" className="heading">
          MEET THE COMMUNITY!
        </h1>
      </div>
      <main className="container grid">
        {characters?.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </main>
    </div>
  );
};

export default App;
