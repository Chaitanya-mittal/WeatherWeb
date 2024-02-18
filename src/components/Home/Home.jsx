import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import Button from "../Button/Button";

function Home() {
  return (
    <section className={styles.homeBox}>
      <img src="../../../map-bg.png" alt="bg" />
      <div className={styles.home}>
        <h1>Weather Web</h1>
        <p>
          <span>
            Stay ahead of the weather with Weather Web, your ultimate
            destination for accurate and reliable weather forecasts. Whether
            you're planning a weekend getaway, scheduling outdoor activities, or
            simply want to stay informed about the weather in your area, Weather
            Web has you covered.
          </span>

          <span>
            With intuitive features like city bookmarking, real-time updates,
            and a user-friendly interface, accessing weather information has
            never been easier. Experience the power of Weather Web today and
            make every day a breeze!
          </span>
        </p>
        <div>
          {" "}
          <NavLink to="/app">
            <Button type="btn">Get Started</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Home;
