import React from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Row, PageHeader, Button } from "react-bootstrap";
import PlaceTableContainer from "../../containers/PlaceTableContainer";
import SearchInput from "../../components/SearchInput";

const Home = () => {
	return (
		<Grid className="home-page" fluid>
			<Row>
				<Col xs={12} md={10} mdOffset={1}>
					<PageHeader>Place List</PageHeader>
					<Row>
						<Col xs={12} sm={6}>
							<SearchInput />
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<PlaceTableContainer className="home-page__table" />
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<Link to="/new">
								<Button bsStyle="primary" bsSize="large">
									Create a new tourist place
								</Button>
							</Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
	);
};

export default Home;
