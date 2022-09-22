import React, { useEffect } from "react";
import classNames from "classnames";
import { Table } from "react-bootstrap";

import PlaceTableHeaderRow from "./components/PlaceTableHeaderRow";
import PlaceTableEmptyMessageRow from "./components/PlaceTableEmptyMessageRow";
import PlaceTableRow from "./components/PlaceTableRow";
import useFetchPlacesApi from "../../../../api/hooks/useFetchPlacesApi";

const PlaceTable = ({
	className,
	deletePlace,
	sortDirection,
	onSortDirectionChange,
	emptyTableMsg,
}) => {
	const { data, callApi: callFetchPlacesApi } = useFetchPlacesApi();
	const places = data ? data.results : [];

	useEffect(() => {
		callFetchPlacesApi();
	}, []);

	return (
		<div className="place-table-container">
			<Table className={classNames("place-table", className)}>
				<thead>
					<PlaceTableHeaderRow
						sortDirection={sortDirection}
						onSortDirectionChange={onSortDirectionChange}
					/>
				</thead>
				<tbody>
					{places.length === 0 && (
						<PlaceTableEmptyMessageRow emptyTableMsg={emptyTableMsg} />
					)}
					{places.map((place) => (
						<PlaceTableRow place={place} deletePlace={deletePlace} />
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PlaceTable;
