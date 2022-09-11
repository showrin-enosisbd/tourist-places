import { connect } from "react-redux";

import Edit from "../pages/Edit";

const mapStateToProps = (state, ownProps) => {
	const { id } = ownProps.match.params;
	const placeIndex = state.places.findIndex((place) => place.id === id);

	return {
		placeToEdit: state.places[placeIndex],
	};
};

export default connect(mapStateToProps)(Edit);
