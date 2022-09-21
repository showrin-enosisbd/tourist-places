import { connect } from "react-redux";

import Layout from "../components/Layout";

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, null)(Layout);
