import { GET_NOTES, CREATE_NOTE } from "../actions/types";

export default function(state = {}, action) {
	switch (action.type) {
		case GET_NOTES:
			return { ...state, notes: action.payload };
		case CREATE_NOTE:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
}
