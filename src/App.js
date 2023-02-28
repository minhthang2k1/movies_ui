import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div id="main">
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
