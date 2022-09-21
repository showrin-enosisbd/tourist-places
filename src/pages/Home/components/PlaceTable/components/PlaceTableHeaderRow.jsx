import React from "react";
import classNames from "classnames";

import CaretDown from "./CaretDown";
import CaretUp from "./CaretUp";
import {
	PLACE_TABLE_HEADERS,
	PLACE_TABLE_RATING_HEADER,
	SORT_DIRECTION_DESC,
	SORT_DIRECTION_ASC,
} from "../../../../../utils/constants";

const PlaceTableHeaderRow = ({ sortDirection, onSortDirectionChange }) => {
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

				return <th key={header}>{header}</th>;
			})}
		</tr>
	);
};

export default PlaceTableHeaderRow;
