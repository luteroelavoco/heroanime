import styled from 'styled-components';

interface backgroundprops {
  coverImage: {
    tiny: string,
    small: string,
    large: string,
    original: string
    meta: {
      dimensions: {
        tiny: {
          width: number,
          height: number
        },
        small: {
          width: number,
          height: number
        },
        large: {
          width: number,
          height: number
        }
      }
    }
  },
}

export const Container = styled.div<backgroundprops>`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.coverImage.original});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  background-position: 50% -150px;
  @media (max-width: 480px){
    height:100%;
    background-image: url(${props => props.coverImage.original});
    background-size: 800px;
    background-position: 50% -50px;
  }

`