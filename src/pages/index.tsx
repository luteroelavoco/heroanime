import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Nav from '../components/Nav'
import Header from '../components/Header'
import {TopAnime} from '../services/fakeapi'

const Home: React.FC = () => {
  return (
    <Container coverImage={TopAnime.attributes.coverImage}>
      <Head>
        <title>Hero Anime</title>
      </Head>
      <Header anime={TopAnime} />
    </Container>
  )
}
export default Home
