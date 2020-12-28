import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import machine from "./machine";
import user from "./user";

export default combineReducers({
  machine,
  user,
  form: formReducer
});
