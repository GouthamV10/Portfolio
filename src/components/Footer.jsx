import Contact from "./footer/Contact";
import SocialLinks from "./footer/SocialLinks";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footerinfo">
        <Contact />
        <SocialLinks />
      </div>
      <p>Copyright &copy; 2024. All rights are reserved</p>
    </div>
  );
}

export default Footer;
