import axios from "axios";
import * as types from "../constants";
import { query } from "../../Search/SearchForm";
import { id } from "../../trailer/ontv";

console.log(id);

const API_KEY = "26370393c28fe739f97aa4e0322e030f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const data = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: types.GET_API_TRENDING, payload: data.data.results });
  } catch (error) {
    console.log("Get Trending Movies error", error);
  }
};

export const getLatestMovies = () => async (dispatch) => {
  try {
    const data = await axios.get(
      `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: types.GET_LATEST_MOVIES, payload: data.data.results });
  } catch (error) {
    console.log("Get Latest Movies error", error);
  }
};

export const getSearchMovies = () => async (dispatch) => {
  try {
    const data = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    dispatch({ type: types.GET_SEARCH_MOVIES, payload: data.data.results });
  } catch (error) {
    console.log("Get Search Movies error", error);
  }
};

export const getIdMovies = () => async (dispatch) => {
  try {
    const data = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    dispatch({ type: types.GET_ID_MOVIES, payload: data.data.results });
  } catch (error) {
    console.log("Get ID Movies error", error);
  }
};
