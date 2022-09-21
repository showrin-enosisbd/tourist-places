import { connect } from "react-redux";

import Layout from "../components/Layout";
import setUser from "../store/actions/setUser";

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUser: (user) => dispatch(setUser(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Layout);
