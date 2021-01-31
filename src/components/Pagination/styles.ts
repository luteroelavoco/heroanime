import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  max-width: 300px;
  margin: 40px auto 0px;
`

export const Page = styled.h1`
  width: 50px;
  height: 50px;
  font-size:14px;
  padding-top: 16px;
  text-align: center;
  margin: 0 3px;
  border: 2px solid ${props => props.theme.colors.buttonColor};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  border-radius: 100%;
  &.active {
    background-color: ${props => props.theme.colors.buttonColor};
    opacity:1 !important;
  }
  &.arrow {
    background-color: ${props => props.theme.colors.buttonColor};
    opacity:0.5;
  }
`
