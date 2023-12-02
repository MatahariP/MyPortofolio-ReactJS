import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portofolio" activeClassName="active">
              Portofolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/certificate" activeClassName="active">
              Certificate
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
