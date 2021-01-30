import styled from 'styled-components'


interface propsImage{
  images : any,
}

export const Container = styled.div`
  width: 200px;
  height: 400px;
  margin: 0 10px;
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media (max-width: 480px) {
    width: 94%;
    height: 480px;
  }
`

export const Image = styled.div<propsImage>`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.images?.original});
  background-size: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 380px;
  }
  @media (max-width: 300px) {
    background-image: url(${props => props.images?.tiny});
  }
`
export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 98px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background2Color};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
`

export const Title = styled.h1`
  margin: 8px 0 5px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    color: ${props => props.theme.colors.primaryColor};
    font-weight: bold;
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
    font-weight: bold;
  }
  @media (max-width: 380px) {
    font-size: 0.7rem;
  }
`

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
`

export const Rating = styled.label`
  margin-left: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.textColor};
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`

export const Views = styled.label`
  margin-right: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`
