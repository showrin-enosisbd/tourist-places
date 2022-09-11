import React from "react";
import classNames from "classnames";
import { Table } from "react-bootstrap";

import {
	PLACE_TABLE_HEADERS,
	PLACE_TABLE_NAME_HEADER,
	PLACE_TABLE_ADDRESS_HEADER,
	PLACE_TABLE_PICTURE_HEADER,
	PLACE_TABLE_ACTION_HEADER,
} from "../../utils/constants";
import PlaceTableActionCell from "./components/PlaceTableActionCell";

const PlaceTable = ({ className, places }) => {
	return (
		<div className="place-table-container">
			<Table className={classNames("place-table", className)}>
				<thead>
					<tr>
						{PLACE_TABLE_HEADERS.map((header) => (
							<th key={header}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{places.map((place) => (
						<tr key={place.id}>
							{PLACE_TABLE_HEADERS.map((header) => {
								let tableData = null;

								if (header === PLACE_TABLE_PICTURE_HEADER) {
									const alt = `${place[PLACE_TABLE_NAME_HEADER]} - ${place[PLACE_TABLE_ADDRESS_HEADER]}`;

									tableData = <img alt={alt} src={place[header]} />;
								} else if (header === PLACE_TABLE_ACTION_HEADER) {
									tableData = <PlaceTableActionCell />;
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
