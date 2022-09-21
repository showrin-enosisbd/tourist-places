import React from "react";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import Layout from "../../components/Layout";
import SignupForm from "./components/SignupForm";

const Signup = () => {
	return (
		<Layout>
			<Grid className="edit-page">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<PageHeader>Signup</PageHeader>
						<Row>
							<Col xs={12}>
								<SignupForm />
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		</Layout>
	);
};

export default Signup;
