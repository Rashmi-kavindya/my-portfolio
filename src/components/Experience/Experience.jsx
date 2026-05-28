import React from "react";
import styles from "./Experience.module.css";
import foresightlogo from "../../assets/skills/foresightlogo.png";

const skills = {
  Languages: ["Python", "Java", "C", "C++", "Dart", "SQL", "PHP", "JavaScript"],
  "Web / Mobile": [
    "Flask", "FastAPI", "Spring Boot", "Laravel", "React", "Next.js",
    "Node.js", "HTML5", "CSS3", "Bootstrap", "Flutter",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Firestore"],
  "ML / AI": [
    "Scikit-learn", "XGBoost", "PyTorch", "YOLOv8", "EfficientNet",
    "OpenCV", "MediaPipe", "NLTK", "LangChain", "Groq API",
    "Pandas", "NumPy", "Matplotlib", "Plotly",
  ],
  "DevOps / Infra": [
    "Docker", "Kubernetes", "RabbitMQ", "Redis",
    "GitHub Actions", "Prometheus", "Grafana", "ELK Stack",
  ],
  Tools: [
    "Git", "Figma", "VS Code", "Jira", "Google Colab",
    "ROS Noetic", "Roboflow", "MATLAB", "Weka",
  ],
};

const internship = {
  role: "IT Intern — Access Group IT Division",
  company: "Foresight Residencies (Pvt) Ltd",
  period: "Mar 2025 – Sep 2025",
  location: "Colombo, Sri Lanka",
  bullets: [
    "Developed an AI-powered HRMS Chatbot (Python, Flask) — evolved from keyword-based to hybrid NLP with NLTK, RAG architecture, voice I/O, and RBAC authenticated via EPF number.",
    "Built advanced AI analytics: CV screening via sentence-transformers, stationery demand forecasting (Random Forest), and leave/salary anomaly detection with Seaborn/Matplotlib visualisations and PDF reports.",
    "Wrote complex multi-table SQL queries against the HRMS MySQL database; implemented automated HR letter generation as Word documents using python-docx.",
    "Contributed to an Entry-Level Employee Management System (PHP, MySQL): built onboarding workflows, automated assessments, and MySQL triggers for gamified badge awarding.",
  ],
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.sectionLine}></div>
      </div>

      <div className={styles.content}>
        {/* Skills */}
        <div className={styles.skillsPanel}>
          <h3 className={styles.panelTitle}>Technical Skills</h3>
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={styles.skillGroup}>
                <span className={styles.categoryLabel}>{category}</span>
                <div className={styles.skillTags}>
                  {items.map((skill) => (
                    <span key={skill} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className={styles.workPanel}>
          <h3 className={styles.panelTitle}>Work Experience</h3>
          <div className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <img
                src={foresightlogo}
                alt="Foresight Residencies"
                className={styles.companyLogo}
              />
              <div>
                <h4 className={styles.role}>{internship.role}</h4>
                <p className={styles.company}>{internship.company}</p>
                <p className={styles.period}>
                  {internship.period} &nbsp;·&nbsp; {internship.location}
                </p>
              </div>
            </div>
            <ul className={styles.bullets}>
              {internship.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
