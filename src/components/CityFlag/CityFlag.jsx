import styles from "./CityFlag.module.css";
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
function CityFlag({ info1, info2 }) {
  return (
    <div className={styles.countryTab}>
      <h5>{info2}</h5>
      <h4>{info1 && getFlagEmoji(info1)}</h4>
    </div>
  );
}

export default CityFlag;
