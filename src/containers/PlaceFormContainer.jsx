import { connect } from "react-redux";

import { DEFAULT_FORM_FIELDS } from "../utils/constants";
import { addPlace } from "../store/actions";
import PlaceForm from "../components/PlaceForm";

const mapStateToProps = () => {
	return {
		defaultFormFields: DEFAULT_FORM_FIELDS,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPlace: (newPlace) => dispatch(addPlace(newPlace)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceForm);
