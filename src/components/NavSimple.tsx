import logo from "../static/logo.png";
import burger from "../static/burger-solid.svg";
import "../index.css";

const Nav = () => {
  return (
    <div className="nav">
      <img className="logo" src={logo} alt="" />
      <a href="#">
        <img className="burger" src={burger} alt="" />
      </a>
    </div>
  );
};

export default Nav;
