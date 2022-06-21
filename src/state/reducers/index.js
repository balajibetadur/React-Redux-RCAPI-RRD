import { combineReducers } from "redux";
import countReducer from "./countReducer";

const reducers = combineReducers({
    todoList: countReducer
})

export default reducers