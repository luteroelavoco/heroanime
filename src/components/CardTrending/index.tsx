import React from 'react'
import { useRouter } from 'next/router'
import { Anime } from '../../services/fakeapiType'
import { Abbreviate } from '../utils/trending'
import {
  Container,
  Image,
  Content,
  Title,
  SubTitle,
  Desc,
  SeeMore
} from './styles'

interface props {
  anime: Anime
}
const CardTrending: React.FC<props> = ({ anime }) => {
  const router = useRouter()

  function handleNextPage() {
    router.push(`/anime/${anime.id}`)
  }
  return (
    <Container>
      <Image images={anime.attributes.posterImage} />
      <Content>
        <Title onClick={() => handleNextPage()}>
          {' '}
          {anime.attributes.canonicalTitle}{' '}
        </Title>
        <SubTitle onClick={() => handleNextPage()}>
          {' '}
          Available on {anime.attributes.showType}
        </SubTitle>
        <Desc> Synopsis : {Abbreviate(anime.attributes.synopsis)}</Desc>
        <SeeMore  onClick={() => handleNextPage()}> See more </SeeMore>
      </Content>
    </Container>
  )
}

export default CardTrending
