import styled, { css } from 'styled-components'

interface MenuProps {
  show: boolean
}
interface ContainerProps {
  transparent: boolean
}
interface MidiaProps {
  changeColor: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  background-color: ${props =>
    props.transparent ? 'transparent' : props.theme.colors.backgroundColor};
  position: fixed;
  top: 0;
  padding: 12px 20px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px 0px;
  }
`

export const MenuBar = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    display: block;
  }
`

export const NavBar = styled.div<MenuProps>`
  width: 100%;
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content:flex-start;
    width: 100%;
    transition: all 1s ease-out;
    background-color: ${props => props.theme.colors.backgroundColor};
    ${props =>
      props.show
        ? css`
            opacity: 1;
            height: 100vh;
          `
        : css`
            opacity: 0;
            height: 0;
            overflow: hidden;
          `}
  }
`

export const Menu = styled.ul`
  display: inline-flex;
  @media (max-width: 768px) {
    display: inline-block;
    width: 100vw;
    transition: all 1s ease-out;
  }
`

export const MenuItem = styled.li`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
  cursor: pointer;
  font-weight: 300;
  transition: 0.5s all;

  &:hover {
    color: ${props => props.theme.colors.primaryColor};
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    padding: 10px 0;
    font-size: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;
    &::after {
      content: '';
      width: 90%;
      padding: 2px 0 20px;
      border-bottom: 1px solid ${props => props.theme.colors.white};
    }
  }
`

export const MenuSettings = styled.div`
  display: flex;
  @media (max-width: 768px) {
   width: 100%;
   justify-content: space-between;
   margin-left: 20px;
   margin-top: 10px;
  }

`

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  outline: none;
  border: 1px solid ${props => props.theme.colors.white};
  svg {
    margin-left: 12px;
  }

`

export const SearchInput = styled.input`
  padding: 6px 10px;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props => props.theme.colors.white};
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${props => props.theme.colors.white};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${props => props.theme.colors.white};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${props => props.theme.colors.white};
  }
`
export const SocialMedias = styled.div<MidiaProps>`
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
  @media (max-width: 840px) {
    display: none;
  }
`
