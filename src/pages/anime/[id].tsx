import React, { useState,useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import api,{url} from '../../services/api'
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
function Anime({ anime}) {

  const [latestAnimes, setLatestAnimes] = useState([])
  const [trendings  , setTrendings] = useState([]);

  const [playing, setPlaying] = useState(false)
  const [youtubeVideoId, setYoutubeVideoId] = useState(
    anime.attributes.youtubeVideoId
  )
  useEffect(() => {
    window.scroll(0,0);
    setYoutubeVideoId(anime.attributes.youtubeVideoId)
  },[anime])

  useEffect(() => {
    async function getInitial(){
      let latestAnimes = await getAnimes(getCurrenYear(), null)
      setLatestAnimes(latestAnimes)
      let trendings = await getTrendings()
      setTrendings(trendings);
    }
    getInitial();
  },[])

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
  const res = await fetch(url + '/anime/' + id)
  const json = await res.json()
  return json.data;
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const anime = await getAnime(id)
  return {
    props: {
      anime,
    }
  }
}

export default Anime
