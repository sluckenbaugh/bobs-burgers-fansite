import { useContext, useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard.tsx";
import Nav from "./components/Nav.tsx";
import { ColorContext } from "./App.tsx";
import usePreviousColor from "./Hooks/usePreviousColor.ts";

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

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>();
  const [search, setSearch] = useState<string>();
  const { color } = useContext(ColorContext);

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
                    character.name.substring(0, 3).toUpperCase() ===
                    search.substring(0, 3).toUpperCase()
                )
              )
            : setCharacters(data)
        );
    };
    getCharacters();
  }, [search]);

  useEffect(() => {
    const prev = usePreviousColor(color);
    document.body.classList.replace(prev, color);
  }, [color]);

  return (
    <>
      <div className={color}>
        <Nav text="Characters" handleSearch={(input) => setSearch(input)} />
        {characters?.length === 0 && (
          <div className="message__container">
            <p className="char-error">Sorry, No Matching results.</p>
          </div>
        )}
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
    </>
  );
};

export default Home;
