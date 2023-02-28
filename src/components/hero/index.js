import Imghero from "../../assets/hero-1.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <img src={Imghero} />
      <div className="search-title">
        <div className="title">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="search">
          <form className="search-form" action="/">
            <label>
              <input placeholder="Search for a movie, tv show, person......" />
            </label>
            <input type="submit" value="search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
