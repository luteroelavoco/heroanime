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
import { TopAnime as anime } from '../../services/fakeapi'
import { FaStar } from 'react-icons/fa'
import {IoEyeSharp} from 'react-icons/io5'

const CardAnime: React.FC = () => {
  return (
    <Container>
      <Image
        src={anime.attributes.posterImage.original}
        alt={anime.attributes.titles.en}
      />
      <Content>
        <Title> {anime.attributes.titles.en} </Title>
        <SubTitle> {anime.attributes.episodeLength} episodes </SubTitle>
        <Bottom>
          <Rating>
            <FaStar />
            {anime.attributes.averageRating}
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
