import styles from "./Button.module.css";
function Button({ type, click, children, highlightbtn }) {
  return (
    <button
      className={`${styles[type]} ${
        highlightbtn === true && styles.highlightbtn
      } `}
      onClick={click}
    >
      {children}
    </button>
  );
}
export default Button;
