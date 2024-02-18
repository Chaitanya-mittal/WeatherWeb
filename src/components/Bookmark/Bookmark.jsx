import { useParams, useNavigate } from "react-router-dom";
import { useBookmarkProvider } from "../../context/BookmarkProvider";
import Button from "../Button/Button";
import styles from "./Bookmark.module.css";
import CountryFlag from "../CountryFlag/CountryFlag";
function Bookmark() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookmark, deleteBookmark } = useBookmarkProvider();
  const x = getBookmark(id);

  function handleDelete() {
    deleteBookmark(x[0].id);
    navigate("/app");
  }

  console.log(x);
  return (
    <div className={styles.bookmark}>
      <Button type="back" click={() => navigate(-1)}>
        <span className="fa-solid fa-arrow-left"></span>
      </Button>
      <h5>{x[0].title}</h5>
      <CountryFlag info={x[0]} />
      <p>
        <span>City -</span> {x[0].location.city}
      </p>
      <p>
        <span>Dated -</span> {x[0].date}
      </p>
      <p>
        <span>Note -</span> {x[0].note}
      </p>
      <Button type="btn" click={handleDelete}>
        Delete
      </Button>
    </div>
  );
}

export default Bookmark;
