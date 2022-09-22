const getYesterday = () => {
	const currentDate = new Date().getDate();
	const day = new Date();

	day.setDate(currentDate - 1);

	return day;
};

const deleteBrowserCookie = ({ name, path = "/" }) => {
	const expiryDateTime = getYesterday().toUTCString();
	const cookie = `${name}=; expires=${expiryDateTime}; path=${path};`;

	document.cookie = cookie;
};

export default deleteBrowserCookie;
