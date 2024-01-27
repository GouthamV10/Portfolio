import projects from "../../Constants/projects";
import Project from "./Projects/Project";

function Projects() {
  const description = `Explore some of the projects I've worked on that showcase my technical and problem-solving abilities🧑🏻‍💻`;
  return (
    <div className="max-sm:flex-wrap max-sm:w-5/6 max-sm:p-8 w-3/4 mx-auto mt-8 mb-24 p-8 border-2 border-dotted border-black rounded-lg ">
      <h5 className="m-0 text-darkcyan text-lg p-0 text-left text-cyan-800 font-semibold max-sm:text-center">
        PROJECTS
      </h5>
      <h4 className="m-0 p-0 pt-2 font-bold text-xl max-sm:text-left">
        {description}
      </h4>
      <div className="flex flex-col items-center justify-center">
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            image={project.image}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
