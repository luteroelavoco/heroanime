import React, { useState, useEffect } from 'react'
import '../../styles/pages/Anime.less'
import Head from 'next/head'
import ReactPlayer from 'react-player/youtube'
import ListAnimes from '../../components/ListAnimes'
import ListTrendigAnimes from '../../components/ListTrendigAnimes'
import { getAnime } from '../../services/implementations/Anime'
import { getAnimes } from '../../services/implementations/Animes'
import { getTrendings } from '../../services/implementations/Trendings'
import { getCurrenYear } from '../../utils/date'
import { FaStar } from 'react-icons/fa'
import { Typography, Button, Image  } from 'antd'

const { Title, Paragraph } = Typography

import { getRating, getEpisodes, Abbreviate } from '../../utils/anime'
function Anime({ anime }) {
  const [latestAnimes, setLatestAnimes] = useState([])
  const [trendings, setTrendings] = useState([])
  const [playing, setPlaying] = useState(false)
  const [youtubeVideoId, setYoutubeVideoId] = useState(
    anime.attributes.youtubeVideoId
  )
  useEffect(() => {
    window.scroll(0, 0)
    setYoutubeVideoId(anime.attributes.youtubeVideoId)
  }, [anime])

  useEffect(() => {
    async function getInitial() {
      setLatestAnimes(await getAnimes(getCurrenYear(), null))
      setTrendings(await getTrendings())
    }
    getInitial()
  }, [])

  return (
    <div className="container-page-anime">
      <Head>
        <title>Hero anime : {anime.attributes.canonicalTitle}</title>
      </Head>
      <div
        className="background"
        style={{
          backgroundImage: `url(${anime.attributes.coverImage?.original})`
        }}
      />
      <div className="content">
        <div className="card">
          <div className="image-container">
            <Title level={2}>{anime.attributes.canonicalTitle} </Title>
            <Image
              src={anime.attributes.posterImage.original}
              alt={anime.attributes.canonicalTitle}
            />
          </div>
          <div className="information">
            <Title level={2}>{anime.attributes.canonicalTitle} </Title>
            <Title level={4}>Available on {anime.attributes.subtype} </Title>
            <Title level={4}>
              {getEpisodes(anime.attributes.episodeLength)}
            </Title>
            <Title level={4}>{anime.attributes.ageRatingGuide} </Title>
            <Title level={3}>
              <FaStar />
              {getRating(anime.attributes.averageRating)}
            </Title>
            {youtubeVideoId && (
              <Button type="primary" shape="round"  onClick={() => setPlaying(!playing)}>
                {playing ? 'Pause trailer' : 'Play trailer'}
              </Button>
            )}
            <Paragraph>
              {Abbreviate(anime.attributes.description, 500)}
            </Paragraph>
          </div>
        </div>
        {youtubeVideoId && (
          <div className="player-wrapper">
            <ReactPlayer
              playing={playing}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              url={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
              width="100%"
              height="100%"
            />
          </div>
        )}
      </div>
      <ListTrendigAnimes trendings={trendings} />
      <ListAnimes title="This year" animes={latestAnimes} />
    </div>
  )
}



export async function getServerSideProps({ params }) {
  const { id } = params
  const anime = await getAnime(id)
  return {
    props: {
      anime
    }
  }
}

export default Anime
