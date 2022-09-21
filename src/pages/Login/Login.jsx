import React from "react";
import { PageHeader, Grid, Row, Col } from "react-bootstrap";

import Layout from "../../components/Layout";
import LoginForm from "./components/LoginForm";

const Login = () => {
	return (
		<Layout>
			<Grid className="edit-page">
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<PageHeader>Login</PageHeader>
						<Row>
							<Col xs={12}>
								<LoginForm />
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		</Layout>
	);
};

export default Login;
