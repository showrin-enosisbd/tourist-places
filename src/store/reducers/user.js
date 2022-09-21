import { SET_USER } from "../types";

const initialState = null;

const user = (state = initialState, action) => {
	if (action.type === SET_USER) {
		const newState = {
			id: action.payload.id,
			username: action.payload.username,
			email: action.payload.email,
		};

		return newState;
	}

	return state;
};

export default user;
