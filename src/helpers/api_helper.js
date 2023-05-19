import axios from "axios"

const axiosApi = axios.create({
  baseURL: "http://localhost:8080",
})


axiosApi.defaults.headers.common["Content-Type"] = "application/json"

axiosApi.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXJhbmphaW43MUBnbWFpbC5jb20iLCJleHAiOjE2ODUzNzU0MzksImlhdCI6MTY4MzU3NTQzOX0.fzkY-SGajQjo_4pO_nAxe8wuY05tn6cq2JG2RDY3D2glzzPR-DySdstEXkGgdQKwbQiU6Ae7Wlmux8qk-0DO6A`;
    return config;
  },
  error => Promise.reject(error)
);

export default axiosApi;
