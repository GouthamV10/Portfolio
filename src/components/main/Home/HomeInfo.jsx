function HomeInfo() {
  const para =
    "Hello, I'm Goutham V, a recent software engineering graduate, passionate about building innovative solutions based in Bangalore, India📍.";
  return (
    <div className="text-left sm:w-4/4 max-sm:text-center max-sm:items-center">
      <h3 className="text-3xl font-semibold pb-5 m-0 max-sm:text-left max-sm:ml-16 max-sm:pb-5">
        SOFTWARE ENGINEER👋🏻
      </h3>
      <p className="text-lg m-0">{para}</p>
      <div className="py-4 flex max-sm:justify-center max-sm:px-5 ">
        <a
          href="https://www.linkedin.com/in/gouthamv1"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4"
        >
          <img src="assets/linkedin.svg" />
        </a>
        <a
          href="https://www.github.com/gouthamv10"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4"
        >
          <img src="assets/github.svg" />
        </a>
        <a
          href="https://leetcode.com/user3280F/"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-4"
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
