import React, { Fragment } from "react";

import AppBar from "../AppBar";

const Layout = ({ children, user }) => {
	return (
		<Fragment>
			<AppBar user={user} />
			{children}
		</Fragment>
	);
};

export default Layout;
