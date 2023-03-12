import axios, { AxiosError } from 'axios';

export function apiClient() {
  const api = axios.create({
    baseURL: 'https://afya-challenger.onrender.com',
  })

  api.interceptors.response.use(response => {
    return response.data;
  }, (error: AxiosError) => {
    return Promise.reject(error)
  })

  return api
}