import logo from "../static/logo.png";
import burger from "../static/burger-solid.svg";
import "../index.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <a href="#">
        <img className="burger" src={burger} alt="" />
      </a>
    </div>
  );
};

export default Nav;
