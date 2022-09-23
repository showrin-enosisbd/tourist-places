import { connect } from "react-redux";

import Edit from "../Edit";

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, null)(Edit);
