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
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.coverImage.original});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% -150px;
  @media (max-width: 480px){
    background-image: url(${props => props.coverImage.original});
    background-size: 800px;
    background-position: 50% 0px;
  }

`