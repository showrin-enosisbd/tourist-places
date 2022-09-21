import { useState } from "react";
import apiClient from "../apiClient";
import routes from "../routes";

const useSignupApi = ({ username, email, password }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});
	const [error, setError] = useState("");

	const callApi = () => {
		setIsLoading(true);

		apiClient
			.post(routes.signup, {
				username,
				email,
				password,
			})
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

export default useSignupApi;
