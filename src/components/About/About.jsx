// // About.jsx

// import React from "react";

// import styles from "./About.module.css";
// // import { getImageUrl } from "../../utils";
// import aboutImage from "../../assets/about/aboutImage.png";
// import cursorIcon from "../../assets/about/cursorIcon.png";
// import serverIcon from "../../assets/about/serverIcon.png";
// import uiIcon from "../../assets/about/uiIcon.png";

// export const About = () => {
//   return (
//     <section className={styles.container} id="about">
//       <h2 className={styles.title}>About</h2>
//       <div className={styles.content}>
//         <img
//           src={aboutImage}
//           alt="Me sitting with a laptop"
//           className={styles.aboutImage}
//         />
//         <ul className={styles.aboutItems}>
//           <li className={styles.aboutItem}>
//             <img src={cursorIcon} alt="Cursor icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Frontend Developer</h3>
//               <p>
//                 I'm a frontend developer with experience in building responsive
//                 and optimized sites
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={serverIcon} alt="Server icon" />
//             <div className={styles.aboutItemText}>
//               <h3>Backend Developer</h3>
//               <p>
//                 I have experience developing fast and optimised back-end systems
//                 and APIs
//               </p>
//             </div>
//           </li>
//           <li className={styles.aboutItem}>
//             <img src={uiIcon} alt="UI icon" />
//             <div className={styles.aboutItemText}>
//               <h3>UI Designer</h3>
//               <p>
//                 I have designed multiple landing pages and have created design
//                 systems as well
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };


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
    <section className={styles.container} id="about">
      <div className={styles.textZone}>
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          />
        </h2>
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
  );
};
