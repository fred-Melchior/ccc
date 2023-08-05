import { styled } from 'styled-components'
import { Colors } from '../styles'

export const VideoDiv = styled.div`
  background-color: ${Colors.white};

  .container {
    backgroud-color: transparent;
    display: flex;
    justify-content: center;

    iframe {
      margin: 32px 0;
      border-radius: 8px;
    }
  }
`
