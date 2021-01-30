import React from 'react'
import { Container, Description, Copyright, Link } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Description>
        {' '}
        A simple anime catolog to show my skills in React Js and Next Js.
      </Description>
      <Copyright>
        Copyright (c) HeroAnime 2021 by
        <Link href="https://www.linkedin.com/in/cientista1/" target="_blank">
          {' '}
          Lutero Elavoco
        </Link>
        . All rights reserved.
      </Copyright>
    </Container>
  )
}

export default Footer
