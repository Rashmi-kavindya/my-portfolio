// ProjectCard.jsx

import React from "react";

import styles from "./ProjectCard.module.css";
//import { getImageUrl } from "../../utils";
import bushub from "../../assets/projects/bushub.png";
import jetsetgo from "../../assets/projects/jetsetgo.png";
import martchart from "../../assets/projects/martchart.png";

// Mapping paths to images
const images = {
  "projects/bushub.png": bushub,
  "projects/jetsetgo.png": jetsetgo,
  "projects/martchat.png": martchart,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={images[imageSrc]}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
