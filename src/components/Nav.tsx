import logo from "../static/logo.png";
import burger from "../static/burger-solid.svg";
import "../index.css";
import SearchCharacter from "./SearchCharacter";
import { useState } from "react";
import Menu from "./Menu";

interface Props {
  handleSearch: (input: string | undefined) => void;
}

const Nav = ({ handleSearch }: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="nav">
        <img data-aos="slide-right" className="logo" src={logo} alt="" />
        <SearchCharacter handleSearch={handleSearch} />
        <a onClick={() => setClicked(!clicked)} href="#">
          <img className="burger" src={burger} alt="" />
        </a>
      </div>
      {clicked && <Menu />}
    </>
  );
};

export default Nav;
