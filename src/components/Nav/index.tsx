import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll'
import {
  Container,
  Logo,
  Menu,
  MenuBar,
  NavBar,
  MenuItem,
  MenuSettings,
  MenuTogle,
  SearchDiv,
  SearchInput,
  SocialMedias
} from './styles'

import {
  FaBars,
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import { useSearch } from '../../context/search'
import { hasScrolled, initialMenu, routerChanging } from './helpers'

const Nav: React.FC = () => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)
  const [transparent, setTransparent] = useState(true)
  const [canGoBack, setcanGoBack] = useState<any>(true)
  const [activeMoreAnimes, setActiveMoreAnimes] = useState(false)
  const { search, setSearch } = useSearch()
  const [menu, setMenu] = useState(initialMenu)

  useEffect(() => {
    routerChanging(router,setMenu,setActiveMoreAnimes,setSearch)
    hasScrolled(setTransparent)
  }, [])

  useEffect(() => {
    if (search.length > 0) {
      router.push('/animes?q=' + search)
    }
  }, [search])

  useEffect(() => {
    if (canGoBack == '') {
      router.push('/')
    }
  }, [canGoBack])

  return (
    <Container transparent={transparent}>
      <MenuBar>
        <Link href="/">
          <Logo> HeroAnime</Logo>
        </Link>
        <MenuTogle onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </MenuTogle>
      </MenuBar>
      <NavBar show={showMenu}>
        <Menu>
          {menu.map(item => (
            <MenuItem key={item.slug}>
              <LinkScroll
                activeClass="active"
                onSetActive={()=> setShowMenu(false)}
                to={item.slug}
                spy={true}
                offset={-80}
                smooth={true}
                duration={500}
              >
                {item.name}
              </LinkScroll>
            </MenuItem>
          ))}

          <Link href="/animes">
            <MenuItem
            className={activeMoreAnimes && 'active'}
            onClick={()=> setShowMenu(false)}
            >
              {' '}
              more animes
            </MenuItem>
          </Link>
        </Menu>
        <MenuSettings>
          <SearchDiv>
            <FaSearch />
            <SearchInput
              type="text"
              value={search}
              onChange={e => {
                setSearch(e.target.value)
                setcanGoBack(e.target.value)
              }}
              placeholder="search here your animes"
            />
          </SearchDiv>
          <SocialMedias changeColor={transparent}>
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </SocialMedias>
        </MenuSettings>
      </NavBar>
    </Container>
  )
}

export default Nav
