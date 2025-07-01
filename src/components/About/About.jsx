// About.jsx

import React, { useEffect, useState } from "react";
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
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* About Me Title - Outside Container */}
      <div className={styles.titleWrapper}>
        <h2 className={styles.fallHeading}>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          />
        </h2>
        <div className={styles.underline}></div>
      </div>

      {/* About Me Container */}
      <section className={styles.container} id="about">
        <div className={styles.textZone}>
          <p>
            A passionate and driven Computer Engineering undergraduate with a strong interest in mobile and web development, data science, AI, and business intelligence.
          </p>
          <p>
            Actively engaged in university leadership roles and volunteering, demonstrating excellent teamwork, communication, and problem-solving skills.
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
      </section>
    </>
  );
};
