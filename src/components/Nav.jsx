function Nav() {
  return (
    <div className="p-0 mx-4 flex items-center justify-center max-sm:px-5">
      <ul className="p-0 flex">
        <li className="px-4 pl-10 list-none max-sm:pl-2">
          <a
            href="#home"
            className="text-black text-base no-underline transition duration-100 ease-in-out hover:text-black hover:text-lg max-sm:text-sm max-sm:hover:text-base"
          >
            Home
          </a>
        </li>
        <li className="px-4 list-none">
          <a
            href="#about"
            className="text-black text-base no-underline transition duration-100 ease-in-out hover:text-black hover:text-lg max-sm:text-sm max-sm:hover:text-base"
          >
            About
          </a>
        </li>
        <li className="px-4 list-none">
          <a
            href="#projects"
            className="text-black text-base no-underline transition duration-100 ease-in-out hover:text-black hover:text-lg max-sm:text-sm max-sm:hover:text-base"
          >
            Projects
          </a>
        </li>
        <li className="px-4 list-none">
          <a
            href="#footer"
            className="text-black text-base no-underline transition duration-100 ease-in-out hover:text-black hover:text-lg max-sm:text-sm max-sm:hover:text-base"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
