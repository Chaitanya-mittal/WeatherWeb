import { useUserProvider } from "../../context/UserProvider";
import styles from "./UserPanel.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function UserPanel() {
  const { user, logoutUser } = useUserProvider();
  const [showFull, setShowFull] = useState(false);
  const navigate = useNavigate();
  function handleLogout() {
    logoutUser();
    console.log("Logged out");
    navigate("/authenticate");
  }

  return (
    <div
      className={`${showFull && styles.Card}  ${styles.userCard}`}
      onClick={() => setShowFull((prev) => !prev)}
    >
      <img
        src="https://source.unsplash.com/random"
        alt="user-profile"
        className={styles.profileImg}
      />
      {showFull && (
        <div className={styles.userInfo}>
          <p>{user.email}</p>
          <Button type="btn" click={handleLogout}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}

export default UserPanel;
