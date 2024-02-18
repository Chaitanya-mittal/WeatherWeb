import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Message.module.css";
function Message({ children }) {
  const navigate = useNavigate();
  return (
    <div className={styles.message}>
      <p>{children}</p>
    </div>
  );
}

export default Message;
