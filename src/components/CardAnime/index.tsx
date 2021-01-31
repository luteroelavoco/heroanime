import React from 'react'
import { useRouter } from 'next/router'
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
import { IoEyeSharp } from 'react-icons/io5'
import { getRating, getEpisodes } from '../../utils/anime'

interface props {
  anime: Anime
}

const CardAnime: React.FC<props> = ({ anime }) => {
  const router = useRouter()

  function handleNextPage() {
    router.push(`/anime/${anime.id}`)
  }
  return (
    <Container>
      <Image
        onClick={handleNextPage}
        src={anime.attributes.posterImage.original}
        alt={anime.attributes.canonicalTitle}
      />
      <Content>
        <Title onClick={handleNextPage}>
          {anime.attributes.canonicalTitle}
        </Title>
        <SubTitle onClick={handleNextPage}>
          {getEpisodes(anime.attributes.episodeLength)}
        </SubTitle>
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
