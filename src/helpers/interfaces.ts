import { Anime } from '../services/animeType'

export interface animeProps {
  anime: Anime
}

export interface trendingsProps{
  trendings : any
}

export interface animesProps {
  title: string,
  animes: any,
}

export interface paginationProps {
  count: number
  limit: number
}