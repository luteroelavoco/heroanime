import React from 'react'
import Head from 'next/head'
import {Container} from '../styles/pages/Home';
const Home: React.FC = () => {

  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h1>Brevemente Disponível</h1>
        <p>@Copyright 2020 Code Pro Inc. All rights reserved.</p>
      </main>
    </Container>
  )
}
export default Home
