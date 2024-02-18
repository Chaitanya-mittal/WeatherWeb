import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button";
import { useBookmarkProvider } from "../../context/BookmarkProvider";
import useUrlPosition from "../../hooks/useUrlPosition";

function Form() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const { addBookmark, currentCity, currentState } = useBookmarkProvider();

  useEffect(() => {
    setValidation(false);
  }, [title, note]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || note === "") {
      setValidation(true);
    } else {
      const newBM = {
        id: crypto.randomUUID().slice(0, 3),
        location: {
          city: currentCity.city,
          countryCode: currentCity.countryCode,
        },
        country: currentCity.country,
        title: title,
        date: date.toISOString().slice(0, 10),
        position: currentCity.position,
        note: note,
      };
      addBookmark(newBM);
      setTitle("");
      setDate(new Date());
      setNote("");
      navigate("/app");
    }
  }

  if (currentCity === undefined) return <p>Wait</p>;
  return (
    <div>
      <Button type="back" click={() => navigate("/app")}>
        <span className="fa-solid fa-arrow-left"></span>
      </Button>
      <form onSubmit={handleSubmit} className={styles.BookmarkForm}>
        <div>
          <label htmlFor="mark-title">title</label>
          <input
            type="text"
            id="nark-title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="mark-location">Location</label>
          <input
            type="text"
            id="mark-location"
            placeholder={`${currentCity.city}`}
            disabled
          />
        </div>

        <div>
          <label htmlFor="mark-date">Date</label>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </div>

        <div>
          <label htmlFor="mark-note">Notes</label>
          <textarea
            rows={5}
            id="mark-note"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
        </div>
        {validation && (
          <p className={styles.validationText}>Fill all the boxes</p>
        )}

        <Button type="btn">Create</Button>
      </form>
    </div>
  );
}

export default Form;

// function datepickerSVG() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="1em"
//       height="1em"
//       viewBox="0 0 48 48"
//     >
//       <mask id="ipSApplication0">
//         <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
//           <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
//           <path
//             fill="#fff"
//             d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
//           ></path>
//         </g>
//       </mask>
//       <path
//         fill="currentColor"
//         d="M0 0h48v48H0z"
//         mask="url(#ipSApplication0)"
//       ></path>
//     </svg>
//   );
// }
