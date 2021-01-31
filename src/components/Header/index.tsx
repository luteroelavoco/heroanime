import React from 'react'
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
  return (
    <Container>
      <Title> {anime.attributes.titles.en} </Title>
      <SubContainer>
        <SubItem> {anime.attributes.ageRatingGuide} </SubItem>
      </SubContainer>
      <Description>{Abbreviate(anime.attributes.description)}</Description>
      <Button type="button"> See more </Button>
    </Container>
  )
}

export default Header
