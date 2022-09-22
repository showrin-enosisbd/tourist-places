import React from "react";
import classNames from "classnames";
import { Table } from "react-bootstrap";

import PlaceTableHeaderRow from "./components/PlaceTableHeaderRow";
import PlaceTableEmptyMessageRow from "./components/PlaceTableEmptyMessageRow";
import PlaceTableRow from "./components/PlaceTableRow";

const PlaceTable = ({
	className,
	user,
	places,
	deletePlace,
	sortDirection,
	onSortDirectionChange,
	emptyTableMsg,
}) => {
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
						<PlaceTableRow
							key={place.id}
							user={user}
							place={place}
							deletePlace={deletePlace}
						/>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PlaceTable;
