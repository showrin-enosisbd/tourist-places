import React from "react";
import { PageHeader, Form, Row, Button } from "react-bootstrap";
import FieldGroup from "../FieldGroup";

const AddPlaceForm = () => {
	return (
		<React.Fragment>
			<PageHeader className="add-place-form add-place-form__header">
				Add A New Tourist Place
			</PageHeader>
			<Form>
				<FieldGroup
					id="name"
					type="text"
					label="Name:"
					placeholder="Name"
				/>
				<FieldGroup
					id="address"
					type="text"
					label="Address:"
					placeholder="Address"
				/>
				<FieldGroup
					id="rating"
					type="number"
					label="Rating:"
					placeholder="Rating"
					min={1}
					max={5}
				/>
				<FieldGroup
					id="type"
					componentClass="select"
					label="Type:"
					placeholder="Type"
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
				/>
				<Row>
					<Button
						bsStyle="success"
						bsSize="large"
						type="submit"
					>
						Submit
					</Button>
					<Button
						bsStyle="warning"
						bsSize="large"
						type="reset"
					>
						Reset
					</Button>
				</Row>
			</Form>
		</React.Fragment>
	);
};

export default AddPlaceForm;
