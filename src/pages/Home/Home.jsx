import React from "react";
import { PageHeader, Grid, Row, Col, Button } from "react-bootstrap";
import AddPlaceForm from "../../components/AddPlaceForm";

const Home = () => {
	return (
		<Grid className="home-page">
			<Row>
				<Col
					xs={12}
					md={8}
					mdOffset={2}
				>
					<PageHeader>Add A New Tourist Place</PageHeader>
					<AddPlaceForm />
					<Row>
						<Col xs={12}>
							<div className="home-page__footer">
								<Button
									className="home-page__footer-link"
									bsStyle="link"
									href="/places"
								>
									Back to Tourist Place List
								</Button>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
	);
};

export default Home;
