import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducer";

const store = createStore(allReducers, composeWithDevTools());

export default store;


