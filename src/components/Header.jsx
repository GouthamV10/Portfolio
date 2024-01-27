import Nav from "./Nav";

function Header() {
  return (
    <div className="w-full flex flex-wrap items-center justify-between fixed top-0 left-0 bg-white text-black z-10 m-0 p-0 border-b-2 border-black">
      <h1 className="p-4 m-0 text-2xl font-bold">Goutham V</h1>
      <Nav />
    </div>
  );
}

export default Header;
