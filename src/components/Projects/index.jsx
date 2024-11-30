import { useEffect, useState } from 'react';
import styles from "./projects.module.css"

export default function Projects() {
  console.log("Project component rendering");

  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [description, setDesc] = useState(null);
  const [link, setLink] = useState(null);
  const [stack, setStack] = useState(null);
  const [image, setImage] = useState(null);

  // Fetch projec on component mount
  useEffect(() => {
      const fetchProject = async () => {
          try {
              // const url = 'https://nodejsportfolio-4xnq.onrender.com/api/projects';
              // const response = await fetch(url);
              // const data = await response.json();
              const data = [{
                  "image": {
                      "data": "...", // truncated
                      "contentType": "image/jpeg"
                  },
                  "_id": "674a9c53a7feece42f3597fa",
                  "name": "Test",
                  "date": "2024-11-14",
                  "description": "Test",
                  "link": "https://github.com/codesuzyworld/NodeJsPortfolio",
                  "stack": ["Javascript", "Node.js"],
                  "__v": 0
              }];
              
              // Since data is an array, we need to access the first item
              if (data && data[0]) {
                  const project = data[0];
                  setName(project.name);
                  setDate(project.date);
                  setDesc(project.description);
                  setLink(project.link);
                  setStack(project.stack);
                  setImage(project.image);
              }
          } catch (error) {
              console.error("Error fetching project:", error);
          }
      };
      
      fetchProject();
  }, []);

  // Rest of your component code remains the same
  return (
      <div className="projectSection">
          <div>{name || "Loading Project Name..."}</div>
          <div>{date || "Loading date..."}</div>
          <div>{description || "Loading description..."}</div>
          <div>{link || "Loading link..."}</div>
          <div>{stack && stack.length > 0 && (
            <div className={styles.projectStack}>
              <div className={styles.stackList}>
                {stack.map((tech, index) => (
                    <span 
                      key={index}
                      className={styles.stackTag}
                      style={{ backgroundColor: '#444', color: '#fff' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}</div>
          {image?.data && 
            <img src={`data:${image.contentType};base64,${image.data}`} alt={name || "Project"} />
          }
      </div>
  );
}