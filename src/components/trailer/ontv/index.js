import { Link } from "react-router-dom";

import Imgepisode from "../../../assets/episode-1.jpg";
import ImgPlay from "../../../assets/play.svg";

import "./ontv.css";
const Ontv = () => {
  return (
    <div id="ontv">
      <div className="container">
        <div className="img-content">
          <Link>
            <img src={Imgepisode} />
          </Link>
          <div className="play">
            <img src={ImgPlay} />
          </div>
        </div>
        <div className="content">
          <h2>
            <Link>Những người còn sót lại</Link>
          </h2>
          <h3>Episode 8 review</h3>
        </div>
      </div>
    </div>
  );
};

export default Ontv;
