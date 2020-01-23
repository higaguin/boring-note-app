import { CHANGE_MODE } from "../actions/types";

export default function(state = { mode: "edit" }, action) {
	switch (action.type) {
		case CHANGE_MODE:
			return { ...state, mode: state.mode !== "edit" ? "edit" : "delete" };
		default:
			return state;
	}
}
