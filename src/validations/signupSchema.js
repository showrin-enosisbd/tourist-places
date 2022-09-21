import { object, string } from "yup";

const signupSchema = object().shape({
	username: string().required(),
	email: string()
		.email()
		.required(),
	password: string().required(),
});

export default signupSchema;
