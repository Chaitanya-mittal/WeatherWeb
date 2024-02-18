import styles from "./WeatherDash.module.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import useWeather from "../../hooks/useWeather";
import useUrlPosition from "../../hooks/useUrlPosition";
import CityFlag from "../CityFlag/CityFlag";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinners/Spinner";
import Message from "../Message/Message";
import States from "../States/States";
import { useBookmarkProvider } from "../../context/BookmarkProvider";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

function WeatherDash() {
  const {
    weather,
    icon,
    fetchWeather,
    loading: weatherLoading,
    error: weatherError,
  } = useWeather();
  const { lat, lng } = useUrlPosition();
  const { loading, error, makeCurrentCity, currentCity } =
    useBookmarkProvider();
  const navigate = useNavigate();

  const [showStates, setShowStates] = useState(false);

  useEffect(() => {
    if (lat && lng) {
      fetchWeather(lat, lng);
      makeCurrentCity(lat, lng);
      setShowStates(false);
    }
  }, [lat, lng]);

  if (loading || weatherLoading) return <Spinner />;
  if (error | weatherError) return <p>{error}</p>;
  if (currentCity?.city?.slice(0, 3) === "Etc") {
    return <Message>Please select a continent to continue</Message>;
  }

  function handleShowStates() {
    setShowStates((prev) => !prev);
  }

  return (
    <section className={styles.weather}>
      <Button type="back" click={() => navigate("/app")}>
        <span className="fa-solid fa-arrow-left"></span>
      </Button>

      {icon && (
        <div className={styles.icon}>
          <img src={icon} alt="icon" />
        </div>
      )}

      <CityFlag info1={currentCity.countryCode} info2={currentCity.city} />

      {weather && <WeatherDetails info={weather} />}
      <div className={styles.btnBox}>
        <Button type="normal_btn" click={handleShowStates}>
          {showStates ? "Close" : "View States"}
        </Button>
        <Button
          type="normal_btn"
          highlightbtn={true}
          click={() => navigate(`/app/form`)}
        >
          Bookmark
        </Button>
      </div>

      {showStates && <States countryCode={currentCity.countryCode} />}
    </section>
  );
}

export default WeatherDash;
