import Ontv from "./ontv";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

export let trailer = "tv/on_the_air";

const Trailer = () => {
  const dispatch = useDispatch();
  const { LatestMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getLatestMovies());
  }, [trailer]);

  return (
    <div id="trailer">
      <div className="trailer-content">
        <div className="tv">
          <Ontv data={LatestMovies} trailer={trailer} />
        </div>
      </div>
    </div>
  );
};
export default Trailer;
