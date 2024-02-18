import styles from "./WeatherDetails.module.css";
function WeatherDetails({ info: weather }) {
  return (
    <div className={styles.dashboard}>
      {weather &&
        Object.keys(weather).map((e, i) => {
          return (
            <div className={styles.field} key={i}>
              <p>{e}</p>
              <p>{Object.values(weather)[i]}</p>
            </div>
          );
        })}
    </div>
  );
}

export default WeatherDetails;
