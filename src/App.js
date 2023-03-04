import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Trending from "./components/trending";
import Trailer from "./components/trailer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div id="main">
        <Hero />
        <Trending />
        <Trailer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
