import { connect } from "react-redux";

import { setUser } from "../../../store/actions";
import SignupForm from "../components/SignupForm";

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setUser: (user) => dispatch(setUser(user)),
	};
};

export default connect(null, mapDispatchToProps)(SignupForm);
