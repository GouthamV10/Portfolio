import HomeInfo from "./Home/HomeInfo";
import Image from "./Home/Image";
import TechStack from "./Home/TechStack";

function Home() {
  return (
    <div className="home">
      <div className="info">
        <HomeInfo />
        <Image />
      </div>
      <TechStack />
    </div>
  );
}

export default Home;
