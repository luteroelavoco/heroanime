import React, { useState } from 'react'
import './styles.less'
import { useRouter } from 'next/router'
import { Card, Button } from 'antd'
import { Abbreviate } from '../../utils/anime'
import { animeProps } from '../../helpers/interfaces'

const { Meta } = Card

const CardTrending: React.FC<animeProps> = ({ anime }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleNextPage() {
    setLoading(true)
    router.push(`/anime/${anime.id}`)
    setTimeout(() => {
      setLoading(false)
    },3000)
  }
  return (
    <div className="container-card-trending">
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
          description={Abbreviate(anime.attributes.synopsis, 100)}
        />
        <Button type="primary" loading={loading} onClick={handleNextPage}> See more</Button>
      </Card>
    </div>
  )
}

export default CardTrending
