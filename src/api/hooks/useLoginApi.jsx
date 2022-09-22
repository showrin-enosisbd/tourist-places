import { useState } from "react";
import apiClient from "../apiClient";
import routes from "../routes";

const useLoginApi = ({ email, password }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});
	const [error, setError] = useState("");

	const callApi = () => {
		setIsLoading(true);

		apiClient
			.post(routes.login, {
				username: email,
				password,
			})
			.then((response) => {
				setData(response.data);
				setError("");
				setIsLoading(false);
			})
			.catch((err) => {
				const errMsg = Object.values(err.response.data)[0][0];

				setData({});
				setError(errMsg);
				setIsLoading(false);
			});
	};

	return { data, isLoading, error, callApi };
};

export default useLoginApi;
