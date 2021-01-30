import styled from 'styled-components'

interface propsImage {
  images: any
}

export const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  @media (max-width: 650px){
    width: 180px;
  }
  @media (max-width: 480px){
    width: 140px;
  }
  @media (max-width: 340px){
    width: 90%;
  }
`
export const Image = styled.div<propsImage>`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.images.original});
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  @media (max-width: 991px) {
    background-image: url(${props => props.images.medium});
  }
  @media (max-width: 768px) {
    background-image: url(${props => props.images.small});
  }
  @media (max-width: 480px){
    height: 250px;
  }
  @media (max-width: 345px){
    height: 300px;
  }

  @media (max-width: 300px) {
    background-image: url(${props => props.images.tiny});
  }
`

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 160px;
  @media (max-width: 645px){
    height: auto;
  }
`

export const Title = styled.h1`
  margin: 8px 0 5px;
  text-align: left;
  font-size: 1rem;
  font-weight: 300;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
    font-weight: bold;
  }
  @media (max-width: 380px) {
    font-size: 0.8rem;
  }
`

export const SubTitle = styled.h3`
  color: ${props => props.theme.colors.gray};
  text-align: left;
  font-size: 0.8rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
    font-weight: bold;
  }
  @media (max-width: 380px) {
    font-size: 0.7rem;
  }
`
export const Desc = styled.p`
  color: ${props => props.theme.colors.white};
  text-align: left;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all;
`


export const SeeMore = styled.a`
  width: 60%;
  position: absolute;
  bottom: 0;
  text-decoration: none;
  padding: 6px 8px;
  margin-top: 10px;
  text-align: center;
  border-radius: 4px;
  align-self: left;
  background-color: ${props => props.theme.colors.buttonColor};
  color: ${props => props.theme.colors.buttonTextColor};
  transition: 0.5s all;
  &:hover {
    background-color: ${props => props.theme.colors.buttonTextColor};
    color: ${props => props.theme.colors.buttonColor};
  }
  @media (max-width: 645px){
    position: relative;
  }
`
