import {
	GET_NOTES,
	CREATE_NOTE,
	CREATE_TAG,
	CHECK_TAG,
	ADD_TAG,
	EQUAL_TAG
} from "../actions/types";

export default function(state = { tag_collection: [] }, action) {
	switch (action.type) {
		case GET_NOTES:
			return { ...state, notes: action.payload };
		case CREATE_NOTE:
			return { ...state, [action.payload._id]: action.payload };
		case CREATE_TAG:
			return { ...state, created_tag: action.payload };
		case CHECK_TAG:
			return { ...state, checked_tag: action.payload };
		case ADD_TAG:
			return {
				...state,
				tag_collection: [...state.tag_collection, action.payload]
			};
		case EQUAL_TAG:
			return {
				...state,
				tag_collection: action.payload
			};
		default:
			return state;
	}
}
