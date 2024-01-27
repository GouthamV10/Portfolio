function SocialLinks() {
  return (
    <div className="max-sm:flex max-sm:flex-wrap max-sm:items-center max-sm:justify-start max-sm:py-4">
      <div className="py-2 max-sm:w-1/2 max-sm:px-2 max-sm:py-0">
        <a
          className="flex items-center no-underline text-white gap-2 max-sm:gap-1"
          href="https://www.linkedin.com/in/gouthamv1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/footer/linkedin-footer.png"
            className="w-7 max-sm:w-5"
          />
          <p className="text-base m-0 max-sm:text-sm">LinkedIn</p>
        </a>
      </div>
      <div className="py-2 max-sm:w-1/2 max-sm:px-2 max-sm:py-0">
        <a
          className="flex items-center no-underline text-white gap-2 max-sm:gap-1"
          href="https://www.github.com/gouthamv10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/footer/github-footer.png"
            className="w-8 max-sm:w-6"
          />
          <p className="text-base m-0 max-sm:text-sm">Github</p>
        </a>
      </div>
      <div className="py-2 max-sm:w-1/2 max-sm:px-2 max-sm:py-0">
        <a
          className="flex items-center no-underline text-white gap-2 max-sm:gap-1"
          href="https://leetcode.com/user3280F/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/footer/leetcode-footer.png"
            className="w-8 max-sm:w-6"
          />
          <p className="text-base m-0 max-sm:text-sm">Leetcode</p>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
