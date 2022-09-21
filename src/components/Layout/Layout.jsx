import React, { Fragment } from "react";

import AppBar from "../AppBar";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<AppBar />
			{children}
		</Fragment>
	);
};

export default Layout;
