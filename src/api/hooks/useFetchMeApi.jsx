import { useState } from "react";
import apiClient, { authToken } from "../apiClient";
import routes from "../routes";

const useFetchMeApi = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [status, setStatus] = useState(null);
	const [error, setError] = useState("");

	const callApi = () => {
		setIsLoading(true);

		apiClient
			.get(routes.fetchMe, {
				headers: {
					Authorization: authToken(),
				},
			})
			.then((response) => {
				setData(response.data);
				setError("");
				setStatus(response.status);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				const errMsg = err.response.data;

				setStatus(err.response.status);
				setData(null);
				setError(errMsg);
				setIsLoading(false);
			});
	};

	return { data, status, isLoading, error, callApi };
};

export default useFetchMeApi;
