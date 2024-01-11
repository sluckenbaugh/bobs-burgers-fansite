import logo from "../static/logo.png";
import burger from "../static/burger-solid.svg";
import "../index.css";
import SearchCharacter from "./SearchCharacter";

interface Props {
  handleSearch: (input: string | undefined) => void;
}

const Nav = ({ handleSearch }: Props) => {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="" />
      <SearchCharacter handleSearch={handleSearch} />
      <a href="#">
        <img className="burger" src={burger} alt="" />
      </a>
    </div>
  );
};

export default Nav;
