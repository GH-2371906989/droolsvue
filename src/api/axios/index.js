import axios from 'axios';

const service= axios.create({
   // 基础的请求地址
   responseType: 'json',
    baseURL: 'http://localhost:9999/drools/',
   // 设置超时时间 5s
    timeout: 5000
});




export default service;