import PropTypes from "prop-types";

function ProjectDesc({ project }) {
  const { title, desc, tech, github, link } = { ...project };
  return (
    <div className="projectdesc">
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="tech">
        {tech.map((techItem, index) => (
          <h5 key={index}>{techItem}</h5>
        ))}
      </div>
      <div className="desclinks">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <span>Code </span>
          <img src={"/src/assets/projects/icons8-github-48.png"} />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>Live Demo</span>{" "}
          <img src={"/src/assets/projects/icons8-share.svg"} />
        </a>
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
