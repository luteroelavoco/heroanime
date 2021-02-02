import React from 'react'
import { useRouter } from 'next/router'
import css from '../../styles/global.less'
import {
  Container,
  SubContainer,
  SubItem,
  Title,
  Description,
  Button
} from './styles'
import { Anime } from '../../services/fakeapiType'
import { Abbreviate } from '../../utils/anime'

interface props {
  anime: Anime
}

const Header: React.FC<props> = ({ anime }) => {
  const router = useRouter()

  function handleNextPage() {
    router.push(`/anime/${anime.id}`)
  }
  return (
    <Container>
      <Title> {anime.attributes.titles.en} </Title>
      <SubContainer>
        <SubItem> {anime.attributes.ageRatingGuide} </SubItem>
      </SubContainer>
      <Description>{Abbreviate(anime.attributes.description)}</Description>
      <Button className={css.button} type="button" onClick={handleNextPage}> See more </Button>
    </Container>
  )
}

export default Header
