import * as types from "../constants";

const initialState = {
  TrendingMovies: null,
  LatestMovies: null,
  TrailerMovies: null,
  SearchMovies: null,
  IdMovies: null,
  TokenLogin: null,
  SessionIdResponse: null,
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
    case types.GET_ID_MOVIES:
      return {
        ...state,
        IdMovies: payload,
      };
    case types.POST_TOKEN_LOGIN:
      return {
        ...state,
        TokenLogin: payload,
      };
    case types.POST_SESSIONID_RESPONSE:
      return {
        ...state,
        SessionIdResponse: payload,
      };
    default:
      return state;
  }
};

export default reducers;
