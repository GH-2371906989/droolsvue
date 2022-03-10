
import axios from 'axios';

const base_url = process.env.VUE_APP_BASE_API
const service = axios.create({
	// 基础的请求地址
	responseType: 'json',
	baseURL: base_url,
	// 设置超时时间 5s
	timeout: 5000,
	headers: {
		'content-type': 'application/json;charsetset=UTF-8'
	}
});




export default service;

