import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ImgPlay from "../../../assets/play.svg";
import Click from "../../Click/Click";
import * as actions from "../../store/actions";

import "./ontv.css";
import PlayVideo from "../../PlayVideo";

export let id = "";

const Ontv = () => {
  const dispatch = useDispatch();
  const { LatestMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getLatestMovies());
  }, []);

  const [idMovie, setIdMovie] = useState("");
  const [openModal, setOpenModal] = useState(false);

  function handleClick(key) {
    setOpenModal(true);
    setIdMovie(key);
    id = LatestMovies[key].id;
    return id;
  }
  console.log(id);

  return (
    <>
      <div id="ontv" className="media scroller-wrap should_fade is_fading">
        <div className="trending-scroll loaded column-content flex">
          {LatestMovies &&
            LatestMovies.map((data, index) => (
              <div className="container" key={index}>
                <div className="img-content" onClick={() => handleClick(index)}>
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
      <PlayVideo openModal={openModal} setOpenModal={setOpenModal} id={id} />
    </>
  );
};

export default Ontv;
