import styles from "./Spinner.module.css";
import { ClipLoader } from "react-spinners";
function Spinner() {
  return (
    <div className={styles.spinner}>
      <ClipLoader color="#36d7b7" />
    </div>
  );
}

export default Spinner;
