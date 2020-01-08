import api from "../api";
import { SIGN_IN, GET_NOTES, CREATE_NOTE } from "./types";

export const signIn = token => async dispatch => {
	const response = await api.post("/auth/facebook/token", {
		access_token: token
	});

	dispatch({ type: SIGN_IN, payload: response.data });
};

export const getNotes = () => async dispatch => {
	const response = await api.get("/notes");

	dispatch({ type: GET_NOTES, payload: response.data });
};

export const createNote = noteData => async dispatch => {
	const response = await api.post("/note/save", noteData);

	dispatch({ type: CREATE_NOTE, payload: response.data });
};
