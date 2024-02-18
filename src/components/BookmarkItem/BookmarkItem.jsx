import { useBookmarkProvider } from "../../context/BookmarkProvider";
import CityFlag from "../CityFlag/CityFlag";
import styles from "./BookmarkItem.module.css";
import { Link } from "react-router-dom";
function BookmarkItem({ dat }) {
  const { deleteBookmark } = useBookmarkProvider();
  function handleDeleteBookmark() {
    deleteBookmark(dat.id);
    console.log("delete");
  }
  return (
    <li className={styles.bmBox}>
      <Link
        className={`${styles.item} ${styles.bookmarkItem}`}
        to={`${dat.id}?lat=${dat.position[0]}&lng=${dat.position[1]}`}
      >
        <CityFlag info1={dat.location.countryCode} info2={dat.title} />
      </Link>
      <span
        className={`fa-regular fa-trash-can ${styles.bin}`}
        onClick={handleDeleteBookmark}
      ></span>
    </li>
  );
}

export default BookmarkItem;
