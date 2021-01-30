import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import { TopAnime } from '../services/fakeapi'
import ListAnimes from '../components/ListAnimes'
import { getCurrenYear } from '../components/utils/date'
import ListTrendigAnimes from '../components/ListTrendigAnimes'
import api from '../services/api'

function Home({ latestAnimes, mdSchoolAnimes, samuraiAnimes, trendings }) {
  return (
    <Container coverImage={TopAnime.attributes.coverImage}>
      <Head>
        <title>Hero Anime</title>
      </Head>
      <Header anime={TopAnime} />
      <ListAnimes title="Latest animes" animes={latestAnimes} />
       <ListTrendigAnimes trendings={trendings} />
      <ListAnimes title="Middle school" animes={mdSchoolAnimes} />
      <ListAnimes title="Samurai" animes={samuraiAnimes} />
    </Container>
  )
}

export async function getAnimes(seasonYear: any, slug: string) {
  const { data } = await api.get('anime', {
    params: {
      'filter[seasonYear]': seasonYear,
      'filter[categories]': slug
    }
  })
  return data.data
}
export async function getTrendings() {
  const { data } = await api.get('/trending/anime')
  return data.data
}
export async function getStaticProps() {
  const latestAnimes = await getAnimes(getCurrenYear(), null)
  const mdSchoolAnimes = await getAnimes(null, 'middle-school')
  const samuraiAnimes = await getAnimes(null, 'samurai')
  const trendings = await getTrendings();
  return {
    props: {
      latestAnimes,
      mdSchoolAnimes,
      samuraiAnimes,
      trendings
    }
  }
}

export default Home
