import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kartik</h1>
        <p className={styles.description}>
          I am a passionate and dedicated fullstack developer and aspiring
          software developer. With a strong foundation in both front-end and
          back-end technologies, I thrive on building dynamic, responsive, and
          user-centric web applications. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:3603kartiklakra@gmail.com"
          className={styles.contactBtn}>
          Contact Me
        </a>
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
