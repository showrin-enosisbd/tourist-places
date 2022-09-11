export const PLACE_TYPES = ["beach", "hills", "fountain", "landmark"];
export const DEFAULT_PLACE_TYPE = PLACE_TYPES[0];

export const DEFAULT_PLACE_RATING = 1;

export const DEFAULT_FORM_FIELDS = {
	name: "",
	address: "",
	rating: DEFAULT_PLACE_RATING,
	type: DEFAULT_PLACE_TYPE,
	picture: {
		file: null,
		base64String: "",
	},
};
