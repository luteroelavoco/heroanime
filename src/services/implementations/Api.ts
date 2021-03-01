import axios from 'axios'

const url: string = 'https://kitsu.io/api/edge/'

axios.defaults.headers.common['Accept'] = 'application/vnd.api+json'
axios.defaults.headers.common['Content-Type'] = 'application/vnd.api+json'
export const api = axios.create({
  baseURL: url
})
