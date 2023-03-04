import { Link } from "react-router-dom";

import "./heading.css";
const Heading = () => {
  function handleSelector() {
    const btntv = document.querySelector(".tv-theater .tv");
    const btntheater = document.querySelector(".tv-theater .theater");
    btntheater.addEventListener("click", () => {
      btntheater.classList.add("native");
      btntv.classList.remove("native");
    });
    btntv.addEventListener("click", () => {
      btntv.classList.add("native");
      btntheater.classList.remove("native");
    });
  }
  return (
    <div className="header-trailer">
      <h2>Lastest Trailers</h2>
      <div className="tv-theater">
        <h3 onClick={handleSelector} className="native tv">
          <Link>On TV</Link>
        </h3>
        <h3 onClick={handleSelector} className="theater">
          <Link>In Theaters</Link>
        </h3>
      </div>
    </div>
  );
};

export default Heading;
