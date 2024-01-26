import PropTypes from "prop-types";

function ProjectImg({ imageUrl }) {
  return (
    <div className="projectimg">
      <img src={imageUrl}></img>
    </div>
  );
}
ProjectImg.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default ProjectImg;
