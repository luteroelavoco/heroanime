import React, { useState, useEffect} from 'react';
import Slider from "react-slick";
import { Carrousel, Container, Title } from './styles';
import {settingsListAnime as settings} from '../utils/animes'
import CardAnime from '../CardAnime';
import api from '../../services/api';

interface props {
  title: string,
  slug?: string,
  seasonYear?: number,
}

const ListAnimes: React.FC<props> = ({title, slug, seasonYear}) => {

  const [animes, setAnimes] = useState([]);
  useEffect(()=>{
    async function getAnimes(){
      const {data} = await api.get('/anime', {
        params: {
          "filter[seasonYear]" : seasonYear,
          "filter[categories]" : slug,
        }
      });
      setAnimes(data.data);
    }
    getAnimes();
  },[])

  return (
    <Container>
      <Title>{title}</Title>
      <Carrousel>
        <Slider {...settings}>
          {animes.map(anime => (
             <CardAnime key={anime.id} anime={anime} />
          ))}

        </Slider>
      </Carrousel>

    </Container>
  );
}

export default ListAnimes;