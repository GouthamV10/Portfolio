import AboutMeImage from "./About Me/AboutMeImage";
import AboutMeInfo from "./About Me/AboutMeInfo";

function AboutMe() {
  return (
    <div className="max-sm:flex-wrap max-sm:w-5/6 max-sm:p-8 max-sm:mt-16 max-sm:mb-12 w-3/4 text-center flex items-center justify-center mt-32 mb-24 p-10 border-2 border-dotted border-black rounded-lg">
      <AboutMeImage />
      <AboutMeInfo />
    </div>
  );
}

export default AboutMe;
