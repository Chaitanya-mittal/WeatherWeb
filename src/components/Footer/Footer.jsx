import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
NavLink;
function Footer() {
  return (
    <footer>
      <ul className={styles.footer}>
        <li> &copy; BudddyRecommendator </li>
        <li>
          <NavLink to="https://github.com/Chaitanya-mittal">
            <span className="fa-brands fa-github" aria-hidden={true}></span>{" "}
            <span className="sr-only">Github</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.linkedin.com/in/chaitanyamittal02/">
            <span className="fa-brands fa-linkedin" aria-hidden={true}></span>
            <span className="sr-only">Linkedin</span>
          </NavLink>
        </li>
        <li>{new Date().getFullYear()}</li>
      </ul>
    </footer>
  );
}

export default Footer;
