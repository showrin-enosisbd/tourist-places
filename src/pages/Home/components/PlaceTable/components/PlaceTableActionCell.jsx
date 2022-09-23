import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from "../../../../../components/Button";

const PlaceTableActionCell = ({ editPageUrl, deletePlace, disabled }) => {
	return (
		<Fragment>
			{!disabled ? (
				<Link className="place-table__action-button" to={editPageUrl}>
					<Button bsStyle="primary">Update</Button>
				</Link>
			) : (
				<Button
					className="place-table__action-button"
					bsStyle="primary"
					disabled={disabled}
				>
					Update
				</Button>
			)}
			<Button
				className="place-table__action-button"
				bsStyle="danger"
				disabled={disabled}
				onClick={deletePlace}
			>
				Delete
			</Button>
		</Fragment>
	);
};

export default PlaceTableActionCell;
