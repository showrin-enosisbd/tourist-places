const uuid = () => {
	const dateTime = new Date().toISOString();
	const randomNumber = Math.floor(Math.random() * 100000);

	return `${dateTime}-${randomNumber}`;
};

export default uuid;
