import { connect } from "react-redux";

import { DEFAULT_FORM_FIELDS } from "../utils/constants";
import { addPlace, updatePlace } from "../store/actions";
import PlaceForm from "../components/PlaceForm";

const mapStateToProps = (state, ownProps) => {
	const { placeToEdit } = ownProps;
	let defaultFormFields = DEFAULT_FORM_FIELDS;

	if (!!placeToEdit) {
		defaultFormFields = {
			id: placeToEdit.id,
			name: placeToEdit.name,
			address: placeToEdit.address,
			rating: placeToEdit.rating,
			type: placeToEdit.type,
			picture: {
				file: null,
				base64String: placeToEdit.picture,
			},
		};
	}

	return {
		defaultFormFields,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { placeToEdit } = ownProps;

	return {
		addPlace: (newPlace) => dispatch(addPlace(newPlace)),
		updatePlace: (updatedPlace) =>
			dispatch(updatePlace(placeToEdit.id, updatedPlace)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceForm);
