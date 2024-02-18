import { useState } from "react";

function useWeather() {
  const [weather, setWeather] = useState();
  const [icon, setIcon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  async function fetchWeather(lat, lng) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c53863ec3574c2f30336dbcf7bef0d50`
      );
      const fdata = await res.json();

      setWeather({
        Temp: (fdata.main.temp - 273).toFixed(2),
        Min: (fdata.main.temp_min - 273).toFixed(2),
        Max: (fdata.main.temp_max - 273).toFixed(2),
        Pressure: fdata.main.pressure,
        Humidity: fdata.main.humidity,
      });
      setIcon(
        `https://openweathermap.org/img/wn/${fdata.weather[0].icon}@2x.png`
      );
    } catch {
      setError("error occured");
    } finally {
      setLoading(false);
    }
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c53863ec3574c2f30336dbcf7bef0d50`
    );
    const fdata = await res.json();

    setWeather({
      Temp: (fdata.main.temp - 273).toFixed(2),
      Min: (fdata.main.temp_min - 273).toFixed(2),
      Max: (fdata.main.temp_max - 273).toFixed(2),
      Pressure: fdata.main.pressure,
      Humidity: fdata.main.humidity,
    });
    setIcon(
      `https://openweathermap.org/img/wn/${fdata.weather[0].icon}@2x.png`
    );
  }
  return { weather, icon, fetchWeather, loading, error };
}

export default useWeather;
