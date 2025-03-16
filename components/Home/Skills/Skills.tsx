import React from "react";
import SkillCard from "./SkillCard";
import styles from "./skills.module.css";
import { skillsData } from "@/Data/data";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-10 overflow-hidden"
      style={{ backgroundColor: "black" }}
    >
      {/* Full width marquee container - outside of normal container */}
      <div className={styles.marqueeContainer}>
        {/* Languages row - scrolling left */}
        <div className={`${styles.marquee} ${styles.scrollLeft}`}>
          <div className={styles.marqueeContent}>
            {/* Original set of languages */}
            {skillsData.languages.map((skill) => (
              <div key={`left-${skill.id}`} className={styles.skillCard}>
                <SkillCard skill={skill} />
              </div>
            ))}

            {/* Duplicate the languages for seamless loop */}
            {skillsData.languages.map((skill) => (
              <div key={`left-dup-${skill.id}`} className={styles.skillCard}>
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>

        {/* Skills row - scrolling right */}
        <div className={`${styles.marquee} ${styles.scrollRight}`}>
          <div className={styles.marqueeContent}>
            {/* Original set of skills */}
            {skillsData.skills.map((skill) => (
              <div key={`right-${skill.id}`} className={styles.skillCard}>
                <SkillCard skill={skill} />
              </div>
            ))}

            {/* Duplicate the skills for seamless loop */}
            {skillsData.skills.map((skill) => (
              <div key={`right-dup-${skill.id}`} className={styles.skillCard}>
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-blue-gradient {
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Skills;
