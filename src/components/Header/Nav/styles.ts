import styled, { css } from 'styled-components'

interface MenuProps {
  show: boolean
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  padding: 12px 20px;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const MenuBar = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
  }
`

export const Logo = styled.strong`
  color: ${props => props.theme.colors.primaryColor};
  font-size: 1.8rem;
  cursor: pointer;
`
export const MenuTogle = styled.div`
  display: none;
  font-size: 16px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
  }
  @media (max-width: 480px) {
    display: block;
  }
`

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const Menu = styled.ul<MenuProps>`
  display: inline-flex;
  @media (max-width: 480px) {
    display: inline-block;
    transition: all 1s;
    ${props =>
      props.show
        ? css`
            opacity: 1;
            height: auto;
          `
        : css`

            opacity: 0;
            height: 0;
            overflow: hidden;
          `}
  }
`

export const MenuItem = styled.li`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
  cursor: pointer;
  font-weight: 300;
  font-size: 14px;
  transition: 0.5s all;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
  }
  @media (max-width: 480px) {
    margin-top: 10px;
  }
`

export const MenuSettings = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.backgroundColor};
  outline: none;
  border: 1px solid ${props => props.theme.colors.white};
  svg {
    margin-left: 12px;
  }
  @media (max-width: 810px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  padding: 6px 10px;
  background-color: ${props => props.theme.colors.backgroundColor};
  outline: none;
  border: none;
  color: ${props => props.theme.colors.white};
`
export const SocialMedias = styled.div`
  width: 100px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
  svg {
    cursor: pointer;
    color: ${props => props.theme.colors.white};
    transition: 0.5s all;
    &:hover {
      color: ${props => props.theme.colors.primaryColor};
    }
  }
`
