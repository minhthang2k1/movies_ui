import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

import "./today.css";
import Click from "../../Click/Click";
import * as actions from "../../store/actions";

const Today = () => {
  const dispatch = useDispatch();
  const { TrendingMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getTrendingMovies());
  }, []);
  return (
    <div id="today" className="media scroller-wrap should_fade is_fading">
      <div className="trending-scroll loaded column-content flex">
        {TrendingMovies &&
          TrendingMovies.map((data, index) => (
            <div className="container" key={index}>
              <Link>
                <img
                  src={`http://image.tmdb.org/t/p/w154/${data.poster_path}`}
                />
              </Link>
              <div className="options">
                <Click />
              </div>
              <div className="content">
                <h2>
                  <Link>{data.name || data.original_title}</Link>
                </h2>
                <p>{data.release_date || data.first_air_date}</p>
              </div>
              <div className="hover"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Today;
