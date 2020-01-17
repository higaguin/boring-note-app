import axios from "axios";

const instance = axios.create({
	baseURL: process.env.SERVER_DOMAIN || "http://localhost:5000"
});

instance.interceptors.request.use(
	function(config) {
		if (localStorage.getItem("token") != null) {
			config.headers.Authorization = `JWT ${localStorage.getItem("token")}`;
		}
		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	function(config) {
		return config;
	},
	function(error) {
		if (error.response) {
			if (error.response.status === 403) {
				localStorage.setItem("isAuth", false);
			}
		}
		return Promise.reject(error);
	}
);

export default instance;
