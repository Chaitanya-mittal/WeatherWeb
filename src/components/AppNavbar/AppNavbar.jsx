import { NavLink } from "react-router-dom";
import styles from "./AppNavbar.module.css";
function AppNavbar() {
  return (
    <nav>
      <ul className={styles.appNavbar}>
        <li>
          <NavLink to="bookmarks" className={styles.links}>
            Bookmarks
          </NavLink>
        </li>
        <li>
          <NavLink to="countries" className={styles.links}>
            Countries
          </NavLink>
        </li>
        <li>
          <NavLink to="listedweather" className={styles.links}>
            Weather
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNavbar;

// TkF2OXlaa1BHelRZYlI5c2xZeGtWMTVCSGlxaHB5aW01bVBMb1dYVQ==
