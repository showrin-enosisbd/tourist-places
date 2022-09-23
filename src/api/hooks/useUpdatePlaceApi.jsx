import { useState } from "react";
import apiClient, { authToken } from "../apiClient";
import routes from "../routes";

const useUpdatePlaceApi = ({ id }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [status, setStatus] = useState(null);
	const [error, setError] = useState("");

	const callApi = (place) => {
		setIsLoading(true);

		apiClient
			.put(
				routes.places.fetchById(id),
				{ ...place },
				{
					headers: {
						Authorization: authToken(),
					},
				}
			)
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

export default useUpdatePlaceApi;
