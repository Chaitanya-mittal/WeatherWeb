import { useRef } from "react";
import { useBookmarkProvider } from "../../context/BookmarkProvider";
import CountryFlag from "../CountryFlag/CountryFlag";
import Message from "../Message/Message";
import styles from "./CountryList.module.css";
function CountryList() {
  const { bookmarks } = useBookmarkProvider();
  const uniqueCountries = useRef([]);

  return (
    <ul className={styles.countriesBox}>
      {bookmarks.length === 0 ? (
        <Message>Create some bookmarks to get started</Message>
      ) : (
        bookmarks.map((b) => {
          if (!uniqueCountries.current.includes(b.location.countryCode)) {
            uniqueCountries.current = [
              ...uniqueCountries.current,
              b.location.countryCode,
            ];
            return <CountryFlag info={b} key={b.id} />;
          }
        })
      )}
    </ul>
  );
}

export default CountryList;
