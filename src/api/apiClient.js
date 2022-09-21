import axios from "axios";
import getAuthTokenFromCookies from "../utils/getAuthTokenFromCookies";

const authToken = getAuthTokenFromCookies();
const apiClientConfig = {
	baseURL: "http://127.0.0.1:8000/",
};

if (authToken) {
	apiClientConfig.headers = {
		Authorization: `Token ${authToken}`,
	};
}

const apiClient = axios.create(apiClientConfig);

export default apiClient;
