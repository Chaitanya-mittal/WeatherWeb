import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Search.module.css";
import useCityToCoords from "../../hooks/useCityToCoords";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinners/Spinner";
import Message from "../Message/Message";
function Search() {
  const [city, setCity] = useState("");
  const { coords, loading, error, fetchCoords, resetError } = useCityToCoords();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetchCoords(city);
    setCity("");
  }

  useEffect(() => {
    coords && navigate(`weather?lat=${coords[0]}&lng=${coords[1]}`);
  }, [coords]);

  useEffect(() => {
    resetError();
  }, [city]);

  return (
    <div>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="btn">Go</Button>
      </form>
      <div>
        {loading && <Spinner />}
        {error && <Message>No match found</Message>}
      </div>
    </div>
  );
}

export default Search;
