import { useEffect, useState } from "react";

function useLocalStorage(key, initialState) {
  const [Fdata, setFData] = useState(() => {
    const temp = localStorage.getItem(key);

    return temp ? JSON.parse(temp) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(Fdata));
  }, [key, Fdata]);
  return [Fdata, setFData];
}

export default useLocalStorage;
