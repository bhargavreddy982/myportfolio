import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { GitHub as GitHubIcon, Language as WebsiteIcon } from "@material-ui/icons";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      
      <div className="icons-container">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <WebsiteIcon />
        </a>
        <a href="https://github.com/bhargavreddy982" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
