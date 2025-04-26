// import React from "react";

// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             return (
//               <div key={id} className={styles.skill}>
//                 <div className={styles.skillImageContainer}>
//                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//             );
//           })}
//         </div>
//         <ul className={styles.history}>
//           {history.map((historyItem, id) => {
//             return (
//               <li key={id} className={styles.historyItem}>
//                 <img
//                   src={getImageUrl(historyItem.imageSrc)}
//                   alt={`${historyItem.organisation} Logo`}
//                 />
//                 <div className={styles.historyItemDetails}>
//                   <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                   <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                   <ul>
//                     {historyItem.experiences.map((experience, id) => {
//                       return <li key={id}>{experience}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// };

import React from "react";
import styles from "./Experience.module.css";
import foresightlogo from "../../assets/skills/foresightlogo.png";

export const Experience = () => {
  const technicalSkills = {
    "Programming Languages": ["C", "C++", "Python", "Dart", "Java", "SQL"],
    "Web Development": ["HTML", "CSS", "PHP", "Flask", "Laravel"],
    Tools: [
      "VS Code",
      "GitHub",
      "Android Studio",
      "Weka",
      "Cisco Packet Tracer",
      "Ubuntu OS",
      "Apache XAMPP",
      "MATLAB",
      "Figma",
    ],
    Technologies: [
      "Git",
      "MySQL",
      "Firebase",
      "Firestore",
      "Numpy",
      "Pandas",
      "Google Colab",
      "Flutter",
    ],
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* TECHNICAL SKILLS SECTION */}
        <div className={styles.skills}>
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>{category}</h3>
              <ul className={styles.skillList}>
                {skills.map((skill, i) => (
                  <li key={i} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WORK EXPERIENCE SECTION */}
        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <img
              src={foresightlogo}
              alt="Foresight Residencies Logo"
            />
            <div className={styles.historyItemDetails}>
              <h3>IT Intern, Foresight Residencies</h3>
              <p>March 20, 2025 – Present</p>
              <ul>
                <li>Supporting IT infrastructure and internal systems.</li>
                <li>Assisting in software development and debugging tasks.</li>
                <li>Collaborating with team members to deliver tech solutions.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
