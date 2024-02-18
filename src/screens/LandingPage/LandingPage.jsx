import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./LandingPage.module.css";
function LandingPage() {
  return (
    <section className={styles.homeSection}>
      <Navbar />
      <Home />
      <Footer />
    </section>
  );
}

export default LandingPage;
