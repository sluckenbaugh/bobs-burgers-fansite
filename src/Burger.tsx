import { useContext, useEffect } from "react";
import { ColorContext } from "./App";
import NavSimple from "./components/NavSimple";
import burger from "./static/burger-sign.jpg";
import usePreviousColor from "./Hooks/usePreviousColor";

const Burger = () => {
  const { color } = useContext(ColorContext);

  useEffect(() => {
    const prev = usePreviousColor(color);
    document.body.classList.replace(prev, color);
  }, [color]);

  return (
    <>
      <NavSimple />
      <div className="grid-left">
        <div>
          <div className="header--secondary">
            <h1 className="heading--tertiary">BURGER OF THE DAY</h1>
          </div>
          <div className="video__container">
            <iframe
              src="https://www.youtube.com/embed/pkdCH4udVHU?si=LkcYtIMykh7-FLri"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="right__block">
          <img className="burger__pic" src={burger} alt="" />
          <article className="store__description">
            <p>
              The Burger of the Day is one of the running gags on Bob's Burgers.
              It refers to the various puns and wordplay featured as the
              "special" burgers in (almost) every episode of Bob's Burgers. Bob
              and Louise are the creative minds behind these punderful burger
              titles; Bob's offerings are always "family-friendly," while
              Louise's (when she's able to sneak them on the board) are almost
              always completely inappropriate. Burger of the Day specials are
              priced at $5.95 unless otherwise noted.
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

export default Burger;
