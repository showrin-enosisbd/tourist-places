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

export const PLACE_TABLE_NAME_HEADER = "name";
export const PLACE_TABLE_ADDRESS_HEADER = "address";
export const PLACE_TABLE_RATING_HEADER = "rating";
export const PLACE_TABLE_PICTURE_HEADER = "picture";
export const PLACE_TABLE_ACTION_HEADER = "action";
export const PLACE_TABLE_HEADERS = [
	PLACE_TABLE_NAME_HEADER,
	PLACE_TABLE_ADDRESS_HEADER,
	PLACE_TABLE_RATING_HEADER,
	PLACE_TABLE_PICTURE_HEADER,
	PLACE_TABLE_ACTION_HEADER,
];

export const DEFAULT_FORM_FIELD_ERRORS = {
	name: "",
	address: "",
	rating: "",
	type: "",
	picture: "",
};

export const SORT_DIRECTION_ASC = "asc";
export const SORT_DIRECTION_DESC = "desc";
export const SORT_DIRECTION_NORMAL = "none";

export const NO_PLACES_HERE = "No places here...";

export const DEFAULT_LOGIN_FORM_FIELDS = {
	email: "",
	password: "",
};
export const DEFAULT_LOGIN_FORM_FIELD_ERRORS = {
	email: "",
	password: "",
};

export const DEFAULT_SIGNUP_FORM_FIELDS = {
	username: "",
	email: "",
	password: "",
};
export const DEFAULT_SIGNUP_FORM_FIELD_ERRORS = {
	username: "",
	email: "",
	password: "",
};
