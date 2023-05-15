import { NavLink } from "react-router-dom";
import "./Navbar.scss";
export function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/berries/1" className="link">
        Berries
      </NavLink>
    </nav>
  );
}
