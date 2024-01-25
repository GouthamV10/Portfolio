import Project from "./Projects/Project";

function Projects() {
  const description = `Explore some of the projects I've worked on that showcase my technical and problem-solving abilities🧑🏻‍💻`;

  const project1 = {
    title: "project1",
    desc: "desc",
    tech: ["react, scss"],
    github: "github.com",
    link: "link",
  };
  return (
    <div className="projects">
      <h4>PROJECTS</h4>
      <h3>{description}</h3>
      <Project id={0} project={project1} />
      <Project id={1} project={project1} />
      <Project id={2} project={project1} />
    </div>
  );
}

export default Projects;
