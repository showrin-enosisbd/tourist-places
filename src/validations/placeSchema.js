import { object, string, number } from "yup";

const placeSchema = object().shape({
	name: string().required(),
	address: string().required(),
	rating: number()
		.required()
		.min(1)
		.max(5),
	type: string().required(),
	picture: string().required(),
});

export default placeSchema;
