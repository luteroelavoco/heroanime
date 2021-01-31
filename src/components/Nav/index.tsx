import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
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

const Nav: React.FC = () => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)
  const [transparent, setTransparent] = useState(true)
  const {search, setSearch} = useSearch();
  const [searchControler, setSearchControler] = useState<any>(true)

  useEffect(() => {
    const onScroll = e => {
      if (window.scrollY > 0) setTransparent(false)
      else setTransparent(true)
    }
    window.addEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (search.length > 0){
      router.push('/animes?q=' + search)
    }
  }, [search])

  useEffect(() => {
    if (searchControler == '') {
      router.push('/')
    }
  }, [searchControler])

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
          <MenuItem> Start</MenuItem>
          <MenuItem> Recents</MenuItem>
          <MenuItem> Trending</MenuItem>
          <MenuItem> Categories</MenuItem>
        </Menu>
        <MenuSettings>
          <SearchDiv>
            <FaSearch />
            <SearchInput
              type="text"
              value={search}
              onChange={e => {
                setSearch(e.target.value)
                setSearchControler(e.target.value)
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
