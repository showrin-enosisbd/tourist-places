import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import FieldGroup from "../FieldGroup";

import {
	PLACE_TYPES,
	DEFAULT_PLACE_TYPE,
	DEFAULT_PLACE_RATING,
} from "../../utils/constants";
import convertImageFiletoBase64String from "../../utils/convertImageFiletoBase64String";
import uuid from "../../utils/uuid";

const PlaceForm = ({ defaultFormFields, addPlace }) => {
	const [name, setName] = useState(defaultFormFields.name);
	const [address, setAddress] = useState(defaultFormFields.address);
	const [rating, setRating] = useState(defaultFormFields.rating);
	const [type, setType] = useState(defaultFormFields.type);
	const [picture, setPicture] = useState(defaultFormFields.picture);
	const pictureInputRef = useRef();

	const onPictureChange = (pictureFile) => {
		convertImageFiletoBase64String(pictureFile).then((base64String) =>
			setPicture({
				file: pictureFile,
				base64String,
			})
		);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const newPlace = {
			id: uuid(),
			name,
			address,
			rating,
			type,
			picture,
		};

		addPlace(newPlace);
	};

	const onFormReset = (event) => {
		event.preventDefault();

		setName("");
		setAddress("");
		setRating(DEFAULT_PLACE_RATING);
		setType(DEFAULT_PLACE_TYPE);
		setPicture({ file: null, base64String: "" });
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
		>
			<FieldGroup
				className="add-place-form__input"
				id="name"
				type="text"
				label="Name:"
				placeholder="Name"
				value={name}
				onChange={(event) => setName(event.target.value)}
				required
			/>
			<FieldGroup
				className="add-place-form__input"
				id="address"
				type="text"
				label="Address:"
				placeholder="Address"
				value={address}
				onChange={(event) => setAddress(event.target.value)}
				required
			/>
			<FieldGroup
				className="add-place-form__input"
				id="rating"
				type="number"
				label="Rating:"
				placeholder="Rating"
				min={1}
				max={5}
				value={rating}
				onChange={(event) => setRating(event.target.value)}
				required
			/>
			<FieldGroup
				className="add-place-form__input"
				id="type"
				componentClass="select"
				label="Type:"
				placeholder="Type"
				value={type}
				onChange={(event) => setType(event.target.value)}
				required
			>
				{PLACE_TYPES.map((placeType) => (
					<option key={placeType} value={placeType}>
						{placeType}
					</option>
				))}
			</FieldGroup>
			<FieldGroup
				className="add-place-form__input"
				id="picture"
				inputRef={pictureInputRef}
				type="file"
				label="Picture:"
				placeholder="Picture"
				onChange={(event) => onPictureChange(event.target.files[0])}
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

export default PlaceForm;
