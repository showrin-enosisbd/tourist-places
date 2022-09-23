import React, { useEffect } from "react";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import LayoutContainer from "../../containers/LayoutContainer";
import getAuthTokenFromCookies from "../../utils/getAuthTokenFromCookies";
import SignupFormContainer from "./containers/SignupFormContainer";

const Signup = ({ history: browserHistory }) => {
	const token = getAuthTokenFromCookies();

	useEffect(() => {
		if (token) {
			browserHistory.push("/");
		}
	}, [token]);

	return (
		<LayoutContainer>
			<Grid className="edit-page">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<PageHeader>Signup</PageHeader>
						<Row>
							<Col xs={12}>
								<SignupFormContainer />
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		</LayoutContainer>
	);
};

export default withRouter(Signup);
