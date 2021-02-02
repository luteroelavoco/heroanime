import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  body, main, html {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
  }
  body{
    background: ${props => props.theme.colors.backgroundColor};
    font: 400 16px Roboto, sans-serif;
  }
  ul{
    list-style: none;
  }
  .button{
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
  }
  .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

`
