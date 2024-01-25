function HomeInfo() {
  const para =
    "Hello, I'm Goutham V, a recent software engineering graduate, passionate about building innovative solutions based in Bangalore, India📍.";
  return (
    <div className="homeinfo">
      <h3>SOFTWARE ENGINEER👋🏻</h3>
      <p>{para}</p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/gouthamv1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/assets/linkedin.svg" />
        </a>
        <a
          href="https://www.github.com/gouthamv10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="src/assets/github.svg" />
        </a>
      </div>
    </div>
  );
}

export default HomeInfo;
