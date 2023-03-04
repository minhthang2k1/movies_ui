import Heading from "./heading";
import "./trailer.css";
import Ontv from "./ontv";
import Theater from "./theater";

const Trailer = () => {
  return (
    <div id="trailer">
      <Heading />
      <div className="trailer-content">
        <div className="tv">
          <Ontv />
        </div>
        <div className="theater">
          <Theater />
        </div>
      </div>
    </div>
  );
};
export default Trailer;
