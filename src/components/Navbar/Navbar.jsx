import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={styles.nav}>
      <ul className={styles.navbarItems}>
        <li>
          <NavLink className={styles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/authenticate">
            <span className="btn">Login</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
