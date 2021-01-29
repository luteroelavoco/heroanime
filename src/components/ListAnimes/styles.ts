import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 10px auto ;
  padding-bottom: 40px;
  @media (max-width: 580px){
    margin: 40px auto ;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  margin-left: 10vh;
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 10px;
  @media (max-width: 580px){
    margin-left: 5vh;
  }
`

export const Carrousel = styled.div`
  padding:0px 40px ;
  width: 100%;
  max-width: 92vw;
  margin: 10px auto 0;
  @media (max-width: 580px){
    max-width: 90vw;
    padding:0px 0px 0px 10px;
  }
`
