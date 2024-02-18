import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Authenticate.module.css";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useUserProvider } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";
function Authenticate() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { RegisterUser, user } = useUserProvider();

  function handleLogin(e) {
    e.preventDefault();
    RegisterUser({ email, password, isAuthenticated: true });
    setEmail("");
    setPassword("");
    navigate("/app");
  }
  useEffect(() => {
    user.isAuthenticated && navigate("/app");
  }, []);

  return (
    <section>
      <Navbar />
      <div className={styles.main}>
        <form onSubmit={handleLogin}>
          <div className={styles.formField}>
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="login-email"
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              id="login-password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submitBtn">Submit</Button>
        </form>
      </div>

      <Footer />
    </section>
  );
}

export default Authenticate;
