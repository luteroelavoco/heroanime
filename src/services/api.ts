import axios from 'axios'

export const url = "https://kitsu.io/api/edge/";

axios.defaults.headers.common['Accept'] = 'application/vnd.api+json'
axios.defaults.headers.common['Content-Type'] = 'application/vnd.api+json'
const api = axios.create(
  {
    baseURL : url
  }
)

export default api;