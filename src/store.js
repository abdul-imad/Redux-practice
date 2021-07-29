import { createStore } from "redux";
import allReducers from "./redux/rootReducer";

const store = createStore(allReducers);

export default store;
