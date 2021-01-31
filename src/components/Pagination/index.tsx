import React, { useState, useEffect } from 'react'
import pages from '../../pages'
import {
  canGoBack,
  canGoForward,
  canShow,
  getPagesNumber,
  goBack,
  goForward
} from '../utils/pagination'
import { Container, Page } from './styles'

interface props {
  count: number
  limit: number
}

const Pagination: React.FC<props> = ({ count, limit }) => {
  const pagelimits = 5
  const [pages, setPages] = useState([])
  const [current, setCurrent] = useState(0)
  const [start, setStart] = useState(0)

  useEffect(() => {
    setPages(getPagesNumber(count, limit))
  }, [count])

  return (
    <Container>
      <Page className={canGoBack(start, pagelimits) ? 'active arrow' : 'arrow'} onClick={() => goBack(start, pagelimits, setStart)}>
        {'<'}
      </Page>
      {pages.map((item, index) => {
        if (canShow(index, start, pagelimits))
          return <Page className={index == current && 'active'}> {item} </Page>
      })}
      <Page
        className={
          canGoForward(start, pagelimits, pages.length)
            ? 'active arrow'
            : 'arrow'
        }
        onClick={() => goForward(start, pagelimits, pages.length, setStart)}
      >
        {'>'}
      </Page>
    </Container>
  )
}

export default Pagination
