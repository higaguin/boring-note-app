import {
	GET_NOTE,
	GET_NOTES,
	CREATE_NOTE,
	EDIT_NOTE,
	CLEAR_NOTE,
	DELETE_NOTE
} from "../actions/types";

export default function(state = {}, action) {
	switch (action.type) {
		case GET_NOTE:
			return { ...state, note: action.payload };
		case GET_NOTES:
			return { ...state, notes: action.payload };
		case CREATE_NOTE:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_NOTE:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_NOTE:
			return {
				...state,
				notes: state.notes.filter(note => note._id !== action.payload)
			};
		case CLEAR_NOTE:
			return { ...state, note: {} };
		default:
			return state;
	}
}
