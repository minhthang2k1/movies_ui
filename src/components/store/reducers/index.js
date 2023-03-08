import { combineReducers } from "redux";
import reducers from "./reducers";

const rootReducer = combineReducers({ infoMovies: reducers });

export default rootReducer;
