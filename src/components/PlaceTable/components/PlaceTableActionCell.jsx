import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
