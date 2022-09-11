import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Illustration from "../../components/Illustration";

const NotFound = ({ location }) => {
	const { pathname } = location;

	return (
		<Grid className="not-found-page" fluid>
			<Row className="not-found-page__row">
				<Col xs={10} sm={8} md={6} xsOffset={1} smOffset={2} mdOffset={3}>
					<Illustration name="notFound" />
					<div className="not-found-page__note">
						Sorry!{" "}
						<span role="img" aria-label="dissapoint-face">
							😔
						</span>{" "}
						There's no page matching this path <strong>"{pathname}"</strong>
					</div>
				</Col>
			</Row>
		</Grid>
	);
};

export default NotFound;
