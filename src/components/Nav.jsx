function Nav() {
  return (
    <div className="p-0 mx-4 flex items-center justify-center">
      <ul className="p-0 flex">
        <li className="px-4 pl-10 list-none">
          <a
            href="#home"
            className="text-black text-base no-underline transition duration-100 ease-in-out hover:text-black hover:text-lg"
          >
            Home
          </a>
        </li>
        <li className="px-4 list-none">
          <a
            href="#about"
            className="text-black text-base no-underline transition duration-100 ease-in-out hover:text-black hover:text-lg"
          >
            About
          </a>
        </li>
        <li className="px-4 list-none">
          <a
            href="#projects"
            className="text-black text-base no-underline transition duration-100 ease-in-out hover:text-black hover:text-lg"
          >
            Projects
          </a>
        </li>
        <li className="px-4 list-none">
          <a
            href="#footer"
            className="text-black text-base no-underline transition duration-100 ease-in-out hover:text-black hover:text-lg"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
