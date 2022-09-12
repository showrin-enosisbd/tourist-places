import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from "../../Button";

const PlaceTableActionCell = ({ editPageUrl, deletePlace }) => {
	return (
		<Fragment>
			<Link className="place-table__action-button" to={editPageUrl}>
				<Button bsStyle="primary">Update</Button>
			</Link>
			<Button
				className="place-table__action-button"
				bsStyle="danger"
				onClick={deletePlace}
			>
				Delete
			</Button>
		</Fragment>
	);
};

export default PlaceTableActionCell;
