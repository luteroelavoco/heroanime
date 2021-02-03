import React from 'react'
import { useRouter } from 'next/router'
import "./styles.less"
import { Card } from 'antd'
import {
  Container,
  Content,
  Image,
  Title,
  SubTitle,
  Bottom,
  Rating,
  Views
} from './styles'
import { FaStar } from 'react-icons/fa'
import { IoEyeSharp } from 'react-icons/io5'
import { getRating, getEpisodes } from '../../utils/anime'
import {animeProps} from '../../helpers/interfaces'
const { Meta } = Card
const CardAnime: React.FC<animeProps> = ({ anime }) => {
  const router = useRouter()

  function handleNextPage() {
    router.push(`/anime/${anime.id}`)
  }
  return (
    <div className="container-card-anime">
      <Card
        hoverable
        bordered={false}
        style={{ width: '100%' }}
        onClick={() => handleNextPage()}
        cover={
          <img
            alt={anime.attributes.canonicalTitle}
            src={anime.attributes.posterImage.original}
          />
        }
      >
        <Meta
          title={anime.attributes.canonicalTitle}
          description={ getEpisodes(anime.attributes.episodeLength)}
        />
         <div className="bottom">
          <label>
            <FaStar />
            {getRating(anime.attributes.averageRating)}
          </label>
          <label>
            <IoEyeSharp />
            {anime.attributes.userCount}
          </label>
        </div>
      </Card>
    </div>
  )
}

export default CardAnime
