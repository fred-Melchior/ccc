import { styled } from 'styled-components'
import { Colors } from '../styles'

export const HeaderContainer = styled.div`
  background-color: ${Colors.black};

  div {
    padding: 8px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      width: 96px;
      height: 96px;
    }
  }
`
