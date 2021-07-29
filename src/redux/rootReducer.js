import { combineReducers } from "redux";
import batReducer from "./bat/batReducer";
import ballReducer from "./ball/ballReducer";
import todoReducer from "./todo/todoReducer";

const allReducers = combineReducers({
	bat: batReducer,
	balls: ballReducer,
	todo: todoReducer,
});

export default allReducers;
