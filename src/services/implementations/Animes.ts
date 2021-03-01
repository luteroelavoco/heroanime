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

export async function getFilteredAnimes(search: string, offset: number, limit: number) {
  const { data } = await api.get('/anime', {
    params: {
      'filter[text]': search,
      'page[limit]': limit,
      'page[offset]': offset
    }
  })
  return {
    data: data.data,
    meta: data.meta
  }
}
