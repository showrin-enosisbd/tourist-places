import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import Button from "../../components/Button";
import PlaceFormContainer from "../../containers/PlaceFormContainer";
import LayoutContainer from "../../containers/LayoutContainer";
import useFetchPlaceApi from "../../api/hooks/useFetchPlaceApi";

const Edit = ({ match }) => {
	const { id } = match.params;
	const { data, callApi: callFetchPlaceApi } = useFetchPlaceApi({
		id,
	});

	useEffect(() => {
		callFetchPlaceApi();
	}, []);

	return (
		<LayoutContainer>
			<Grid className="edit-page">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						{data && <PageHeader>Update Details Of {data.name}</PageHeader>}
						{data && <PlaceFormContainer placeId={id} placeToEdit={data} />}
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
