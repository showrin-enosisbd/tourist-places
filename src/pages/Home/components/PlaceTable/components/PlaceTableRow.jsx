import React from "react";

import PlaceTableActionCell from "./PlaceTableActionCell";
import {
	PLACE_TABLE_HEADERS,
	PLACE_TABLE_PICTURE_HEADER,
	PLACE_TABLE_NAME_HEADER,
	PLACE_TABLE_ACTION_HEADER,
	PLACE_TABLE_ADDRESS_HEADER,
} from "../../../../../utils/constants";
import getAuthTokenFromCookies from "../../../../../utils/getAuthTokenFromCookies";

const PlaceTableRow = ({ place, deletePlace, user }) => {
	const authToken = getAuthTokenFromCookies();

	const onDeletePlace = () => {
		const wantToDelete = window.confirm(
			`Do you want to delete "${place.name}"?`
		);

		if (wantToDelete) {
			deletePlace(place.id);
		}
	};

	return (
		<tr key={place.id}>
			{PLACE_TABLE_HEADERS.map((header) => {
				let tableData = null;

				if (header === PLACE_TABLE_PICTURE_HEADER) {
					const alt = `${place[PLACE_TABLE_NAME_HEADER]} - ${place[PLACE_TABLE_ADDRESS_HEADER]}`;

					tableData = <img alt={alt} src={place[header]} />;
				} else if (header === PLACE_TABLE_ACTION_HEADER) {
					tableData = authToken ? (
						<PlaceTableActionCell
							disabled={user && place.creator !== user.id}
							editPageUrl={`/edit/${place.id}`}
							deletePlace={onDeletePlace}
						/>
					) : null;
				} else {
					tableData = place[header];
				}

				return tableData ? (
					<td key={`${header}-${place.id}`}>{tableData}</td>
				) : null;
			})}
		</tr>
	);
};

export default PlaceTableRow;
