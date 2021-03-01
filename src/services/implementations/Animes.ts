import {api} from './Api'

export async function getAnimes(seasonYear: any, slug: string) {
  const { data } = await api.get('anime', {
    params: {
      'filter[seasonYear]': seasonYear,
      'filter[categories]': slug
    }
  })
  return data.data
}
