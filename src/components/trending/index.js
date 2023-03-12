import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../store/actions";

import "./trending.css";
import Scroller from "./scroller";

export let trending = "day";

const Trending = () => {
  const dispatch = useDispatch();
  const { TrendingMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getTrendingMovies());
  }, [trending]);

  const selectors = ["Today", "This Week"];
  const [state, setState] = useState(false);

  function handleSelector(index) {
    const btnSelectors = document.querySelectorAll(".today-thisweek h3");
    const btnColor = document.querySelectorAll(".today-thisweek a");

    state === false ? setState(true) : setState(false);

    for (let i = 0; i < 2; i++) {
      if (i === index) {
        if (i === 0) {
          trending = "day";
        } else {
          trending = "week";
        }

        btnSelectors[i].style.cssText = `
        border-radius: 30px;
        background-color: rgba(3, 37, 65, 1);
        `;
        btnColor[i].style.color = "rgba(30, 213, 169, 1)";
      } else {
        btnSelectors[i].style.cssText = `
          border: none;
          background-color: transparent;
        `;
        btnColor[i].style.color = "rgba(3, 37, 65, 1)";
      }
    }
    return trending;
  }

  return (
    <div className="wrapper-trending">
      <div id="trending">
        <div className="header-trending">
          <h2>Trending</h2>
          <div className="today-thisweek">
            {selectors.map((data, index) => (
              <h3 onClick={() => handleSelector(index)} key={index}>
                <Link>{data}</Link>
              </h3>
            ))}
          </div>
        </div>
        <div className="trending-content">
          <div className="thisweek">
            <Scroller data={TrendingMovies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
