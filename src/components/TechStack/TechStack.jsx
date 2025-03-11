import React from "react";
import styles from "./TechStack.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const TechStack = () => {
  return (
    <section className={styles.container} id="experience">
      <h1>TECH STACK</h1>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
