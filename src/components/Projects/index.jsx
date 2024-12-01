import { useEffect, useState } from 'react';
import styles from "./projects.module.css"

export default function Projects() {
  console.log("Project component rendering");

  const [projects, setProjects] = useState([]);

  // Fetch projec on component mount
  useEffect(() => {
    const fetchProjects = async () => {
        try {
            const url = 'https://nodejsportfolio-4xnq.onrender.com/api/projects';
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
          
            const data = await response.json();
            console.log('Fetched data:', data);
            
            // Store all projects in state
            setProjects(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };
    
    fetchProjects();
}, []);


  let skillColor = [
    "#8E6044",
    "#774740",
    "#604F62",
    "#515B48",
    "#4F5662",
  ]

  // Rest of your component code remains the same
  return (
    <div className={styles.projectSection}  id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className={styles.projectCard} key={index}>
          <div className={styles.projectImage}>
            {project.image?.data && 
                <img 
                  src={`data:${project.image.contentType};base64,${project.image.data}`} 
                  alt={project.name || "Project"} 
                />
            }
          </div>
          <div className={styles.projectInfo}>
            <div className={styles.projectName}>{project.name || "Loading Project Name..."}</div>
            <div>{project.stack && project.stack.length > 0 && (
              <div className={styles.projectStack}>
                <div className={styles.stackList}>
                  {project.stack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={styles.stackTag}
                      style={{ 
                        backgroundColor: skillColor[Math.floor(Math.random() * skillColor.length)], 
                        color: '#F3E4CB' 
                      }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}</div>
            <div className={styles.projectDescription}>{project.description || "Loading description..."}</div>
            <a 
              href={project.link}
              className={styles.projectButton}
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}