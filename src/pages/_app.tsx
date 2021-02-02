import React from 'react'
import { AppProps } from 'next/app'
import  '../styles/global.less'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Layout from '../components/Layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
