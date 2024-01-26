import PropTypes from "prop-types";
import ProjectDesc from "./ProjectDesc";
import ProjectImg from "./ProjectImg";

function Project({ id, image, project }) {
  const comp1 = <ProjectImg imageUrl={image} />;
  const comp2 = <ProjectDesc project={project} />;

  return (
    <div className="project">
      {id % 2 === 0 ? (
        <>
          {comp2}
          {comp1}
        </>
      ) : (
        <>
          {comp1}
          {comp2}
        </>
      )}
    </div>
  );
}

Project.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
