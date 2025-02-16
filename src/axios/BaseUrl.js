import axios from "axios";

const API = axios.create({
	baseURL: process.env.REACT_APP_BASEURL,
	withCredentials: true,
	headers: {
		Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczOTY5NTczMywiZXhwIjo0MzMxNjk1NzMzfQ.GVpa4qvpREaGoUdKNBnyIleKGQyzxWbrY9POJBcHD44`
	}
});

export default API;
