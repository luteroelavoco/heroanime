import React, { useState, useEffect} from 'react';
import Slider from "react-slick";
import { Carrousel, Container, Title } from './styles';
import {settingsListAnime as settings} from '../utils/animes'
import CardAnime from '../CardAnime';

interface props {
  title: string,
  animes: any,
}

const ListAnimes: React.FC<props> = ({title, animes}) => {

  return (
    <Container>
      <Title>{title}</Title>
      <Carrousel>
        <Slider {...settings}>
          {animes?.map(anime => (
             <CardAnime key={anime.id} anime={anime} />
          ))}

        </Slider>
      </Carrousel>

    </Container>
  );
}




export default ListAnimes;