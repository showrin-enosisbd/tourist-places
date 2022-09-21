import React from "react";

import { PLACE_TABLE_HEADERS } from "../../../../../utils/constants";

const PlaceTableEmptyMessageRow = ({ emptyTableMsg }) => {
	return (
		<tr>
			<td
				className="place-table__empty-msg"
				colSpan={PLACE_TABLE_HEADERS.length}
			>
				{emptyTableMsg}
			</td>
		</tr>
	);
};

export default PlaceTableEmptyMessageRow;
