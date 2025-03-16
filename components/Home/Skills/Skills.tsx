import React from "react";
import SkillCard from "./SkillCard";
import styles from "./skills.module.css";
import { skillsData } from "@/Data/data";

const Skills: React.FC = () => {
  return (
    
    <section className="py-10" style={{ backgroundColor:'black'}}>
      
      <div className="container mx-auto">
        
        <h1 className="text-4xl font-bold text-center mb-8 text-white">My Skills</h1>
        
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
      </div>
    </section>
  );
};

export default Skills;
