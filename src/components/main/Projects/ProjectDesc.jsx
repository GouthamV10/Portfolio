import PropTypes from "prop-types";

function ProjectDesc({ project }) {
  const { title, desc, tech, github, link } = { ...project };
  return (
    <div className="projectdesc">
      <h4>{title}</h4>
      <p>{desc}</p>
      <h5>{tech}</h5>
      <div className="logo">
        {github}
        {link}
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
