import axios from 'axios'

const url = "https://kitsu.io/api/edge/";

const api = axios.create(
  {
    baseURL : url
  }
)

export default api;