import React,{useState, useEffect} from 'react';
import Slider from "react-slick";
import {Container, Carrousel, Title } from './styles';
import {settingsListTrending as settings} from '../utils/trending'
import CardAnime from '../CardAnime';
import api from '../../services/api';
const ListTrendigAnimes: React.FC = () => {

  const [trendings, setTrendings] = useState([]);
  useEffect(()=>{
    async function getTrendings(){
      const {data} = await api.get('/trending/anime');
      setTrendings(data.data);
    }
    getTrendings();
  },[])
  return (
    <Container>
      <Title>Trending</Title>
      <Carrousel>
        <Slider {...settings}>
        
        </Slider>
      </Carrousel>
    </Container>
  );
}

export default ListTrendigAnimes;