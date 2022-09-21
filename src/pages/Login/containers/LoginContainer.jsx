import { connect } from "react-redux";

import { setUser } from "../../../store/actions";
import LoginForm from "../components/LoginForm";

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: (user) => dispatch(setUser(user)),
	};
};

export default connect(null, mapDispatchToProps)(LoginForm);
