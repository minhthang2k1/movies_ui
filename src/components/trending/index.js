import { Link } from "react-router-dom";

import Thisweek from "./thisweek";
import Today from "./today";
import "./trending.css";

const Trending = () => {
  function handleSelector() {
    const btnToday = document.querySelector(".today-thisweek .today");
    const btnThisweek = document.querySelector(".today-thisweek .thisweek");
    btnThisweek.addEventListener("click", () => {
      btnThisweek.classList.add("native");
      btnToday.classList.remove("native");
    });
    btnToday.addEventListener("click", () => {
      btnToday.classList.add("native");
      btnThisweek.classList.remove("native");
    });
  }

  return (
    <div id="trending">
      <div className="header-trending">
        <h2>Trending</h2>
        <div className="today-thisweek">
          <h3 onClick={handleSelector} className="native today">
            <Link>Today</Link>
          </h3>
          <h3 onClick={handleSelector} className="thisweek">
            <Link>This Week</Link>
          </h3>
        </div>
      </div>
      <div className="trending-content">
        <div className="thisweek">
          <Thisweek />
        </div>
        <div className="today">
          <Today />
        </div>
      </div>
    </div>
  );
};

export default Trending;
