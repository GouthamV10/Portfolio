import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="flex flex-col">
      <h4 className="text-cyan-500 font-semibold text-xl m-0 p-0">CONTACT</h4>
      <h2 className="text-white text-2xl m-0 p-0 ">Connect With Me 👇🏻</h2>
      <div className="flex items-center gap-10 py-5 max-sm:flex-col max-sm:items-start">
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
