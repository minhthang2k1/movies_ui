import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import ImgPlay from "../../../assets/play.svg";
import Click from "../../Click/Click";

import "./ontv.css";
import PlayVideo from "../../PlayVideo";
import Heading from "../heading";

export let id = "";

const Ontv = ({ data, trailer }) => {
  const [idMovie, setIdMovie] = useState("");
  const [openModal, setOpenModal] = useState(false);

  function handleClick(key) {
    setOpenModal(true);
    setIdMovie(key);
    id = data[key].id;
    return id;
  }

  function handleHover(key) {
    const changeBg = document.querySelector(".wrapper-ontv");
    data.map((data, index) => {
      if (key === index) {
        return (changeBg.style.backgroundImage = `url(http://image.tmdb.org/t/p/original${
          data.backdrop_path || data.poster_path
        })`);
      }
    });
  }

  return (
    <>
      {data && (
        <div
          className="wrapper-ontv"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original${
              data[0].backdrop_path || data[0].poster_path
            })`,
          }}
        >
          <Heading trailer={trailer} />
          <div id="ontv" className="media scroller-wrap should_fade is_fading">
            <div className="trending-scroll loaded column-content flex">
              {data.map((data, index) => (
                <div
                  className="container"
                  key={index}
                  onMouseOver={() => handleHover(index)}
                >
                  <div
                    className="img-content"
                    onClick={() => handleClick(index)}
                  >
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
          <PlayVideo
            openModal={openModal}
            setOpenModal={setOpenModal}
            id={id}
          />
        </div>
      )}
    </>
  );
};

export default Ontv;
