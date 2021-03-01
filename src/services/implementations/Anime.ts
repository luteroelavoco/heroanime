import {api} from './Api'

export async function getAnime(id: any) {
  const {data} = await api.get('/anime/' + id)
  return data.data;
}