import Navbar from "../../components/Navbar/Navbar";
import styles from "./Contact.module.css";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useUserProvider } from "../../context/UserProvider";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import MessageList from "../../components/MessagesList/MessageList";
function Contact() {
  const [msg, setMsg] = useState("");
  const { addMessage, user } = useUserProvider();

  function handleContactSubmit(e) {
    addMessage(msg);
    setMsg("");
    e.preventDefault();
  }
  return (
    <section className={styles.contactSection}>
      <Navbar />

      <div className={styles.main}>
        <h5 className={styles.contactIntro}>
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you! Feel free to reach out to us using the contact
          information below:
        </h5>
        <ul className={styles.socials}>
          <li>
            <NavLink
              to="mailto:mittalchaitanya02@gmail.com"
              target="_blank"
              className={styles.socials}
            >
              {" "}
              <span className="fa-regular fa-envelope"></span>
              <span className="sr-only">Email</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="https://github.com/Chaitanya-mittal" target="_blank">
              <span className="fa-brands fa-github" aria-hidden={true}></span>{" "}
              <span className="sr-only">Github</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="https://www.linkedin.com/in/chaitanyamittal02/"
              target="_blank"
            >
              <span className="fa-brands fa-linkedin" aria-hidden={true}></span>
              <span className="sr-only">Linkedin</span>
            </NavLink>
          </li>
        </ul>

        <h5 className={styles.contactIntro}>
          Alternatively, you can fill out the form below to send us your
          feedback, questions, or comments
        </h5>

        <form onSubmit={handleContactSubmit} className={styles.form}>
          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              disabled
              id="email"
              className={styles.input}
              value={user.email || ""}
            />
          </div>
          <div className={styles.formField}>
            <label className="message">Message</label>
            <textarea
              rows="5"
              className={styles.input}
              required
              id="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <div className={styles.btnBox}>
            <Button type="submitBtn">Post</Button>
          </div>
        </form>
        <MessageList />
      </div>

      <Footer />
    </section>
  );
}

export default Contact;
