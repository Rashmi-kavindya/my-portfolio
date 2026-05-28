import React from "react";
import styles from "./Education.module.css";

const education = [
  {
    institution: "University of Sri Jayewardenepura",
    degree: "BSc Eng (Hons) in Computer Engineering",
    minor: "Minor in Data Management",
    period: "2022 – 2026",
    detail: "GPA: 3.42 (Up to 5th Semester)",
    location: "Mattegoda, Sri Lanka",
  },
  {
    institution: "Aquinas College of Higher Studies",
    degree: "Diploma in English Language and Literature",
    minor: null,
    period: "2020 – 2022",
    detail: null,
    location: "Colombo, Sri Lanka",
  },
  {
    institution: "Taxila Central College",
    degree: "G.C.E. A/L — Physical Science Stream",
    minor: null,
    period: "2011 – 2020",
    detail: "Combined Mathematics: A · Chemistry: A · Physics: B",
    location: "Horana, Sri Lanka",
  },
];

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.sectionLine}></div>
      </div>

      <div className={styles.timeline}>
        {education.map((item, i) => (
          <div key={i} className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.institution}>{item.institution}</h3>
                  <p className={styles.degree}>{item.degree}</p>
                  {item.minor && (
                    <p className={styles.minor}>{item.minor}</p>
                  )}
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <div className={styles.cardBottom}>
                {item.detail && (
                  <span className={styles.detail}>{item.detail}</span>
                )}
                <span className={styles.location}>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
