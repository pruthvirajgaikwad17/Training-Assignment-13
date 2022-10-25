import postsReducer from "./reducer";

import { combineReducers } from "redux";

const roorReducer = combineReducers({
  postsReducer,
});

export default roorReducer;
