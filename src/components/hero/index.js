import { useState } from "react";

import Imghero from "../../assets/hero-1.jpg";
import "./hero.css";

const Hero = () => {
  const [item, setItem] = useState("");
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
          <form className="search-form" action="/search">
            <div>
              <label>
                <input
                  placeholder="Search for a movie, tv show, person......"
                  name="query"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
              </label>
              <input type="submit" value="search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
