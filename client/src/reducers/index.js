import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authenticationReducer from "./authentication";
import noteReducer from "./note";
import tagReducer from "./tag";
import generalReducer from "./general";

export default combineReducers({
	form: formReducer,
	authentication: authenticationReducer,
	note: noteReducer,
	tag: tagReducer,
	general: generalReducer
});
