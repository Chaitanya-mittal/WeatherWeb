import { useBookmarkProvider } from "../../context/BookmarkProvider";
// import { useEffect, useState } from "react";
import styles from "./CountryFlag.module.css";
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
function CountryFlag({ info }) {
  return (
    <li className={styles.countryBox}>
      {getFlagEmoji(info.location.countryCode)}
    </li>
  );
}

export default CountryFlag;
