import React from "react";
import { PageHeader, Row, Col, Button } from "react-bootstrap";
import AddPlaceForm from "../../components/AddPlaceForm";

const Home = () => {
	return (
		<div className="home-page">
			<PageHeader className="home-page__header">
				Add A New Tourist Place
			</PageHeader>
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
		</div>
	);
};

export default Home;
