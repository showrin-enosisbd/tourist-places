import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import Button from "../../components/Button";
import PlaceFormContainer from "../../containers/PlaceFormContainer";
import LayoutContainer from "../../containers/LayoutContainer";
import getAuthTokenFromCookies from "../../utils/getAuthTokenFromCookies";

const New = ({ history: browserHistory, user }) => {
	const authToken = getAuthTokenFromCookies();

	useEffect(() => {
		if (!authToken && !user) {
			browserHistory.push("/login");
		}
	}, [user, authToken]);

	return (
		<LayoutContainer>
			<Grid className="new-page">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<PageHeader>Add A New Tourist Place</PageHeader>
						<PlaceFormContainer />
						<Row>
							<Col xs={12}>
								<div className="new-page__footer">
									<Link className="new-page__footer-link" to="/">
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

export default withRouter(New);
