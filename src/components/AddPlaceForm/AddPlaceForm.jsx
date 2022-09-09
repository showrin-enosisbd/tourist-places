import React from "react";
import { PageHeader, Form, Row, Col, Button } from "react-bootstrap";
import FieldGroup from "../FieldGroup";

const AddPlaceForm = () => {
	return (
		<React.Fragment>
			<PageHeader className="add-place-form__header">
				Add A New Tourist Place
			</PageHeader>
			<Form>
				<FieldGroup
					id="name"
					type="text"
					label="Name:"
					placeholder="Name"
					required
				/>
				<FieldGroup
					id="address"
					type="text"
					label="Address:"
					placeholder="Address"
					required
				/>
				<FieldGroup
					id="rating"
					type="number"
					label="Rating:"
					placeholder="Rating"
					min={1}
					max={5}
					required
				/>
				<FieldGroup
					id="type"
					componentClass="select"
					label="Type:"
					placeholder="Type"
					required
				>
					<option value="beach">Beach</option>
					<option value="hills">Hills</option>
					<option value="fountain">Fountain</option>
					<option value="landmark">Landmark</option>
				</FieldGroup>
				<FieldGroup
					id="picture"
					type="file"
					label="Picture:"
					placeholder="Picture"
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
			</Form>
			<Row>
				<Col xs={12}>
					<div className="add-place-form-page__footer">
						<Button
							className="add-place-form-page__footer-link"
							bsStyle="link"
							href="/places"
						>
							Back to Tourist Place List
						</Button>
					</div>
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default AddPlaceForm;
