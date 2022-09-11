const convertImageFiletoBase64String = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});

export default convertImageFiletoBase64String;
