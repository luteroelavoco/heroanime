import React from 'react'
import './styles.less'
import Slider from 'react-slick'
import settings from './helpers/slider'
import { Typography } from 'antd';
import { animesProps } from '../../helpers/interfaces'
import CardAnime from '../CardAnime'
const { Title } = Typography;

const ListAnimes: React.FC<animesProps> = ({ title, animes }) => {
  return (
    <div
      className={
        'container-animes ' + title.toLocaleLowerCase().replace(' ', '_')
      }
    >
      <Title level={4}>{title}</Title>
      <div className="carrousel-animes">
        <Slider {...settings}>
          {animes?.map(anime => (
            <CardAnime key={anime.id} anime={anime} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ListAnimes
