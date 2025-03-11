import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kartik</h1>
        <p className={styles.description}>
          "I am a passionate full-stack developer and aspiring software engineer
          with a strong foundation in both front-end and back-end technologies.
          I specialize in building dynamic, responsive, and user-centric web
          applications. Always eager to learn and innovate, I welcome
          opportunities to collaborate and create impactful solutions. Feel free
          to reach out!"
        </p>
      </div>
      <img
        src={"/resume_image.jpg"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
