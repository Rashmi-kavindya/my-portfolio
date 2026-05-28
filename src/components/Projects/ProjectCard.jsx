import React from "react";
import styles from "./ProjectCard.module.css";
import bushub from "../../assets/projects/bushub.png";
import jetsetgo from "../../assets/projects/jetsetgo.png";
import martchart from "../../assets/projects/martchart.png";

const imageMap = {
  "projects/bushub.png": bushub,
  "projects/jetsetgo.png": jetsetgo,
  "projects/martchart.png": martchart,
};

export const ProjectCard = ({
  project: { title, subtitle, imageSrc, accent, category, status, description, skills, demo, source },
}) => {
  const image = imageSrc ? imageMap[imageSrc] : null;

  return (
    <div className={styles.card}>
      {image ? (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
          <span className={styles.categoryBadge}>{category}</span>
        </div>
      ) : (
        <div className={styles.colorHeader} style={{ background: accent }}>
          <span className={styles.colorHeaderTitle}>{title}</span>
          <span className={styles.categoryBadgeLight}>{category}</span>
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          {status === "Ongoing" && (
            <span className={styles.statusBadge}>Ongoing</span>
          )}
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>

        <div className={styles.tags}>
          {skills.map((skill) => (
            <span key={skill} className={styles.tag}>{skill}</span>
          ))}
        </div>

        <div className={styles.links}>
          {demo !== "#" && (
            <a href={demo} target="_blank" rel="noreferrer" className={styles.linkBtn}>
              Demo
            </a>
          )}
          {source !== "#" && (
            <a href={source} target="_blank" rel="noreferrer" className={styles.linkBtn}>
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
