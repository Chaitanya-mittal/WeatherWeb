import { useBookmarkProvider } from "../../context/BookmarkProvider";
import styles from "./ListedWeather.module.css";
import Message from "../Message/Message";
import WeatherPanel from "./WeatherPanel";

function ListedWeather() {
  const { bookmarks } = useBookmarkProvider();

  return (
    <div>
      {bookmarks.length === 0 ? (
        <Message>Create some bookmarks to get started</Message>
      ) : (
        <ul className={styles.panelBox}>
          {bookmarks.map((b) => {
            return <WeatherPanel info={b} key={b.id} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default ListedWeather;
