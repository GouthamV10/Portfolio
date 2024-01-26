import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="contact">
      <h4>CONTACT</h4>
      <h2>Connect With Me 👇🏻</h2>
      <div className="contactrow">
        <ContactInfo
          url="assets/footer/location.png"
          name="Location"
          desc="Bengaluru, India"
        />
        <ContactInfo
          url="assets/footer/mail.png"
          name="Mail"
          desc="goutham.v.16@gmail.com"
        />
        <ContactInfo
          url="assets/footer/call.png"
          name="Phone Number"
          desc="+91 8660381127"
        />
      </div>
    </div>
  );
}

export default Contact;
