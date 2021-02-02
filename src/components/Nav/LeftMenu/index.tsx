import React, { useState, useEffect } from 'react'
import './styles.less'
import { useRouter } from 'next/router'
import { Link as LinkScroll } from 'react-scroll'
import { useSearch } from '../../../context/search'
import { initialMenu, routerChanging } from '../helpers'
import { Menu } from 'antd'

function LeftMenu({ mode, setVisible }) {
  const router = useRouter()
  const [activeMoreAnimes, setActiveMoreAnimes] = useState(false)
  const { setSearch } = useSearch()
  const [menu, setMenu] = useState(initialMenu)
  useEffect(() => {
    routerChanging(router, setMenu, setActiveMoreAnimes, setSearch)
  }, [])
  
  return (
    <div className="nav-left-menu">
      <Menu mode={mode}>
        {menu.map(item => (
          <Menu.Item key={item.slug}>
            <LinkScroll
              activeClass="active"
              to={item.slug}
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              onClick={() => setVisible(false)}
            >
              {item.name}
            </LinkScroll>
          </Menu.Item>
        ))}
        {activeMoreAnimes && (
          <Menu.Item
            key="home-anime"
          >
            <a onClick={() => {router.push('/'); setVisible(false)}}>home</a>
          </Menu.Item>
        )}
        <Menu.Item
          key="more-animes"
          className={activeMoreAnimes && 'ant-menu-item-active'}
        >
          <a onClick={() => {router.push('/animes'); setVisible(false)}}>more animes</a>
        </Menu.Item>
      </Menu>
    </div>
  )
}
export default LeftMenu
