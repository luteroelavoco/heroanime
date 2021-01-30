import React from 'react';
import { Anime } from '../../services/fakeapiType'
import { Abbreviate } from '../utils/trending';
import { Container,Image, Content,Title,SubTitle, Desc ,SeeMore } from './styles';

interface props {
  anime: Anime
}
const CardTrending: React.FC<props> = ({anime}) => {
  return (
    <Container>
      <Image
        images={anime.attributes.posterImage}
      />
      <Content>
        <Title> {anime.attributes.canonicalTitle} </Title>
        <SubTitle> Available on {anime.attributes.showType}</SubTitle>
        <Desc> Synopsis : {Abbreviate(anime.attributes.synopsis)}</Desc>
        <SeeMore href={anime.links.self}> See more </SeeMore>
        </Content>
    </Container>
  );
}

export default CardTrending;