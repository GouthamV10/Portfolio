import PropTypes from "prop-types";

function ContactInfo({ url, name, desc }) {
  return (
    <div className="contactinfo">
      <img src={url} alt="error"></img>
      <div>
        <h6>{name}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default ContactInfo;
