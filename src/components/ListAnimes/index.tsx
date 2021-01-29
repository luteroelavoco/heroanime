import React from 'react';
import Slider from "react-slick";
import { Carrousel, Container, Title } from './styles';
import {settingsListAnime as settings} from '../utils/animes'
import CardAnime from '../CardAnime';

interface props {
  title: string,
  slug?: string,
  seasonYear?: number,
}

const ListAnimes: React.FC<props> = ({title, slug, seasonYear}) => {

  return (
    <Container>
      <Title>{title}</Title>
      <Carrousel>
        <Slider {...settings}>
          <CardAnime />
          <CardAnime />
          <CardAnime />
          <CardAnime />
          <CardAnime />
          <CardAnime />
        </Slider>
      </Carrousel>

    </Container>
  );
}

export default ListAnimes;