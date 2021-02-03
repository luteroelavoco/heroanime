import React, { useState, useEffect } from 'react'
import './styles.less'
import { useRouter } from 'next/router'
import {
  canGoBack,
  canGoForward,
  canShow,
  getPagesNumber,
  goBack,
  goForward
} from './helpers'
import { paginationProps } from '../../helpers/interfaces'

const Pagination: React.FC<paginationProps> = ({ count, limit }) => {
  const router = useRouter()
  const { q } = router.query
  const pageSize = 5
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
    router.push(`/animes?${q ? `q=${q}&` : ''}offset=${index * limit}`)
    window.scrollTo(0, 0)
  }
  if (pages.length > 1)
    return (
      <div className="container-pagination">
        <li
          className={canGoBack(start, pageSize) ? 'active arrow' : 'arrow'}
          onClick={() => goBack(start, pageSize, setStart)}
        >
          {'<'}
        </li>
        {pages.map((item, index) => {
          if (canShow(index, start, pageSize))
            return (
              <li
                key={item}
                className={index == current && 'active'}
                onClick={() => handlePage(index)}
              >
                {item}
              </li>
            )
        })}
        <li
          className={
            canGoForward(start, pageSize, pages.length)
              ? 'active arrow'
              : 'arrow'
          }
          onClick={() => goForward(start, pageSize, pages.length, setStart)}
        >
          {'>'}
        </li>
      </div>
    )
  return <></>
}

export default Pagination
