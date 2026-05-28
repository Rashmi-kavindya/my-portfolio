import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.sectionLine}></div>
          <p className={styles.subtitle}>
            Open to full-time roles, internships, and collaborations. Feel free
            to reach out!
          </p>
        </div>

        <div className={styles.links}>
          <a href="mailto:rashmikavindya40@gmail.com" className={styles.link}>
            <span className={styles.linkIcon}>✉</span>
            <span>rashmikavindya40@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rashmi-kavindya-051285271/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <span className={styles.linkIcon}>in</span>
            <span>Rashmi Kavindya</span>
          </a>
          <a
            href="https://github.com/Rashmi-kavindya"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <span className={styles.linkIcon}>⌥</span>
            <span>Rashmi-kavindya</span>
          </a>
        </div>

        <p className={styles.footer}>
          © {new Date().getFullYear()} Rashmi Kavindya · Built with React
        </p>
      </div>
    </footer>
  );
};
