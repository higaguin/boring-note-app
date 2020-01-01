import { GET_NOTES } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_NOTES:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
}
