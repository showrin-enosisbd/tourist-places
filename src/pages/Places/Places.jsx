import React from "react";
import { Grid, Col, Row, PageHeader, Button } from "react-bootstrap";
import PlaceTable from "../../components/PlaceTable";
import SearchInput from "../../components/SearchInput";

const Places = () => {
	return (
		<Grid
			className="places-page"
			fluid
		>
			<Row>
				<Col
					xs={12}
					md={10}
					mdOffset={1}
				>
					<PageHeader>Place List</PageHeader>
					<Row>
						<Col
							xs={12}
							sm={6}
						>
							<SearchInput />
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<PlaceTable className="places-page__table" />
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<Button
								bsStyle="primary"
								bsSize="large"
								href="/"
							>
								Create a new tourist place
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</Grid>
	);
};

export default Places;
