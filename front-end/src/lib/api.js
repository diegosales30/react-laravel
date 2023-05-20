import axios from 'axios'

export const axiosApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosApi.interceptors.request.use( (config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`
  return config;
})

axiosApi.interceptors.response.use((res) => {
  return res
}, (error) => {
  try {
    const { res } = error
    if (res.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN")
    }
  } catch (error) {
    console.log(error);
  }

  throw error;
})

export default axiosApi;