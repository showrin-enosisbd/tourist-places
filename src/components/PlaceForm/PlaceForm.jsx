import React, { useState, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Button from "../Button";
import FieldGroup from "../FieldGroup";
import { DEFAULT_FORM_FIELD_ERRORS, PLACE_TYPES } from "../../utils/constants";
import convertImageFiletoBase64String from "../../utils/convertImageFiletoBase64String";
import convertFirstLetterToUpperCase from "../../utils/convertFirstLetterToUpperCase";
import uuid from "../../utils/uuid";
import placeSchema from "../../validations/placeSchema";

const PlaceForm = ({
	history: browserHistory,
	defaultFormFields,
	placeToEdit,
	addPlace,
	updatePlace,
}) => {
	const [name, setName] = useState(defaultFormFields.name);
	const [address, setAddress] = useState(defaultFormFields.address);
	const [rating, setRating] = useState(defaultFormFields.rating);
	const [type, setType] = useState(defaultFormFields.type);
	const [picture, setPicture] = useState(defaultFormFields.picture);
	const [errors, setErrors] = useState(DEFAULT_FORM_FIELD_ERRORS);
	const pictureInputRef = useRef();
	const isEditing = !!placeToEdit;

	const onPictureChange = (pictureFile) => {
		convertImageFiletoBase64String(pictureFile).then((base64String) =>
			setPicture({
				file: pictureFile,
				base64String,
			})
		);
	};

	const onFormSubmit = async (event) => {
		event.preventDefault();

		const placeDetails = {
			id: isEditing ? defaultFormFields.id : uuid(),
			name,
			address,
			rating,
			type,
			picture: picture.base64String,
		};

		const isValid = await placeSchema.isValid(placeDetails);

		if (isValid) {
			if (isEditing) {
				updatePlace(placeDetails);
			} else {
				addPlace(placeDetails);
			}

			browserHistory.push("/");
		} else {
			placeSchema.validate(placeDetails, { abortEarly: false }).catch((err) => {
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
	};

	const onFormReset = (event) => {
		event.preventDefault();

		setName(defaultFormFields.name);
		setAddress(defaultFormFields.address);
		setRating(defaultFormFields.rating);
		setType(defaultFormFields.type);
		setPicture(defaultFormFields.picture);

		setErrors(DEFAULT_FORM_FIELD_ERRORS);
	};

	useEffect(() => {
		// manually setting value and files
		// since In React, an <input type="file" /> is always an uncontrolled component
		// because its value can only be set by a user, and not programmatically.
		// src: https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag:~:text=In%20React%2C%20an%20%3Cinput%20type%3D%22file%22%20/%3E%20is%20always%20an%20uncontrolled%20component%20because%20its%20value%20can%20only%20be%20set%20by%20a%20user%2C%20and%20not%20programmatically.

		if (pictureInputRef.current) {
			if (picture.file) {
				pictureInputRef.current.file = picture.file;
			} else {
				pictureInputRef.current.value = "";
			}
		}
	}, [picture]);

	return (
		<form
			className="add-place-form"
			onSubmit={onFormSubmit}
			onReset={onFormReset}
			noValidate
		>
			<FieldGroup
				className="add-place-form__input add-place-form__input--required"
				id="name"
				type="text"
				label="Name:"
				placeholder="Name"
				value={name}
				onChange={(event) => setName(event.target.value)}
				error={errors.name}
				required
			/>
			<FieldGroup
				className="add-place-form__input add-place-form__input--required"
				id="address"
				type="text"
				label="Address:"
				placeholder="Address"
				value={address}
				onChange={(event) => setAddress(event.target.value)}
				error={errors.address}
				required
			/>
			<FieldGroup
				className="add-place-form__input add-place-form__input--required"
				id="rating"
				type="number"
				label="Rating:"
				placeholder="Rating"
				min={1}
				max={5}
				value={rating}
				onChange={(event) => setRating(event.target.value)}
				error={errors.rating}
				required
			/>
			<FieldGroup
				className="add-place-form__input add-place-form__input--required"
				id="type"
				componentClass="select"
				label="Type:"
				placeholder="Type"
				value={type}
				onChange={(event) => setType(event.target.value)}
				error={errors.type}
				required
			>
				{PLACE_TYPES.map((placeType) => (
					<option key={placeType} value={placeType}>
						{placeType}
					</option>
				))}
			</FieldGroup>
			<FieldGroup
				className="add-place-form__input add-place-form__input--required"
				id="picture"
				inputRef={pictureInputRef}
				type="file"
				label="Picture:"
				placeholder="Picture"
				onChange={(event) => onPictureChange(event.target.files[0])}
				error={errors.picture}
				required
			/>
			<Row>
				<Col xs={12}>
					<div className="add-place-form__footer">
						<Button
							className="add-place-form__footer-button"
							bsStyle="success"
							bsSize="large"
							type="submit"
						>
							Submit
						</Button>
						<Button
							className="add-place-form__action-button"
							bsStyle="warning"
							bsSize="large"
							type="reset"
						>
							Reset
						</Button>
					</div>
				</Col>
			</Row>
		</form>
	);
};

export default withRouter(PlaceForm);
