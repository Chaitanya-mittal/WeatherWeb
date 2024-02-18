import styles from "./WeatherPanel.module.css";
import Button from "../Button/Button";
import Spinner from "../Spinners/Spinner";
import { useEffect, useState } from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import useWeather from "../../hooks/useWeather";
function WeatherPanel({ info }) {
  const { weather, fetchWeather, loading, error } = useWeather();
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);

  useEffect(() => {
    fetchWeather(info.position[0], info.position[1]);
  }, [info]);

  function handleClick() {
    setShowWeatherDetails((prev) => !prev);
  }
  console.log(info);

  return (
    <li>
      {loading && <Spinner />}
      {error && <p>Some error</p>}
      {!loading && !error && weather && (
        <div className={styles.panel}>
          <p>{info.location.city}</p>
          <div className={styles.Extras}>
            <p>{weather.Temp}</p>
            <Button click={handleClick} type="accordian">
              {showWeatherDetails ? "Less" : "More"}
            </Button>
          </div>
        </div>
      )}

      {showWeatherDetails && <WeatherDetails info={weather} />}
    </li>
  );
}

export default WeatherPanel;
