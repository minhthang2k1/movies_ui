import { Link } from "react-router-dom";
import { useState } from "react";

import "./heading.css";

export let trailer = "tv/on_the_air";

const Heading = () => {
  const header = ["On TV", "In Theaters"];

  const [state, setState] = useState(false);

  function handleHeader(index) {
    state === false ? setState(true) : setState(false);
    const btnHeader = document.querySelectorAll(".tv-theater h3");
    const btnColor = document.querySelectorAll(".tv-theater a");
    for (let i = 0; i < 2; i++) {
      if (i === index) {
        if (i === 0) {
          trailer = "tv/on_the_air";
        } else {
          trailer = "movie/now_playing";
        }

        btnHeader[i].style.cssText = `
        border-radius: 30px;
        background-color: rgba(30, 213, 169, 1);
        `;
        btnColor[i].style.color = "rgba(3, 37, 65, 1)";
      } else {
        btnHeader[i].style.cssText = `
        border: none;
        background-color: transparent;
        `;
        btnColor[i].style.color = "#fff";
      }
    }
    return trailer;
  }

  return (
    <div className="header-trailer">
      <h2>Lastest Trailers</h2>
      <div className="tv-theater">
        {header.map((data, index) => (
          <h3 key={index} onClick={() => handleHeader(index)}>
            <Link>{data}</Link>
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Heading;
