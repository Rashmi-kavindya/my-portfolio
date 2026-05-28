import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";
import resume from "../../assets/Resume.pdf";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.title}>Rashmi Kavindya</h1>
        <h2 className={styles.description}>
          <span className={styles.typewriterLabel}>
            <Typewriter
              words={[
                "Full Stack Developer",
                "AI/ML Engineer",
                "Computer Engineering Student",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </span>
        </h2>
        <p className={styles.subtitle}>
          Building intelligent applications — from AI-powered systems to
          cloud-native platforms.
        </p>
        <div className={styles.ctas}>
          <a href="#projects" className={styles.ctaPrimary}>
            View Projects
          </a>
          <a href={resume} download className={styles.ctaSecondary}>
            Download CV
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={heroImage} alt="Rashmi Kavindya" className={styles.heroImg} />
      </div>
    </section>
  );
};
