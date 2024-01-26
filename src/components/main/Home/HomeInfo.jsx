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
          <img src="assets/linkedin.svg" />
        </a>
        <a
          href="https://www.github.com/gouthamv10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/github.svg" />
        </a>
        <a
          href="https://leetcode.com/user3280F/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/footer/leetcode-footer.png"
            style={{ width: "24px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default HomeInfo;
