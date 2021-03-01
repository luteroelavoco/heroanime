import {api} from './Api'

export async function getTrendings() {
  const { data } = await api.get('/trending/anime')
  return data.data
}