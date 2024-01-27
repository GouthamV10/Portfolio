import PropTypes from "prop-types";

function ProjectDesc({ project }) {
  const { title, desc, tech, github, link } = { ...project };
  let gitcheck = github;
  let linkcheck = link;
  return (
    <div className="projectdesc flex flex-col justify-around m-0 ">
      <h4 className="m-0 text-cyan-700 text-xl py-2 font-semibold text-center ">
        {title}
      </h4>
      <p className="p-0 pb-2 text-base text-center ">{desc}</p>
      <div className="tech flex justify-center items-center flex-wrap pb-2 m-0 text-left max-sm:justify-start">
        {tech.map((techItem, index) => (
          <h5
            className="m-0 text-lg p-0 px-2 italic text-gray-700 underline max-sm:text-base"
            key={index}
          >
            {techItem}
          </h5>
        ))}
      </div>
      <div className="flex justify-center items-center m-0 p-2 gap-5">
        {gitcheck === "" ? (
          <span></span>
        ) : (
          <a
            className="text-black flex items-center no-underline"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm px-1">Code </span>
            <img
              className="m-0  w-5 "
              src={"/assets/projects/icons8-github-48.png"}
            />
          </a>
        )}
        {linkcheck === "" ? (
          <span></span>
        ) : (
          <a
            className="text-black flex items-center no-underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm px-1 ">Live Demo</span>{" "}
            <img
              className="m-0 w-5"
              src={"/assets/projects/icons8-share.svg"}
            />
          </a>
        )}
      </div>
    </div>
  );
}

ProjectDesc.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectDesc;
