import { useState } from "react";

function useCoordsToLocation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [city, setCity] = useState();

  async function fetchCity(lat, lng) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
      const data = await res.json();

      setCity({
        city: data.city || data.locality,
        country: data.countryName,
        countryCode: data.countryCode,
      });
    } catch (e) {
      setError("Error occured");
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, fetchCity, city };
}

export default useCoordsToLocation;
