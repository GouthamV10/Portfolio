function AboutMeInfo() {
  const heading = "A Passionate Software Engineer based in Bangalore, India📍.";
  const info = `As a Computer Science Engineering I'm Committed to problem-solving and innovation, I bring technical expertise in a variety of languages and technologies. My goal is to contribute to creating efficient and impactful software solutions.I possess a solid academic background and practical experience. My technical skills include proficiency in C, Java, JavaScript, HTML/CSS, DBMS/SQL, ReactJS, Node.js, Express.js, MongoDB, OOPs, Linux, SDLC, Git, and GitHub.`;
  return (
    <div className="w-5/6 flex flex-col items-start text-left pl-12 max-sm:items-center max-sm:text-center max-sm:p-0 max-sm:m-0">
      <h5 className="m-0 p-0 text-cyan-800 text-lg font-bold pt-2">ABOUT ME</h5>
      <h4 className="m-0 p-0 pt-2 font-semibold text-xl max-sm:text-left">
        {heading}
      </h4>
      <p className="m-0 p-0 pt-5 text-sm max-sm:text-left">{info}</p>
    </div>
  );
}

export default AboutMeInfo;
