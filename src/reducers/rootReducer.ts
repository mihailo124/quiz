import { combineReducers } from "redux";
import addQuestionReducer from "./addQuestionReducer";

export default combineReducers({
  questions: addQuestionReducer
});
