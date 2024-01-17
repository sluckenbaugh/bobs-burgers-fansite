import { useContext, useEffect, useState } from "react";
import StoreCard from "./components/StoreCard";
import Nav from "./components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ColorContext } from "./App";
import store from "./static/store.png";
import usePreviousColor from "./Hooks/usePreviousColor";
export interface StoreNextDoor {
  id: number;
  name: string;
  image: string;
  episode: number;
  season: number;
}

const seasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const StoreNextDoor = () => {
  const [stores, setStores] = useState<StoreNextDoor[]>();
  const [searchStores, setSearchStores] = useState<string>();
  const [season, setSeason] = useState<number>();
  const { color } = useContext(ColorContext);

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
                    store.name.substring(0, 3).toUpperCase() ===
                    searchStores.substring(0, 3).toUpperCase()
                )
              )
            : setStores(data.filter((store) => store.name))
        );
    };
    getStores();
  }, [searchStores]);

  useEffect(() => {
    const prev = usePreviousColor(color);
    document.body.classList.replace(prev, color);
  }, [color]);

  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Nav text="Stores" handleSearch={(input) => setSearchStores(input)} />
      {stores?.length === 0 && (
        <div className="message__container">
          <p>Sorry, No Matching results.</p>
        </div>
      )}
      <div className="grid-left">
        <div className="backdrop">
          <div>
            <div className="info__block">
              <div className="header--secondary">
                <h1 className="heading--secondary">STORE NEXT DOOR</h1>
              </div>
              <div className="select__container">
                <select
                  className="select"
                  onChange={(e) => setSeason(parseInt(e.target.value))}
                >
                  <option value="0">All Seasons</option>
                  {seasons.map((season) => (
                    <option key={season} value={season}>
                      {`Season ${season}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <main className="slider__container">
              <Slider className="slider" {...settings}>
                {season
                  ? stores
                      ?.filter((store) => store.season === season)
                      .map((store) => (
                        <StoreCard key={store.id} store={store} />
                      ))
                  : stores?.map((store) => (
                      <StoreCard key={store.id} store={store} />
                    ))}
              </Slider>
            </main>
          </div>
        </div>
        <div className="right__block">
          <img className="store__pic" src={store} alt="" />
          <article className="store__description">
            <p>
              The Store next Door is the storefront next to Bob's Burgers on the
              opposing side from Mort's "It's Your Funeral Home & Crematorium".
              Similar to "It's Your Funeral," this storefront also features
              clever word play, but unlike the Belchers' long-time steady
              neighbor Mort, it is a revolving door of businesses, often so
              temporary the sign is crudely painted on a cloth banner. A
              different business is shown to occupy this storefront in every
              episode, and thus it is one of the running gags in the show.
            </p>
            <span className="attribution">
              - DizzyDog, Bob's Burgers Wiki December 2023
            </span>
          </article>
        </div>
      </div>
    </>
  );
};

export default StoreNextDoor;
