import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import { Container } from './styles'
import SearchProvider from '../../context/search'
const Layout: React.FC = ({ children }) => {
  return (
    <Container className="noselect">
      <SearchProvider>
        <Nav />
        {children}
        <Footer />
      </SearchProvider>
    </Container>
  )
}

export default Layout
