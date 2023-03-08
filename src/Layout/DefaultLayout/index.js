import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Trailer from "../../components/trailer";
import Trending from "../../components/trending";

import "./DefaultLayout.css";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <div id="main">
        <Hero />
        <Trending />
        <Trailer />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
