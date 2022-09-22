import React from "react";
import classNames from "classnames";

import CaretDown from "./CaretDown";
import CaretUp from "./CaretUp";
import {
	PLACE_TABLE_HEADERS,
	PLACE_TABLE_RATING_HEADER,
	SORT_DIRECTION_DESC,
	SORT_DIRECTION_ASC,
	PLACE_TABLE_ACTION_HEADER,
} from "../../../../../utils/constants";
import getAuthTokenFromCookies from "../../../../../utils/getAuthTokenFromCookies";

const PlaceTableHeaderRow = ({ sortDirection, onSortDirectionChange }) => {
	const authToken = getAuthTokenFromCookies();

	return (
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

				if (!authToken && header === PLACE_TABLE_ACTION_HEADER) {
					return null;
				}

				return <th key={header}>{header}</th>;
			})}
		</tr>
	);
};

export default PlaceTableHeaderRow;
