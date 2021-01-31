import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 350px;
  margin: 40px 0 0px;
  align-self: center;
  grid-template-columns: repeat(7, 1fr);
`

export const Page = styled.h1`
  width: 45px;
  height: 45px;
  font-size: 14px;
  padding-top: 12px;
  text-align: center;
  margin: 0 3px;
  border: 2px solid ${props => props.theme.colors.buttonColor};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  border-radius: 100%;
  &.active {
    background-color: ${props => props.theme.colors.buttonColor};
    opacity: 1 !important;
  }
  &.arrow {
    background-color: ${props => props.theme.colors.buttonColor};
    opacity: 0.5;
  }
  @media (max-width: 380px) {
    width: 40px;
    height: 40px;
    font-size: 12px;
    padding-top: 12px;
  }
`
