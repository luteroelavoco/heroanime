import React from 'react'
import Head from 'next/head'
import {Container} from '../styles/pages/Home';
import Header from '../components/Header';
const Home: React.FC = () => {

  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
    </Container>
  )
}
export default Home
