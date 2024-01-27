import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="p-0 m-0 w-full overflow-x-hidden font-mono" id="home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
