const axios = require('axios');
const instance = axios.create({
    baseURL: 'https://localhost:3000',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(`请求拦截。。。。`)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

export default instance;