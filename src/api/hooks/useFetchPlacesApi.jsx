import { useState } from "react";
import apiClient from "../apiClient";
import routes from "../routes";

const useFetchPlacesApi = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [status, setStatus] = useState(null);
	const [error, setError] = useState("");

	const callApi = (queryParams) => {
		setIsLoading(true);

		apiClient
			.get(routes.places.fetch, { params: queryParams })
			.then((response) => {
				setData(response.data);
				setError("");
				setStatus(response.status);
				setIsLoading(false);
			})
			.catch((err) => {
				const errMsg = err.response.data;

				setStatus(err.response.status);
				setData(null);
				setError(errMsg);
				setIsLoading(false);
			});
	};

	return { data, status, isLoading, error, callApi };
};

export default useFetchPlacesApi;
