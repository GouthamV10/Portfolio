import HomeInfo from "./Home/HomeInfo";
import Image from "./Home/Image";
import TechStack from "./Home/TechStack";

function Home() {
  return (
    <div className="max-sm:flex-wrap max-sm:w-5/6 w-3/4 text-center flex flex-col justify-center items-center px-10 py-8 border-2 border-dotted border-black rounded-lg mt-4 ">
      <div className="max-sm:flex-col flex items-center justify-around">
        <HomeInfo />
        <Image />
      </div>
      <TechStack />
    </div>
  );
}

export default Home;
