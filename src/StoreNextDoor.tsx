import { useEffect, useState } from "react";
import StoreCard from "./components/StoreCard";
import Nav from "./components/Nav";

export interface StoreNextDoor {
  id: number;
  name: string;
  image: string;
  episode: number;
  season: number;
}

const About = () => {
  const [stores, setStores] = useState<StoreNextDoor[]>();
  const [searchStores, setSearchStores] = useState<string>();

  useEffect(() => {
    const getStores = async () => {
      const URL = "https://bobsburgers-api.herokuapp.com/storeNextDoor/";
      const results = await fetch(URL);
      results
        .json()
        .then((data: StoreNextDoor[]) =>
          searchStores
            ? setStores(
                data.filter(
                  (store) =>
                    store.name.substring(0, 1) === searchStores.substring(0, 1)
                )
              )
            : setStores(data.filter((store) => store.name))
        );
    };
    getStores();
  }, [searchStores]);

  if (stores?.length === 0) return <p>No Matching Results</p>;

  return (
    <div>
      <Nav text="Stores" handleSearch={(input) => setSearchStores(input)} />
      <div className="header">
        <h1 data-aos="slide-left" className="heading">
          STORE NEXT DOOR
        </h1>
      </div>
      <main className="container grid">
        {stores?.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </main>
    </div>
  );
};

export default About;
