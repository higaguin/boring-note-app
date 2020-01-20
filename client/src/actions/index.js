import api from "../api";
import {
	SIGN_IN,
	GET_NOTE,
	GET_NOTES,
	CREATE_NOTE,
	CREATE_TAG,
	CHECK_TAG,
	ADD_TAG,
	EQUAL_TAG
} from "./types";

export const signIn = token => async dispatch => {
	const response = await api.post("/auth/facebook/token", {
		access_token: token
	});

	dispatch({ type: SIGN_IN, payload: response.data });
};

export const getNote = noteId => async dispatch => {
	const response = await api.get(`/note/${noteId}`);

	dispatch({ type: GET_NOTE, payload: response.data });
};

export const getNotes = () => async dispatch => {
	const response = await api.get("/notes");

	dispatch({ type: GET_NOTES, payload: response.data });
};

export const createNote = noteData => async dispatch => {
	const response = await api.post("/note/save", noteData);

	dispatch({ type: CREATE_NOTE, payload: response.data });
};

export const editNote = noteData => async dispatch => {
	const response = await api.post("/note/edit/:id", noteData);

	dispatch({ type: CREATE_NOTE, payload: response.data });
};

export const createTag = tagData => async dispatch => {
	const response = await api.post("/tag/save", tagData);

	dispatch({ type: CREATE_TAG, payload: response.data });
};

export const checkTag = text => async dispatch => {
	const response = await api.get(`/checkTags/${text}`);

	dispatch({ type: CHECK_TAG, payload: response.data });
};

export const addTag = tag => {
	return { type: ADD_TAG, payload: tag };
};

export const equalTag = tag => {
	return { type: EQUAL_TAG, payload: tag };
};
