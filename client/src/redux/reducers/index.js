import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import authReducer from "./authReducers";

export default combineReducers({
  card: cardReducer,
  auth: authReducer,
});
