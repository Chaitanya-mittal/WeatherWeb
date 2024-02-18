import { useEffect, useState } from "react";

function useGetState() {
  const [states, setStates] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function fetchStates(countryCode) {
    try {
      setLoading(true);
      setError();

      const res = await fetch(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSCAPI-KEY":
              "TkF2OXlaa1BHelRZYlI5c2xZeGtWMTVCSGlxaHB5aW01bVBMb1dYVQ==",
          },
        }
      );

      const fetchedData = await res.json();
      setStates(fetchedData);
    } catch {
      setError("Something error");
    } finally {
      setLoading(false);
    }
  }

  return { states, loading, error, fetchStates };
}

export default useGetState;
