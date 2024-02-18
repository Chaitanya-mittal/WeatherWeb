import { useUserProvider } from "../../context/UserProvider";
import styles from "./MessageList.module.css";
import MessageItem from "./MessageItem";
function MessageList() {
  const { messages } = useUserProvider();

  return (
    <div>
      <h6 className={styles.messageHeading}>
        {messages.length === 0
          ? "Send some messages to view them"
          : "Messages Sent!!"}
      </h6>
      {messages.length !== 0 && (
        <ul className={styles.messageList}>
          {messages.map((m, i) => {
            return <MessageItem key={i} message={m} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default MessageList;
