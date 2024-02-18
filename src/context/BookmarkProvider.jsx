import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const bookmarkContext = createContext();

function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);
  const [currentCity, setCurrentCity] = useLocalStorage("currentCity", {});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function makeCurrentCity(lat, lng) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
      const data = await res.json();

      setCurrentCity({
        city: data.city || data.locality,
        continent: data.continent,
        country: data.countryName,
        continentCode: data.continentCode,
        countryCode: data.countryCode,
        position: [lat, lng],
      });
    } catch (e) {
      setError("Error occured");
    } finally {
      setLoading(false);
    }
  }

  async function makeCurrentState(name) {
    try {
      setError();
      setLoading(true);
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=c53863ec3574c2f30336dbcf7bef0d50`
      );

      const fetchedData = await res.json();

      setCurrentCity({
        city: fetchedData[0].name,
        countryCode: fetchedData[0].country,
        position: [fetchedData[0].lat, fetchedData[0].lon],
        country: fetchedData[0].state,
      });
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function getBookmark(id) {
    return bookmarks.filter((b) => b.id === id);
  }

  function addBookmark(bm) {
    setBookmarks((prev) => {
      return prev === undefined ? [bm] : [...prev, bm];
    });
  }

  function deleteBookmark(id) {
    setBookmarks((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <bookmarkContext.Provider
      value={{
        bookmarks,
        getBookmark,
        addBookmark,
        makeCurrentCity,
        deleteBookmark,
        makeCurrentState,
        currentCity,
        loading,
        error,
      }}
    >
      {children}
    </bookmarkContext.Provider>
  );
}

export function useBookmarkProvider() {
  const x = useContext(bookmarkContext);
  if (x === undefined) {
    throw new Error("Fetching outside provider");
  }
  return x;
}
export default BookmarkProvider;
