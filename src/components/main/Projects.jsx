import Project from "./Projects/Project";

function Projects() {
  const description = `Explore some of the projects I've worked on that showcase my technical and problem-solving abilities🧑🏻‍💻`;

  const project1 = {
    title: "project1",
    desc: "desc           Explore some of the projects I've worked on that showcase my technical and prob",
    tech: ["react, scss"],
    github: "github.com",
    link: "link",
  };
  return (
    <div className="projects" id="projects">
      <h5>PROJECTS</h5>
      <h4>{description}</h4>
      <div className="project-stack">
        <Project id={1} project={project1} />
        <Project id={2} project={project1} />
        <Project id={3} project={project1} />
      </div>
    </div>
  );
}

export default Projects;
