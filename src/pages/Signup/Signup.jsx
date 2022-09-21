import React from "react";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import LayoutContainer from "../../containers/LayoutContainer";
import SignupFormContainer from "./containers/SignupFormContainer";

const Signup = () => {
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

export default Signup;
