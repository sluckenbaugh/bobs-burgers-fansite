import logo from "../static/logo.png";
import burger from "../static/burger-solid.svg";
import "../index.css";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ColorContext } from "../App";

interface Props {
  handleSearch: (input: string | undefined) => void;
  text: string;
}

const Nav = ({ handleSearch, text }: Props) => {
  const [clicked, setClicked] = useState(false);
  const { color, setColor } = useContext(ColorContext);

  return (
    <>
      <nav className={`nav nav-${color}`}>
        <Link to="/">
          <img
            data-aos="slide-right"
            className="logo"
            src={logo}
            alt="Bob's burgers Logo"
          />
        </Link>
        <Search text={text} handleSearch={handleSearch} />
        <label className="switch">
          <input
            onClick={() => setColor(color === "sky" ? "sun" : "sky")}
            type="checkbox"
            aria-label="search"
          />
          <span className={`toggle round ${!color}`}></span>
        </label>
        <a onClick={() => setClicked(!clicked)} href="#">
          <img className="burger" src={burger} alt="Hamburger Dropdown Menu" />
        </a>
      </nav>
      {clicked && <Menu />}
    </>
  );
};

export default Nav;
