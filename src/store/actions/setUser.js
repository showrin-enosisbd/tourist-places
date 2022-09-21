import { SET_USER } from "../types";

const setUser = (user) => ({
	type: SET_USER,
	payload: {
		id: user.id,
		username: user.username,
		email: user.email,
	},
});

export default setUser;
