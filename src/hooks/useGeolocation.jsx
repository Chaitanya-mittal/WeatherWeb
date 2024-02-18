import { useState } from "react";

function useGeolocation() {
  const [position, setPosition] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  function getLocation() {
    if (navigator.geolocation) {
      setLoading(true);
      setError();
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(latitude, longitude);
          const arr = [latitude, longitude];
          setPosition(arr);
          setLoading(false);
        },
        (error) => {
          setError("Unable to retrieve your location");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation not supported");
      setLoading(false);
    }
  }

  return { position, loading, error, getLocation };
}

export default useGeolocation;
