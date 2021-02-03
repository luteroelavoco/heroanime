import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import './styles.less'
import { Layout as LayoutComponent } from 'antd'

import SearchProvider from '../../context/search'
const Layout: React.FC = ({ children }) => {
  return (
    <LayoutComponent className="layout noselect">
      <SearchProvider>
        <Nav />
        {children}
        <Footer />
      </SearchProvider>
    </LayoutComponent>
  )
}

export default Layout
