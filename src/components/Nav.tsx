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
      <div className={`nav ${color}`}>
        <Link to="/">
          <img data-aos="slide-right" className="logo" src={logo} alt="" />
        </Link>
        <Search text={text} handleSearch={handleSearch} />
        <button onClick={() => setColor(color === "sky" ? "sun" : "sky")}>
          Color
        </button>
        <a onClick={() => setClicked(!clicked)} href="#">
          <img className="burger" src={burger} alt="" />
        </a>
      </div>
      {clicked && <Menu />}
    </>
  );
};

export default Nav;
