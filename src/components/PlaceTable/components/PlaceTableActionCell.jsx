import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const PlaceTableActionCell = () => {
	return (
		<Fragment>
			<Button className="place-table__action-button" bsStyle="primary">
				Update
			</Button>
			<Button className="place-table__action-button" bsStyle="danger">
				Delete
			</Button>
		</Fragment>
	);
};

export default PlaceTableActionCell;
