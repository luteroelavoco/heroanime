import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { Container, Carrousel, Title } from './styles'
import { settingsListTrending as settings } from '../utils/trending'
import api from '../../services/api'
import CardTrending from '../CardTrending'
const ListTrendigAnimes: React.FC = () => {
  const [trendings, setTrendings] = useState([])
  useEffect(() => {
    async function getTrendings() {
      const { data } = await api.get('/trending/anime')
      setTrendings(data.data)
    }
    getTrendings()
  }, [])
  return (
    <Container>
      <Title>Trending</Title>
      <Carrousel>
        <Slider {...settings}>
          {trendings.map(trending => (
            <CardTrending key={trending.id} anime={trending} />
          ))}
        </Slider>
      </Carrousel>
    </Container>
  )
}

export default ListTrendigAnimes
