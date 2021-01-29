import React, { useState, useEffect } from 'react'
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

const Nav: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [transparent, setTransparent] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = e => {
      if(window.scrollY > 0)
        setTransparent(false);
      else
        setTransparent(true)
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Container transparent={transparent}>
      <MenuBar>
        <Logo> HeroAnime</Logo>
        <MenuTogle onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </MenuTogle>
      </MenuBar>
      <NavBar>
          <Menu show={showMenu}>
            <MenuItem> Start</MenuItem>
            <MenuItem> Recents</MenuItem>
            <MenuItem> Trending</MenuItem>
            <MenuItem> Categories</MenuItem>
          </Menu>
        <MenuSettings>
          <SearchDiv>
            <FaSearch />
            <SearchInput type="text" placeholder="search here your animes" />
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
