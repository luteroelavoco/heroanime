import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  canGoBack,
  canGoForward,
  canShow,
  getPagesNumber,
  goBack,
  goForward
} from './helpers'
import { Container, Page } from './styles'

interface props {
  count: number
  limit: number
}

const Pagination: React.FC<props> = ({ count, limit }) => {
  const router = useRouter()
  const { q  } = router.query
  const pagelimits = 5
  const [pages, setPages] = useState([])
  const [current, setCurrent] = useState(0)
  const [start, setStart] = useState(0)

  useEffect(() => {
    setPages(getPagesNumber(count, limit))
    setCurrent(0)
    setStart(0)
  }, [count])

  function handlePage(index: number) {
    setCurrent(index)
    router.push(`/animes?${q ? `q=${q}&`:''}offset=${index * limit}`)
    window.scrollTo(0, 0);
  }
  if (pages.length > 1)
    return (
      <Container>
        <Page
          className={canGoBack(start, pagelimits) ? 'active arrow' : 'arrow'}
          onClick={() => goBack(start, pagelimits, setStart)}
        >
          {'<'}
        </Page>
        {pages.map((item, index) => {
          if (canShow(index, start, pagelimits))
            return (
              <Page
                key={item}
                className={index == current && 'active'}
                onClick={() => handlePage(index)}
              >
                {item}
              </Page>
            )
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
  return <></>
}

export default Pagination
