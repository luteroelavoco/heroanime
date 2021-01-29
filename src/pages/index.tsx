import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import {TopAnime} from '../services/fakeapi'
import ListAnimes from '../components/ListAnimes'
import { getCurrenYear } from '../components/utils/date'

const Home: React.FC = () => {

  return (
    <Container coverImage={TopAnime.attributes.coverImage}>
      <Head>
        <title>Hero Anime</title>
      </Head>
      <Header anime={TopAnime} />
      <ListAnimes title="Latest animes" seasonYear={getCurrenYear()} />
    </Container>
  )
}
export default Home
