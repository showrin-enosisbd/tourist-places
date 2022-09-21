const getAuthTokenFromCookies = () => {
	const cookies = Object.fromEntries(
		document.cookie.split(";").map((pairString) => pairString.split("="))
	);
	const token = "tkn" in cookies ? cookies.tkn : null;

	return token;
};

export default getAuthTokenFromCookies;
