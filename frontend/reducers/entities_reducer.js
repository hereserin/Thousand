import { combineReducers } from "redux";
import pageReducer from "./page_reducer";

const entitiesReducer = combineReducers({
  pages: pageReducer
});

export default entitiesReducer;
