import AboutMe from "./main/Aboutme";
import Home from "./main/Home";
import Projects from "./main/Projects";

function Main() {
  return (
    <div className="mt-24 m-0 p-0 flex flex-col items-center">
      <Home />
      <div id="about"></div>
      <AboutMe />
      <div id="projects"></div>
      <Projects />
    </div>
  );
}

export default Main;
