import React from "react";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.sectionLine}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.textZone}>
          <p>
            Final year Computer Engineering undergraduate at the University of
            Sri Jayewardenepura (GPA&nbsp;3.42), with a strong focus on
            full-stack development, AI/ML engineering, and cloud-native systems.
            I enjoy building intelligent applications that solve real-world
            problems.
          </p>
          <p>
            My work spans NLP chatbots, computer vision pipelines, microservice
            architectures, and demand forecasting systems. Outside of code, I'm
            involved in university leadership through CENSOC and the IEEE USJ
            Student Branch, and I compete in international programming contests.
          </p>
        </div>

        <div className={styles.cubeContainer}>
          <div className={styles.cubespinner}>
            <div className={styles.face1}>
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className={styles.face2}>
              <FontAwesomeIcon icon={faHtml5} color="#E34F26" />
            </div>
            <div className={styles.face3}>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className={styles.face4}>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className={styles.face5}>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className={styles.face6}>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
