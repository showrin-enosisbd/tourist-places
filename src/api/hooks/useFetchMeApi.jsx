import { useState } from "react";
import apiClient from "../apiClient";
import routes from "../routes";

const useFetchMeApi = ({ token }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState("");

	const callApi = () => {
		setIsLoading(true);

		apiClient
			.get(routes.fetchMe)
			.then((response) => {
				setData(response.data);
				setError("");
				setIsLoading(false);
			})
			.catch((err) => {
				const errMsg = err.response.data;

				setError(errMsg);
				setIsLoading(false);
			});
	};

	return { data, isLoading, error, callApi };
};

export default useFetchMeApi;
