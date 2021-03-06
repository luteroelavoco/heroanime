import React from 'react'
import '../styles/pages/Home.less'
import Head from 'next/head'
import Header from '../components/Header'
import ListAnimes from '../components/ListAnimes'
import ListTrendigAnimes from '../components/ListTrendigAnimes'
import {getAnimes} from '../services/implementations/Animes'
import {getTrendings} from  '../services/implementations/Trendings'
import { TopAnime } from '../services/fakeapi'
import { getCurrenYear } from '../utils/date'

function Home({ latestAnimes, mdSchoolAnimes, samuraiAnimes, trendings }) {
  return (
    <div
      className="container-home"
      style={{
        backgroundImage: `url(${TopAnime.attributes.coverImage.original})`
      }}
    >
      <Head>
        <title>Hero Anime</title>
      </Head>
      <Header anime={TopAnime} />
      <ListTrendigAnimes trendings={trendings} />
      <ListAnimes title="This year" animes={latestAnimes} />
      <ListAnimes title="Middle school" animes={mdSchoolAnimes} />
      <ListAnimes title="Samurai" animes={samuraiAnimes} />
    </div>
  )
}



export async function getStaticProps() {
  const latestAnimes = await getAnimes(getCurrenYear(), null)
  const mdSchoolAnimes = await getAnimes(null, 'middle-school')
  const samuraiAnimes = await getAnimes(null, 'samurai')
  const trendings = await getTrendings()
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
