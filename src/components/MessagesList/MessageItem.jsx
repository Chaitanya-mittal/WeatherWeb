import { useUserProvider } from "../../context/UserProvider";
import styles from "./MessageItem.module.css";
function MessageItem({ message }) {
  const { deleteMessage } = useUserProvider();
  function handleMessageDelete() {
    console.log(message);
    deleteMessage(message);
  }

  return (
    <li className={styles.messageBox}>
      <span>{message}</span>
      <span onClick={handleMessageDelete}>&times;</span>
    </li>
  );
}

export default MessageItem;
