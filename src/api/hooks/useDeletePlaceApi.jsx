import { useState } from "react";
import apiClient, { authToken } from "../apiClient";
import routes from "../routes";

const useDeletePlaceApi = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [status, setStatus] = useState(null);
	const [error, setError] = useState("");

	const callApi = (id) => {
		setIsLoading(true);
		setError("");
		setStatus(null);
		setData(null);

		apiClient
			.delete(routes.places.deleteById(id), {
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
				const errMsg = err.response.data;

				setStatus(err.response.status);
				setData(null);
				setError(errMsg);
				setIsLoading(false);
			});
	};

	return { data, status, isLoading, error, callApi };
};

export default useDeletePlaceApi;
