import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Row, PageHeader } from "react-bootstrap";

import Button from "../../components/Button";
import PlaceTableContainer from "../../containers/PlaceTableContainer";
import SearchInput from "../../components/SearchInput";
import {
	SORT_DIRECTION_ASC,
	SORT_DIRECTION_DESC,
	SORT_DIRECTION_NORMAL,
} from "../../utils/constants";

const Home = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const [sortDirection, setSortDirection] = useState(SORT_DIRECTION_NORMAL);

	const onSortDirectionChange = () => {
		if (sortDirection === SORT_DIRECTION_NORMAL) {
			setSortDirection(SORT_DIRECTION_ASC);
		} else if (sortDirection === SORT_DIRECTION_ASC) {
			setSortDirection(SORT_DIRECTION_DESC);
		} else {
			setSortDirection(SORT_DIRECTION_NORMAL);
		}
	};

	return (
		<Grid className="home-page" fluid>
			<Row>
				<Col xs={12} md={10} mdOffset={1}>
					<PageHeader>Tourist Places</PageHeader>
					<Row>
						<Col xs={12} sm={6}>
							<SearchInput
								value={searchKeyword}
								onChange={(event) => setSearchKeyword(event.target.value)}
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<PlaceTableContainer
								className="home-page__table"
								sortDirection={sortDirection}
								onSortDirectionChange={onSortDirectionChange}
								searchKeyword={searchKeyword}
							/>
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
