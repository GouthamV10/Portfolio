function SocialLinks() {
  return (
    <div className="max-sm:flex max-sm:items-center max-sm:gap-5 max-sm:pt-4">
      <div className="py-2">
        <a
          className="flex items-center no-underline text-white gap-2 max-sm:gap-1"
          href="https://www.linkedin.com/in/gouthamv1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/footer/linkedin-footer.png" className="w-7" />
          <p className="text-base m-0">LinkedIn</p>
        </a>
      </div>
      <div className="py-2">
        <a
          className="flex items-center no-underline text-white gap-2 max-sm:gap-1"
          href="https://www.github.com/gouthamv10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/footer/github-footer.png" className="w-8" />
          <p className="text-base m-0">Github</p>
        </a>
      </div>
      <div className="py-2">
        <a
          className="flex items-center no-underline text-white gap-2 max-sm:gap-1"
          href="https://leetcode.com/user3280F/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/footer/leetcode-footer.png" className="w-8" />
          <p className="text-base m-0">Leetcode</p>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
