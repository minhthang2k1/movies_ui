import * as types from "../constants";

const initialState = {
  TrendingMovies: null,
  LatestMovies: null,
  TrailerMovies: null,
  SearchMovies: null,
};

const reducers = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case types.GET_API_TRENDING:
      return {
        ...state,
        TrendingMovies: payload,
      };
    case types.GET_API_TRAILERS:
      return {
        ...state,
        TrailerMovies: payload,
      };
    case types.GET_LATEST_MOVIES:
      return {
        ...state,
        LatestMovies: payload,
      };
    case types.GET_SEARCH_MOVIES:
      return {
        ...state,
        SearchMovies: payload,
      };
    default:
      return state;
  }
};

export default reducers;
