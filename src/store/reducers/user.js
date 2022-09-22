import { SET_USER } from "../types";

const initialState = null;

const user = (state = initialState, action) => {
	if (action.type === SET_USER) {
		const newState = action.payload
			? {
					id: action.payload.id,
					username: action.payload.username,
					email: action.payload.email,
			  }
			: null;

		return newState;
	}

	return state;
};

export default user;
