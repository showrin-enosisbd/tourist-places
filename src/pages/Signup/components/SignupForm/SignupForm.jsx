import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Button from "../../../../components/Button";

import FieldGroup from "../../../../components/FieldGroup";
import convertFirstLetterToUpperCase from "../../../../utils/convertFirstLetterToUpperCase";
import signupSchema from "../../../../validations/signupSchema";

const SignupForm = ({ history: browserHistory }) => {
	const [formValues, setFormValues] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onInputChange = (event) => {
		const { name, value } = event.target;

		setFormValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const onFormSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		const isValid = await signupSchema.isValid(formValues);

		if (isValid) {
			// api call here ....

			setIsSubmitting(false);
			browserHistory.push("/");
		} else {
			signupSchema.validate(formValues, { abortEarly: false }).catch((err) => {
				console.log(err.inner);
				const fieldErrors = err.inner.reduce(
					(acc, error) => ({
						...acc,
						[error.path]: convertFirstLetterToUpperCase(error.message),
					}),
					{ [err.inner[0].path]: err.inner[0].message }
				);

				setErrors(fieldErrors);
			});
		}

		setIsSubmitting(false);
	};

	return (
		<form className="login-form" onSubmit={onFormSubmit} noValidate>
			<FieldGroup
				id="username"
				type="username"
				label="Username:"
				placeholder="Username"
				name="username"
				value={formValues.username}
				onChange={onInputChange}
				error={errors.username}
				required
			/>
			<FieldGroup
				id="email"
				type="email"
				label="Email:"
				placeholder="email"
				name="email"
				value={formValues.email}
				onChange={onInputChange}
				error={errors.email}
				required
			/>
			<FieldGroup
				id="password"
				type="password"
				label="Password:"
				placeholder="Password"
				name="password"
				value={formValues.password}
				onChange={onInputChange}
				error={errors.password}
				required
			/>
			<Row>
				<Col className="login-form__footer" xs={12}>
					<Button
						bsStyle="success"
						bsSize="large"
						type="submit"
						isLoading={isSubmitting}
					>
						Login
					</Button>
				</Col>
			</Row>
		</form>
	);
};

export default withRouter(SignupForm);
