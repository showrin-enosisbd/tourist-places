import React from "react";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import LayoutContainer from "../../containers/LayoutContainer";
import LoginContainer from "./containers/LoginContainer";

const Login = () => {
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

export default Login;
