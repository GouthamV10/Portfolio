import PropTypes from "prop-types";

function ContactInfo({ url, name, desc }) {
  return (
    <div className="flex gap-4 items-center ">
      <img className="h-10 w-10" src={url} alt="error"></img>
      <div className="flex flex-col justify-evenly ">
        <h6 className="text-m text-darkcyan text-gray-300 m-0 p-0">{name}</h6>
        <p className="text-sm m-0 p-0">{desc}</p>
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
