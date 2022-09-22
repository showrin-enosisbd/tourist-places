import { useState } from "react";
import apiClient, { authToken } from "../apiClient";
import routes from "../routes";

const useLogoutApi = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState(null);
	const [error, setError] = useState("");

	const callApi = () => {
		setIsLoading(true);

		apiClient
			.get(routes.logout, {
				headers: {
					Authorization: authToken(),
				},
			})
			.then((response) => {
				setStatus(response.status);
				setError("");
				setIsLoading(false);
			})
			.catch((err) => {
				const errMsg = err.response.data;

				setStatus(err.response.status);
				setError(errMsg);
				setIsLoading(false);
			});
	};

	return { status, isLoading, error, callApi };
};

export default useLogoutApi;
