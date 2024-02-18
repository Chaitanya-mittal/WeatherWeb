import { useCallback, useState } from "react";

function useCityToCoords() {
  const [coords, setCoords] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  async function fetchCoords(city) {
    try {
      setError();
      setLoading(true);
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=c53863ec3574c2f30336dbcf7bef0d50`
      );

      const fetchedData = await res.json();
      setCoords([fetchedData[0].lat, fetchedData[0].lon]);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const resetError = useCallback(() => {
    setError();
  }, []);

  return { coords, loading, error, fetchCoords, resetError };
}

export default useCityToCoords;

// to get coords
//   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c53863ec3574c2f30336dbcf7bef0d50`
