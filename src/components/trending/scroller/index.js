import "./scroller.css";

import { Link } from "react-router-dom";

import Click from "../../Click/Click";

const Scroller = ({ data }) => {
  return (
    <div id="today" className="media scroller-wrap should_fade is_fading">
      <div className="trending-scroll loaded column-content flex">
        {data &&
          data.map((data, index) => (
            <div className="container" key={index}>
              <Link to="/movie">
                <img
                  src={`http://image.tmdb.org/t/p/w154/${data.poster_path}`}
                />
              </Link>
              <div className="options">
                <Click />
              </div>
              <div className="content">
                <h2>
                  <Link to="/movie">{data.name || data.original_title}</Link>
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

export default Scroller;
