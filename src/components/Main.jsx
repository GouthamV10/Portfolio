import AboutMe from "./main/Aboutme";
import Home from "./main/Home";
import Projects from "./main/Projects";

function Main() {
  return (
    <div className="main">
      <div className="sizedBox" id="home"></div>
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default Main;
