import React, { Fragment, useEffect } from "react";

import useFetchMeApi from "../../api/hooks/useFetchMeApi";
import useLogoutApi from "../../api/hooks/useLogoutApi";
import deleteBrowserCookie from "../../utils/deleteBrowserCookie";
import getAuthTokenFromCookies from "../../utils/getAuthTokenFromCookies";

import AppBar from "../AppBar";

const Layout = ({ children, user, setUser }) => {
	const token = getAuthTokenFromCookies();
	const {
		data,
		status: fetchMeApiStatus,
		callApi: callFetchMeApi,
	} = useFetchMeApi();
	const { status: logoutApiStatus, callApi: callLogoutApi } = useLogoutApi();

	useEffect(() => {
		if (token) {
			callFetchMeApi();
		}
	}, [token]);

	useEffect(() => {
		if (logoutApiStatus === 200) {
			deleteBrowserCookie({ name: "tkn", path: "/" });
			callFetchMeApi();
		}
	}, [logoutApiStatus]);

	useEffect(() => {
		if (fetchMeApiStatus === 200 && data) {
			setUser({
				id: data.id,
				username: data.username,
				email: data.email,
			});
		} else {
			setUser(null);
		}
	}, [fetchMeApiStatus]);

	return (
		<Fragment>
			<AppBar user={user} onLogout={callLogoutApi} />
			{children}
		</Fragment>
	);
};

export default Layout;
