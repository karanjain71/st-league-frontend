import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const axiosApi = axios.create({
  // baseURL: "http://192.168.231.22:8080" - mobile hotspot
  baseURL: 'http://192.168.1.2:8080', //airtel wifi whitefield
});

axiosApi.defaults.headers.common['Content-Type'] = 'application/json';

axiosApi.interceptors.request.use(
  async config => {
    console.log(config.addAuth + ' do glfhgdj');
    const token = await AsyncStorage.getItem('authToken');
    if (config.addAuth == true) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log(JSON.stringify(config) + ' here updated');
    return config;
  },
  error => Promise.reject(error),
);

export default axiosApi;
