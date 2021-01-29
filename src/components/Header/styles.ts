import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.strong`
  width: 90%;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 300;
  color: ${props => props.theme.colors.white};
  letter-spacing: 1px;
  margin-top: 300px;
`

export const SubContainer = styled.div`
  width: 90%;
  max-width: 250px;
  display: flex;
  justify-content: space-around;
`

export const SubItem = styled.span`
  margin-top: 10px;
  font-size: 1rem;
  color: ${props => props.theme.colors.textColor};
`

export const Description = styled.p`
  width: 90%;
  margin-top: 20px;
  text-align: center;
  max-width: 800px;
  font-size: 0.5rem;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.gray};
`
export const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.buttonColor};
  border-radius: 3px;
  cursor: pointer;
  background: ${props => props.theme.colors.buttonColor};
  color: ${props => props.theme.colors.buttonTextColor};
  transition: 0.5s all;
  &:hover {
    background: ${props => props.theme.colors.buttonTextColor};
    border-color: ${props => props.theme.colors.buttonTextColor};
    color: ${props => props.theme.colors.buttonColor};
  }
`
