const routes = {
	login: "/account/login/",
	signup: "/account/register/",
	fetchMe: "/account/users/me/",
	logout: "/account/logout/",
	places: {
		fetch: "/places/",
		create: "/places/",
		fetchById: (id) => `/places/${id}/`,
		update: (id) => `/places/${id}/`,
	},
};

export default routes;
