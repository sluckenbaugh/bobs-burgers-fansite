import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu" data-aos="flip-left">
      <Link className="menu__link" to="/StoreNextDoor">
        Store Next Door
      </Link>
      <Link className="menu__link" to="/burger">
        Burger of the Day
      </Link>
      <Link className="menu__link" to="/About">
        About
      </Link>
    </div>
  );
};

export default Menu;
