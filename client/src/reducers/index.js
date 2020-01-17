import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authenticationReducer from "./authentication";
import noteReducer from "./note";
import tagReducer from "./tag";

export default combineReducers({
	form: formReducer,
	authentication: authenticationReducer,
	note: noteReducer,
	tag: tagReducer
});
