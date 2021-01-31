import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  max-width: 95vw;
  margin: 80px auto 40px;
  flex-direction: column;

`

export const Title = styled.h1`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  margin-bottom: 15px;
`

export const ListAnimes = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  row-gap: 20px;
  @media (max-width: 1200px){
    grid-template-columns: repeat(4,1fr);
  }
  @media (max-width: 991px){
    grid-template-columns: repeat(3,1fr);
  }
  @media (max-width: 680px){
    grid-template-columns: repeat(2,1fr);
  }

`

