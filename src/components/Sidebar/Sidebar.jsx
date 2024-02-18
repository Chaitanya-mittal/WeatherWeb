import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import AppNavbar from "../AppNavbar/AppNavbar";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <h3>
        <Link to="/">Weather Web</Link>
      </h3>
      <AppNavbar />
      <Search />
      <div className={styles.outlet}>
        {" "}
        <Outlet />
      </div>
    </section>
  );
}

export default Sidebar;
