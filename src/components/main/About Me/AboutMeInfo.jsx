function AboutMeInfo() {
  const heading = "A Passionate Software Engineer based in Bangalore, India📍.";
  const info = `As a Computer Science Engineering I'm Committed to problem-solving and innovation, I bring technical expertise in a variety of languages and technologies. My goal is to contribute to creating efficient and impactful software solutions.I possess a solid academic background and practical experience. My technical skills include proficiency in C, Java, JavaScript, HTML/CSS, DBMS/SQL, ReactJS, Node.js, Express.js, MongoDB, OOPs, Linux, SDLC, Git, and GitHub.`;
  return (
    <div className="aboutmeinfo">
      <h5>ABOUT ME</h5>
      <h4>{heading}</h4>
      <p>{info}</p>
    </div>
  );
}

export default AboutMeInfo;
