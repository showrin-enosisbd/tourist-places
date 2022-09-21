import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import Button from "../../components/Button";
import PlaceFormContainer from "../../containers/PlaceFormContainer";
import LayoutContainer from "../../containers/LayoutContainer";

const Edit = ({ placeToEdit }) => {
	return (
		<LayoutContainer>
			<Grid className="edit-page">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<PageHeader>Update Details Of {placeToEdit.name}</PageHeader>
						<PlaceFormContainer placeToEdit={placeToEdit} />
						<Row>
							<Col xs={12}>
								<div className="edit-page__footer">
									<Link className="edit-page__footer-link" to="/">
										<Button bsStyle="link">Back to Tourist Place List</Button>
									</Link>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		</LayoutContainer>
	);
};

export default Edit;
