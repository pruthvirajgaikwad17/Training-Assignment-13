import { applyMiddleware, createStore } from "redux";

import roorReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(roorReducer, applyMiddleware(thunk));

export default store;
