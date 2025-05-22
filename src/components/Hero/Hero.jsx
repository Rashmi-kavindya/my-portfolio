import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";
import resume from "../../assets/Resume.pdf"; 
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rashmi!</h1>

        <h2 className={styles.description}>
          I am a{" "}
          <span style={{ color: "#0ef" }}>
            <Typewriter
              words={[
                "Full Stack Developer",
                "AI/ML Enthusiast",
                "Data Engineering Enthusiast"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <a href="mailto:rashmikavindya40@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href={resume} download className={styles.contactBtn}>
            Download CV
          </a>
        </div>


      </div>

      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
