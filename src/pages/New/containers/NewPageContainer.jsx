import { connect } from "react-redux";

import New from "../New";

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps, null)(New);
