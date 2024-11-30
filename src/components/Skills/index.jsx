import { useEffect, useState } from 'react';
import styles from "./skills.module.css"

export default function Skills() {
    console.log("Skills component rendering"); 
    const [name, setName] = useState(null);
    const [tagColor, setTagColor] = useState(null);
    const [subskills, setSubskills] = useState(null);
  
    // Fetch skills on component mount
    useEffect(() => {
      const fetchSkills = async () => {
          try {
              // const url = 'https://nodejsportfolio-4xnq.onrender.com/api/skills';
              // const response = await fetch(url);
              // const data = await response.json();
              const data = [{
                  "_id": "674ac0de8ad68c7f3d877e4c",
                  "name": "Front End Dev",
                  "tagColor": "#c85656",
                  "subskills": ["Javascript", "Node.js"],
                  "__v": 0
              }];
              
              // Since data is an array, we need to access the first item
              if (data && data[0]) {
                  const skill = data[0];
                  setName(skill.name);
                  setTagColor(skill.tagColor);
                  setSubskills(skill.subskills);
              }
          } catch (error) {
              console.error("Error fetching skill:", error);
          }
      };

      fetchSkills();
    }, []);

      return(
        <div className="skillSection">
        <div>{name || "Loading Skill Name..."}</div>
        <div>{tagColor || "Loading tagColor..."}</div>
        <div>{subskills && subskills.length > 0 && (
          <div className={styles.skillStack}>
            <div className={styles.skillList}>
              {subskills.map((tech, index) => (
                  <span 
                    key={index}
                    className={styles.skillTag}
                    style={{ backgroundColor: '#444', color: '#fff' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}</div>
    </div>
      )
    }