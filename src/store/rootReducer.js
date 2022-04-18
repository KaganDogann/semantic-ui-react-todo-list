import { combineReducers } from "redux";
import doingReducer from "./reducer/doingReducer";
import doneReducer from "./reducer/doneReducer";
import toDoReducer from "./reducer/toDoReducer";

const rootReducer = combineReducers({
    done : doneReducer,
    doing : doingReducer,
    toDo : toDoReducer
})

export default rootReducer;