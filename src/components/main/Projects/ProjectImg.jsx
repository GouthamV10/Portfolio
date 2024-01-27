import PropTypes from "prop-types";

function ProjectImg({ imageUrl }) {
  return (
    <div className="w-3/4 overflow-hidden">
      <img
        className="border-l border-inset border-black rounded-lg"
        src={imageUrl}
      ></img>
    </div>
  );
}
ProjectImg.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default ProjectImg;
