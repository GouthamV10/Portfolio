import Contact from "./footer/Contact";
import SocialLinks from "./footer/SocialLinks";

function Footer() {
  return (
    <div
      id="footer"
      className="w-screen bg-black text-white p-4 m-0 flex flex-col items-center border-t-4 border-cyan-700"
    >
      <div className="w-11/12 flex justify-between p-2 max-sm:flex-col">
        <Contact />
        <SocialLinks />
      </div>
      <p className="p-5 pb-0 pt-25 text-sm">
        Copyright &copy; 2024. All rights are reserved
      </p>
    </div>
  );
}

export default Footer;
