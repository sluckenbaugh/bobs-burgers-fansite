import logo from "../static/logo.png";
import burger from "../static/burger-solid.svg";
import "../index.css";
import { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Search from "./Search";

interface Props {
  handleSearch: (input: string | undefined) => void;
  text: string;
}

const Nav = ({ handleSearch, text }: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="nav">
        <Link to="/">
          <img data-aos="slide-right" className="logo" src={logo} alt="" />
        </Link>
        <Search text={text} handleSearch={handleSearch} />
        <a onClick={() => setClicked(!clicked)} href="#">
          <img className="burger" src={burger} alt="" />
        </a>
      </div>
      {clicked && <Menu />}
    </>
  );
};

export default Nav;
