const getDayAfterOneWeek = () => {
	const currentDate = new Date().getDate();
	const day = new Date();

	day.setDate(currentDate + 7);

	return day;
};

const setBrowserCookie = ({ name, value, path = "/", expireAt }) => {
	const expiryDateTime = expireAt || getDayAfterOneWeek().toUTCString();
	const cookie = `${name}=${value}; expires=${expiryDateTime}; path=${path};`;

	document.cookie = cookie;
};

export default setBrowserCookie;
