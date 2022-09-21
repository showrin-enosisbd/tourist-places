import React, { Fragment, useEffect } from "react";

import useFetchMeApi from "../../api/hooks/useFetchMeApi";
import getAuthTokenFromCookies from "../../utils/getAuthTokenFromCookies";

import AppBar from "../AppBar";

const Layout = ({ children, user, setUser }) => {
	const token = getAuthTokenFromCookies();
	const { data, isLoading, error, callApi } = useFetchMeApi({ token });

	useEffect(() => {
		if (!user && token) {
			callApi();
		}
	}, [user]);

	useEffect(() => {
		if (!user && token && data) {
			setUser({
				id: data.id,
				username: data.username,
				email: data.email,
			});
		}
	}, [data]);

	return (
		<Fragment>
			<AppBar user={user} />
			{children}
		</Fragment>
	);
};

export default Layout;
