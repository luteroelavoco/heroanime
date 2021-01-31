import React from 'react'
import Slider from 'react-slick'
import { Container, Carrousel, Title } from './styles'
import { settingsListTrending as settings } from '../utils/trending'
import CardTrending from '../CardTrending'

interface props{
  trendings : any
}

const ListTrendigAnimes: React.FC<props> = ({trendings}) => {

  return (
    <Container className="trending">
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
