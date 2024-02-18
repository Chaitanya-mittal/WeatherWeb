import { useBookmarkProvider } from "../../context/BookmarkProvider";
import styles from "./BookmarkList.module.css";
import BookmarkItem from "../BookmarkItem/BookmarkItem";
import Message from "../Message/Message";

function BookmarkList() {
  const { bookmarks } = useBookmarkProvider();

  return (
    <ul className={styles.bookmarkList}>
      {bookmarks.length === 0 ? (
        <Message>Create some bookmarks to get started</Message>
      ) : (
        bookmarks.map((b) => {
          return <BookmarkItem dat={b} key={b.id} />;
        })
      )}
    </ul>
  );
}

export default BookmarkList;
