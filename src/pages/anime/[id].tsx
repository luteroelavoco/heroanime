import React, { useState,useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import api from '../../services/api'
import { getTrendings, getAnimes } from '../index'
import ListAnimes from '../../components/ListAnimes'
import ListTrendigAnimes from '../../components/ListTrendigAnimes'
import { getCurrenYear } from '../../components/utils/date'
import { FaStar } from 'react-icons/fa'
import {
  BgImage,
  Container,
  Content,
  ImgContainer,
  Image,
  CardAnime,
  Information,
  Title,
  SubTitle,
  AverageRating,
  Description,
  Button,
  PlayerWrapper
} from '../../styles/pages/Anime'
import { getRating, getEpisodes, Abbreviate } from '../../utils/anime'
function Anime({ anime, latestAnimes, trendings }) {
  const [playing, setPlaying] = useState(false)
  const [youtubeVideoId, setYoutubeVideoId] = useState(
    anime.attributes.youtubeVideoId
  )
  useEffect(() => {
    window.scroll(0,0);
  },[anime])
  return (
    <Container>
      <BgImage images={anime.attributes.coverImage} />
      <Content>
        <CardAnime>
          <ImgContainer>
            <Title>{anime.attributes.canonicalTitle} </Title>
            <Image
              src={anime.attributes.posterImage.original}
              alt={anime.attributes.canonicalTitle}
            />
          </ImgContainer>
          <Information>
            <Title>{anime.attributes.canonicalTitle} </Title>
            <SubTitle>Available on {anime.attributes.subtype} </SubTitle>
            <SubTitle> {getEpisodes(anime.attributes.episodeLength)} </SubTitle>
            <SubTitle>{anime.attributes.ageRatingGuide} </SubTitle>
            <AverageRating>
              <FaStar />
              {getRating(anime.attributes.averageRating)}
            </AverageRating>
            {youtubeVideoId && (
              <Button className="button" onClick={() => setPlaying(!playing)}>
                {playing ? 'Pause trailer' : 'Play trailer'}
              </Button>
            )}
            <Description>
              {Abbreviate(anime.attributes.description, 100)}
            </Description>
          </Information>
        </CardAnime>
        {youtubeVideoId && (
          <PlayerWrapper>
            <ReactPlayer
              playing={playing}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              url={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
              width="100%"
              height="100%"
            />
          </PlayerWrapper>
        )}
      </Content>
      <ListTrendigAnimes trendings={trendings} />
      <ListAnimes title="This year" animes={latestAnimes} />
    </Container>
  )
}

async function getAnime(id: any) {
  const { data } = await api.get('/anime/' + id)
  return data.data
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const anime = await getAnime(id)
  const trendings = await getTrendings()
  const latestAnimes = await getAnimes(getCurrenYear(), null)
  return {
    props: {
      anime,
      latestAnimes,
      trendings
    }
  }
}

export default Anime
