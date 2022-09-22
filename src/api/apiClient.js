import axios from "axios";
import getAuthTokenFromCookies from "../utils/getAuthTokenFromCookies";

const apiClientConfig = {
	baseURL: "http://127.0.0.1:8000/",
};

const apiClient = axios.create(apiClientConfig);

export const authToken = () => `Token ${getAuthTokenFromCookies()}`;

export default apiClient;
