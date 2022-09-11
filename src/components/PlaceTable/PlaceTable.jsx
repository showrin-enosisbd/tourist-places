import React from "react";
import classNames from "classnames";
import { Table } from "react-bootstrap";

import {
	PLACE_TABLE_HEADERS,
	PLACE_TABLE_NAME_HEADER,
	PLACE_TABLE_ADDRESS_HEADER,
	PLACE_TABLE_PICTURE_HEADER,
	PLACE_TABLE_ACTION_HEADER,
	PLACE_TABLE_RATING_HEADER,
	SORT_DIRECTION_ASC,
	SORT_DIRECTION_DESC,
} from "../../utils/constants";
import PlaceTableActionCell from "./components/PlaceTableActionCell";
import CaretUp from "./components/CaretUp";
import CaretDown from "./components/CaretDown";

const PlaceTable = ({
	className,
	places,
	deletePlace,
	sortDirection,
	onSortDirectionChange,
	emptyTableMsg,
}) => {
	const onDeletePlace = (placeId, placeName) => {
		const wantToDelete = window.confirm(
			`Do you want to delete "${placeName}"?`
		);

		if (wantToDelete) {
			deletePlace(placeId);
		}
	};

	return (
		<div className="place-table-container">
			<Table className={classNames("place-table", className)}>
				<thead>
					<tr>
						{PLACE_TABLE_HEADERS.map((header) => {
							if (header === PLACE_TABLE_RATING_HEADER) {
								return (
									<th
										key={header}
										className="place-table__header-rating place-table__header--clickable"
										onClick={onSortDirectionChange}
									>
										{header}
										<div className="place-table__header-rating-indicator-container">
											<CaretUp
												className={classNames({
													"place-table__header-rating-indicator--hidden":
														sortDirection === SORT_DIRECTION_DESC,
												})}
											/>
											<CaretDown
												className={classNames({
													"place-table__header-rating-indicator--hidden":
														sortDirection === SORT_DIRECTION_ASC,
												})}
											/>
										</div>
									</th>
								);
							}

							return <th key={header}>{header}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{places.length === 0 && (
						<tr>
							<td
								className="place-table__empty-msg"
								colSpan={PLACE_TABLE_HEADERS.length}
							>
								{emptyTableMsg}
							</td>
						</tr>
					)}
					{places.map((place) => (
						<tr key={place.id}>
							{PLACE_TABLE_HEADERS.map((header) => {
								let tableData = null;

								if (header === PLACE_TABLE_PICTURE_HEADER) {
									const alt = `${place[PLACE_TABLE_NAME_HEADER]} - ${place[PLACE_TABLE_ADDRESS_HEADER]}`;

									tableData = <img alt={alt} src={place[header]} />;
								} else if (header === PLACE_TABLE_ACTION_HEADER) {
									tableData = (
										<PlaceTableActionCell
											editPageUrl={`/edit/${place.id}`}
											deletePlace={() => onDeletePlace(place.id, place.name)}
										/>
									);
								} else {
									tableData = place[header];
								}

								return <td key={`${header}-${place.id}`}>{tableData}</td>;
							})}
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PlaceTable;
