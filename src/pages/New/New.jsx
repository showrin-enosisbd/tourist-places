import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Grid, Row, Col, Button } from "react-bootstrap";
import PlaceForm from "../../components/PlaceForm";

const Home = () => {
	return (
		<Grid className="new-page">
			<Row>
				<Col
					xs={12}
					md={8}
					mdOffset={2}
				>
					<PageHeader>Add A New Tourist Place</PageHeader>
					<PlaceForm />
					<Row>
						<Col xs={12}>
							<div className="new-page__footer">
								<Link to="/">
									<Button
										className="new-page__footer-link"
										bsStyle="link"
									>
										Back to Tourist Place List
									</Button>
								</Link>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
	);
};

export default Home;
