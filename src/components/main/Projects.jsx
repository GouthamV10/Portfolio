import projects from "../../Constants/projects";
import Project from "./Projects/Project";

function Projects() {
  const description = `Explore some of the projects I've worked on that showcase my technical and problem-solving abilities🧑🏻‍💻`;
  return (
    <div className="projects" id="projects">
      <h5>PROJECTS</h5>
      <h4>{description}</h4>
      <div className="project-stack">
        {projects.map((project) => (
          <Project key={project.id} id={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
