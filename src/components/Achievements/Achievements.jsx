import React from "react";
import styles from "./Achievements.module.css";

const competitions = [
  {
    title: "IEEEXtreme 18.0",
    subtitle: "International Programming Competition",
    detail: "Country Rank: 85 · Global Rank: 952",
    date: "Oct 2024",
  },
  {
    title: "J'PuraXtreme 1.0",
    subtitle: "National-Level Competitive Programming Contest",
    detail: null,
    date: "Sep 2024",
  },
  {
    title: "Huawei ICT Competition 2023–2024",
    subtitle: "Cloud Track, Sri Lanka",
    detail: null,
    date: "Nov 2023",
  },
  {
    title: "CodeQuest",
    subtitle: "21-Day University-Level Coding Challenge",
    detail: null,
    date: "May 2024",
  },
];

const leadership = [
  {
    role: "Junior Treasurer",
    org: "CENSOC, University of Sri Jayewardenepura",
    period: "Dec 2024 – Apr 2026",
  },
  {
    role: "Committee Member",
    org: "IEEE USJ Student Branch",
    period: "Dec 2023 – Dec 2024",
  },
  {
    role: "Participant Coordination Team Head",
    org: "IEEEXtreme 17.0 Organizing Committee",
    period: "Oct 2023",
  },
  {
    role: "Announcer",
    org: "Wassana Heena 2024 · ENIGMA Science Exhibition 2024",
    period: null,
  },
  {
    role: "Volunteer",
    org: "Divisarana Animal Welfare Society · Heenayata Sawiyak Initiative",
    period: null,
  },
];

export const Achievements = () => {
  return (
    <section className={styles.container} id="achievements">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Achievements & Leadership</h2>
        <div className={styles.sectionLine}></div>
      </div>

      <div className={styles.content}>
        {/* Competitions */}
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Competitions</h3>
          <div className={styles.cards}>
            {competitions.map((c, i) => (
              <div key={i} className={styles.competitionCard}>
                <div className={styles.compTop}>
                  <span className={styles.compTitle}>{c.title}</span>
                  <span className={styles.compDate}>{c.date}</span>
                </div>
                <p className={styles.compSubtitle}>{c.subtitle}</p>
                {c.detail && (
                  <span className={styles.compDetail}>{c.detail}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Leadership & Extracurricular</h3>
          <ul className={styles.leadershipList}>
            {leadership.map((l, i) => (
              <li key={i} className={styles.leadershipItem}>
                <div className={styles.leadershipDot}></div>
                <div>
                  <span className={styles.leadershipRole}>{l.role}</span>
                  <p className={styles.leadershipOrg}>{l.org}</p>
                  {l.period && (
                    <p className={styles.leadershipPeriod}>{l.period}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
