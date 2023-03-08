import CardResult from "./CardResult";
import style from "./SearchResults.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import React, { useEffect } from "react";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getSearchMovies());
  }, []);

  return (
    <div className={style.searchResults}>
      <div className={style.results}>
        {SearchMovies &&
          SearchMovies.results.map((item, index) => {
            return <CardResult key={index} data={item} />;
          })}
      </div>
    </div>
  );
};

export default SearchResults;
