import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link'
import { useSearch } from '../../context/search'
import { initialMenu, routerChanging } from './helpers'
import { Menu } from 'antd'

function LeftMenu() {
  const router = useRouter()

  const [activeMoreAnimes, setActiveMoreAnimes] = useState(false)
  const { setSearch } = useSearch()
  const [menu, setMenu] = useState(initialMenu)
  useEffect(() => {
    routerChanging(router, setMenu, setActiveMoreAnimes, setSearch)
  }, [])
  return (
    <Menu mode="horizontal">
      {menu.map(item => (
        <Menu.Item key={item.slug}>
          <LinkScroll
            activeClass="active"
            to={item.slug}
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
          >
            {item.name}
          </LinkScroll>
        </Menu.Item>
      ))}

      <Menu.Item
        key="more-animes"
        className={activeMoreAnimes && 'ant-menu-item-active'}
      >
        <a onClick={() => router.push("/animes")}>
        more animes
        </a>
      </Menu.Item>
    </Menu>
  )
}
export default LeftMenu
