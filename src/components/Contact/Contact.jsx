import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import emailIcon from "../../assets/contact/emailIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:rashmikavindya40@gmail.com">rashmikavindya40@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rashmi-kavindya-051285271/">Rashmi Kavindya</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/Rashmi-kavindya">Rashmi-kavindya</a>
        </li>
      </ul>
    </footer>
  );
};
