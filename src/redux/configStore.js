import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { LoaddingReducer } from "./Reducer/LoaddingReducer";
const rootReducer = combineReducers({
    LoaddingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));