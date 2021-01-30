import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px auto 0px auto;

`

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  margin-left: 10vw;
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 10px;
  @media (max-width: 580px){
    margin-left: 20px;
  }
`

export const Carrousel = styled.div`
  padding:0px 40px ;
  width: 100%;
  max-width: 92vw;
  margin: 10px auto 0;
  @media (max-width: 580px){
    padding:0px 0px 0px 10px;
  }
  @media (max-width: 320px){
    max-width: 85vw;
    padding:0px 15px 0px 10px;
  }
`
