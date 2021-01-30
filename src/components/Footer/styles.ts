import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  background-color: ${props => props.theme.colors.background2Color};
  @media (max-width : 480px){
    text-align: center;
  }
`
export const Description = styled.p`
  color: ${props => props.theme.colors.textColor};
`

export const Copyright = styled.label`
  text-decoration: none;
  color: ${props => props.theme.colors.textColor};
  font-size: 1rem;
  @media (max-width : 480px){
    font-size:0.8rem;
    margin-top: 8px;
  }
`
export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s all;
  color: ${props => props.theme.colors.white};
  &:hover {
    color: ${props => props.theme.colors.gray};
  }
`
