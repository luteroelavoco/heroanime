import React, { useState } from 'react'
import './styles.less'
import { useRouter } from 'next/router'
import { Typography, Button } from 'antd'
import { animeProps } from '../../helpers/interfaces'
import { Abbreviate } from '../../utils/anime'
const { Title, Text } = Typography

const Header: React.FC<animeProps> = ({ anime }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleNextPage() {
    setLoading(true)
    router.push(`/anime/${anime.id}`)
  }
  return (
    <div className="container-header">
      <Title> {anime.attributes.titles.en} </Title>
      <Title level={5}>{anime.attributes.ageRatingGuide}</Title>
      <Text className="header-text">
        {Abbreviate(anime.attributes.description)}
      </Text>
      <Button
        type="primary"
        danger
        size="large"
        onClick={handleNextPage}
        loading={loading}
      >
        See more
      </Button>
    </div>
  )
}

export default Header
