import { useEffect, useState } from 'react';
import styles from "./skills.module.css"

export default function Skills() {
    console.log("Skills component rendering"); 
    const [skills, setSkills] = useState([]); 
  
    useEffect(() => {
      const fetchSkills = async () => {
          try {
              const url = 'https://nodejsportfolio-4xnq.onrender.com/api/skills';
              const response = await fetch(url);
              const data = await response.json();
              setSkills(data); 
          } catch (error) {
              console.error("Error fetching skills:", error);
          }
      };

      fetchSkills();
    }, []);

    let skillColor = [
      "#8E6044",
      "#774740",
      "#604F62",
      "#515B48",
      "#4F5662",
    ]

    return (
        <div className="skillSection">
          <h2>Skills</h2>
          <div className={styles.skillContainer}>
            {skills.map((skill, skillIndex) => (
              <div key={skillIndex}>
                <div className={styles.skillName}>{skill.name || "Loading Skill Name..."}</div>
                {skill.subskills && skill.subskills.length > 0 && (
                  <div className={styles.skillStack}>
                    {skill.subskills.map((tech, index) => (
                      <span 
                        key={index}
                        className={styles.skillTag}
                        style={{ 
                          backgroundColor: skillColor[Math.floor(Math.random() * skillColor.length)], 
                          color: '#F3E4CB' 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )
}