import axios from 'axios'

export const url = "https://kitsu.io/api/edge/";

const api = axios.create(
  {
    baseURL : url
  }
)

export default api;