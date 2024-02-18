import Navbar from "../../components/Navbar/Navbar";
import styles from "./About.module.css";
import Footer from "../../components/Footer/Footer";
import animationData from "../../asset/Animation - 1707855550203.json";
import Lottie from "react-lottie";
function About() {
  return (
    <section className={styles.about}>
      <Navbar />
      <Main />
      <FeatureBox />
      <Footer />
    </section>
  );
}

function Main() {
  return (
    <div className={styles.mainIntro}>
      <div className={styles.mainIntroLeft}>
        {" "}
        <h1>
          <span className={styles.weather}>Weather</span>{" "}
          <span className={styles.web}>Web</span>
        </h1>
        <p>
          Welcome to Weather Web, your go-to destination for up-to-date weather
          information from around the globe. We're passionate about providing
          users with a seamless experience to stay informed about weather
          conditions in their favorite cities.
        </p>
      </div>

      <WebAni />
    </div>
  );
}

function FeatureBox() {
  return (
    <section className={styles.featureSection}>
      <h2>WHAT WE OFFER</h2>
      <div className={styles.featureBox}>
        <Features
          heading="City Bookmarking"
          content="Easily bookmark your favorite cities to access their weather information with just a click. Whether it's your hometown, dream vacation spot, or a city you're planning to visit, keep track of weather conditions for all your preferred locations in one place."
        />
        <Features
          heading="Real-Time Weather Updates"
          content="Get real-time weather updates for any city worldwide. From temperature and humidity to wind speed and atmospheric pressure, our app provides comprehensive weather data to help you plan your day effectively."
        />
        <Features
          heading="User-Friendly Interface"
          content="Our user-friendly interface is designed with simplicity and functionality in mind. Navigate seamlessly through the app, search for cities effortlessly, and access weather information with ease."
        />
        <Features
          heading="Responsive Design"
          content="Whether you're using Weather Web on your desktop, tablet, or mobile device, our responsive design ensures a consistent and optimal user experience across all platforms."
        />
      </div>
    </section>
  );
}

function Features({ heading, content }) {
  return (
    <div className={styles.feature}>
      <h5>
        <i className="fa-solid fa-square-check"></i> {heading}
      </h5>
      <hr></hr>
      <p>{content}</p>
    </div>
  );
}

function WebAni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.webGIF}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
export default About;
