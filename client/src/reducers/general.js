import { CHANGE_MODE, CHANGE_LOAD, CHANGE_HEADER } from "../actions/types";

export default function(
	state = { load: true, mode: "edit", header: "list" },
	action
) {
	switch (action.type) {
		case CHANGE_LOAD:
			return { ...state, load: action.payload };
		case CHANGE_MODE:
			return { ...state, mode: state.mode !== "edit" ? "edit" : "delete" };
		case CHANGE_HEADER:
			return { ...state, header: action.payload };
		default:
			return state;
	}
}
