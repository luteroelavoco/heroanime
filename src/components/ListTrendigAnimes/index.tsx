import React from 'react'
import "./styles.less"
import { Typography } from 'antd';
import Slider from 'react-slick'
import settings  from './helpers/slider'
import {trendingsProps} from '../../helpers/interfaces'
import CardTrending from '../CardTrending'
const { Title } = Typography;

const ListTrendigAnimes: React.FC<trendingsProps> = ({trendings}) => {

  return (
    <div className="container-trendings">
      <Title level={4}>Trending</Title>
      <div className="carrousel-trendings">
        <Slider {...settings}>
          {trendings.map(trending => (
            <CardTrending key={trending.id} anime={trending} />
          ))}
        </Slider>
      </div>
    </div>
  )
}


export default ListTrendigAnimes
