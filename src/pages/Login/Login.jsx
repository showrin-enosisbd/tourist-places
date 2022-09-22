import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import LayoutContainer from "../../containers/LayoutContainer";
import getAuthTokenFromCookies from "../../utils/getAuthTokenFromCookies";
import LoginContainer from "./containers/LoginContainer";

const Login = ({ history: browserHistory }) => {
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
						<PageHeader>Login</PageHeader>
						<Row>
							<Col xs={12}>
								<LoginContainer />
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		</LayoutContainer>
	);
};

export default withRouter(Login);
