import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a passionate frontend developer. Proficient in React,
                Next.js, Redux,Auth.js, tailwindcss , different libraries like
                shadcn, I specialize in creating dynamic, responsive web
                applications. Skilled in Git and GitHub, I strive to deliver
                high-quality, user-centric web experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Skilled in Node.js, Express, MongoDB, and Auth.js, I specialize
                in building robust, scalable server-side applications.
                Proficient in Git and GitHub, I strive to deliver efficient and
                secure backend solutions. Custom Api's are my thing.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Aspiring Software Developer</h3>
              <p>
                Skilled in different programing languages like C/C++ , python,
                javascript , typescript and having knowledge about different
                Data Structure and Algorithms.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
