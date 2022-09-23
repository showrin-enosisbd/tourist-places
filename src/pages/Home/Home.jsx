import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Row, PageHeader, Pagination } from "react-bootstrap";

import Button from "../../components/Button";
import PlaceTableContainer from "./containers/PlaceTableContainer";
import SearchInput from "../../components/SearchInput";
import {
	SORT_DIRECTION_ASC,
	SORT_DIRECTION_DESC,
	SORT_DIRECTION_NORMAL,
} from "../../utils/constants";
import LayoutContainer from "../../containers/LayoutContainer";
import getAuthTokenFromCookies from "../../utils/getAuthTokenFromCookies";

const Home = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const [sortDirection, setSortDirection] = useState(SORT_DIRECTION_NORMAL);
	const [totalPages, setTotalPages] = useState(1);
	const [pageNo, setPageNo] = useState(1);
	const authToken = getAuthTokenFromCookies();

	const paginationItems = useMemo(() => {
		const items = [];

		for (let i = 1; i <= totalPages; i++) {
			items.push(
				<Pagination.Item
					key={i}
					active={i === pageNo}
					onClick={() => setPageNo(i)}
				>
					{i}
				</Pagination.Item>
			);
		}

		return items;
	}, [totalPages, setPageNo, pageNo]);

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
		<LayoutContainer>
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
									pageNo={pageNo}
									searchKeyword={searchKeyword}
									setTotalPages={setTotalPages}
									setPageNo={setPageNo}
								/>
							</Col>
						</Row>
						<Row>
							<Col className="home-page__pagination" xs={12}>
								<Pagination>
									{totalPages > 1 ? paginationItems : null}
								</Pagination>
							</Col>
						</Row>
						{!!authToken && (
							<Row>
								<Col xs={12}>
									<Link to="/new">
										<Button bsStyle="primary" bsSize="large">
											Create a new tourist place
										</Button>
									</Link>
								</Col>
							</Row>
						)}
					</Col>
				</Row>
			</Grid>
		</LayoutContainer>
	);
};

export default Home;
