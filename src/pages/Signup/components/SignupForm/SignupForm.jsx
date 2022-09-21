import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Button from "../../../../components/Button";

import FieldGroup from "../../../../components/FieldGroup";
import {
	DEFAULT_SIGNUP_FORM_FIELDS,
	DEFAULT_SIGNUP_FORM_FIELD_ERRORS,
} from "../../../../utils/constants";
import convertFirstLetterToUpperCase from "../../../../utils/convertFirstLetterToUpperCase";
import signupSchema from "../../../../validations/signupSchema";
import useSignupApi from "../../../../api/hooks/useSignupApi";

const SignupForm = ({ history: browserHistory, setUser }) => {
	const [formValues, setFormValues] = useState(DEFAULT_SIGNUP_FORM_FIELDS);
	const [errors, setErrors] = useState(DEFAULT_SIGNUP_FORM_FIELD_ERRORS);
	const [isValidating, setIsValidating] = useState(false);
	const { data, isLoading, error: apiError, callApi } = useSignupApi({
		username: formValues.username,
		email: formValues.email,
		password: formValues.password,
	});

	const onInputChange = (event) => {
		const { name, value } = event.target;

		setFormValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const onFormSubmit = async (event) => {
		event.preventDefault();
		setIsValidating(true);

		const isValid = await signupSchema.isValid(formValues);

		if (isValid) {
			setErrors(DEFAULT_SIGNUP_FORM_FIELD_ERRORS);
			setIsValidating(false);

			callApi();
		} else {
			signupSchema.validate(formValues, { abortEarly: false }).catch((err) => {
				const fieldErrors = err.inner.reduce(
					(acc, error) => ({
						...acc,
						[error.path]: convertFirstLetterToUpperCase(error.message),
					}),
					{ [err.inner[0].path]: err.inner[0].message }
				);

				setErrors(fieldErrors);
				setIsValidating(false);
			});
		}
	};

	useEffect(() => {
		if ("token" in data) {
			document.cookie = `tkn=${data.token}`;

			setUser({
				id: data.id,
				username: data.username,
				email: data.email,
			});

			browserHistory.push("/");
		}
	}, [data]);

	return (
		<form className="signup-form" onSubmit={onFormSubmit} noValidate>
			<FieldGroup
				id="username"
				type="username"
				label="Username:"
				placeholder="Username"
				name="username"
				value={formValues.username}
				onChange={onInputChange}
				error={errors.username || apiError}
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
				error={errors.email || apiError}
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
				error={errors.password || apiError}
				required
			/>
			<Row>
				<Col className="login-form__footer" xs={12}>
					<Button
						bsStyle="success"
						bsSize="large"
						type="submit"
						isLoading={isValidating || isLoading}
					>
						Signup
					</Button>
				</Col>
			</Row>
		</form>
	);
};

export default withRouter(SignupForm);
