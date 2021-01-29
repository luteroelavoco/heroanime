import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 400px;
  margin: 0 10px;
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.28);
-moz-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.28);
box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.28);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media (max-width: 380px){
    width: 150px;
    height: 340px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
  @media (max-width: 380px){
    height: 220px;
  }
`
export const Content = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background2Color};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.28);
-moz-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.28);
box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.28);
`

export const Title = styled.h1`
  margin: 10px 0 5px;
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
    font-weight:bold;
  }
  @media (max-width: 380px){
    font-size: 0.8rem;
  }
`
export const SubTitle = styled.h3`
  color: ${props => props.theme.colors.gray};
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
    font-weight:bold;
  }
  @media (max-width: 380px){
    font-size: 0.7rem;
  }
`

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`

export const Rating = styled.label`
 margin-left: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.textColor};
  svg{
    font-size: 14px;
    margin-right: 5px;
  }
`

export const Views = styled.label`
  margin-right: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  svg{
    font-size: 14px;
    margin-right: 5px;
  }
`
