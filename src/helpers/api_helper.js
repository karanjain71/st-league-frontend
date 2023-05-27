import axios from "axios"

const axiosApi = axios.create({
  // baseURL: "http://192.168.231.22:8080" - mobile hotspot
  baseURL: "http://192.168.1.2:8080" //airtel wifi whitefield
})

axiosApi.defaults.headers.common["Content-Type"] = "application/json"

axiosApi.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXJhbmphaW43MUBnbWFpbC5jb20iLCJleHAiOjE3NjcyMDg4NjgsImlhdCI6MTY4NTE5NTc4Nn0.knlzjVEJ6dgIERMukGGwYcOA_0dQaufjpafNWjedxbvLNfiBETfzk0Bw-hfdPZwnVulkRPnVbBJ5h1zTiv0JHA`;
    return config;
  },
  error => Promise.reject(error)
);

export default axiosApi;
