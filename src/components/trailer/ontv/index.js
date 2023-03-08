import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ImgPlay from "../../../assets/play.svg";
import Click from "../../Click/Click";
import * as actions from "../../store/actions";

import "./ontv.css";

const Ontv = () => {
  const dispatch = useDispatch();
  const { LatestMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getLatestMovies());
  }, []);
  return (
    <div id="ontv" className="media scroller-wrap should_fade is_fading">
      <div className="trending-scroll loaded column-content flex">
        {LatestMovies &&
          LatestMovies.map((data, index) => (
            <div className="container" key={index}>
              <div className="img-content">
                <Link>
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      data.backdrop_path || data.poster_path
                    }`}
                    alt="thang 1"
                  />
                </Link>

                <Click className="click" />

                <div className="play">
                  <img src={ImgPlay} alt="play trailer" />
                </div>
              </div>
              <div className="content">
                <h2>
                  <Link>{data.name}</Link>
                </h2>
                <h3>{data.original_name}</h3>
              </div>
              <div className="hover"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ontv;
