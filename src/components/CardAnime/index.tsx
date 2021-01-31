import React from 'react'
import {
  Container,
  Content,
  Image,
  Title,
  SubTitle,
  Bottom,
  Rating,
  Views
} from './styles'
import { Anime } from '../../services/fakeapiType'
import { FaStar } from 'react-icons/fa'
import {IoEyeSharp} from 'react-icons/io5'
import { getEpisodes, getRating } from '../utils/animes'

interface props {
  anime: Anime
}

const CardAnime: React.FC<props> = ({anime}) => {
  return (
    <Container>
      <Image
        images={anime.attributes.posterImage}
      />
      <Content>
        <Title> {anime.attributes.canonicalTitle} </Title>
        <SubTitle> {getEpisodes(anime.attributes.episodeLength)}  </SubTitle>
        <Bottom>
          <Rating>
            <FaStar />
            {getRating(anime.attributes.averageRating)}
          </Rating>
          <Views>
            <IoEyeSharp />
            {anime.attributes.userCount}
          </Views>
        </Bottom>
      </Content>
    </Container>
  )
}

export default CardAnime
