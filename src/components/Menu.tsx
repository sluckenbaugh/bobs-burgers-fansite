import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu" data-aos="slide-left">
      <Link className="menu__link" to="/About">
        Hello
      </Link>
      <Link className="menu__link" to="/About">
        What's Next
      </Link>
      <Link className="menu__link" to="/About">
        Episodes
      </Link>
      <Link className="menu__link" to="/About">
        About
      </Link>
    </div>
  );
};

export default Menu;
