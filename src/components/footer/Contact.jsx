import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="contact">
      <h4>CONTACT</h4>
      <h2>Connect With Me 👇🏻</h2>
      <div className="contactinfo">
        <ContactInfo
          url="src/assets/phone.svg"
          name="Location"
          desc="Bengaluru, India"
        />
        <ContactInfo
          url="src/assets/phone.svg"
          name="Location"
          desc="Bengaluru, India"
        />
        <ContactInfo
          url="src/assets/phone.svg"
          name="Location"
          desc="Bengaluru, India"
        />
      </div>
    </div>
  );
}

export default Contact;
