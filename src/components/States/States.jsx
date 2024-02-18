import useGetState from "../../hooks/useGetState";
import styles from "./States.module.css";
import Spinner from "../Spinners/Spinner";
import { useEffect } from "react";
import Message from "../Message/Message";
import { useBookmarkProvider } from "../../context/BookmarkProvider";
import { useNavigate } from "react-router-dom";
function States({ countryCode }) {
  const { makeCurrentState } = useBookmarkProvider();
  const navigate = useNavigate();
  const {
    states,
    loading: stateloading,
    error: stateError,
    fetchStates,
  } = useGetState();

  useEffect(() => {
    if (countryCode) {
      fetchStates(countryCode);
    }
  }, [countryCode]);

  function handleStateClick(s) {
    makeCurrentState(s.name);
    navigate("/app/form");
  }

  if (stateloading) return <Spinner />;
  if (stateError) return <Message>Error</Message>;
  return (
    <div className={styles.stateBox}>
      {states !== undefined &&
        states.map((s) => {
          return (
            <div key={s.id} onClick={() => handleStateClick(s)}>
              <p>{s.name}</p>
              <p>{s.iso2}</p>
            </div>
          );
        })}
    </div>
  );
}

export default States;
