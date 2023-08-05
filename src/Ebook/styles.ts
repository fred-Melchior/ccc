import { styled } from 'styled-components'
import { Colors } from '../styles'

export const EbookContainer = styled.div`
  padding: 56px 0;
  background-color: ${Colors.green};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const EbookCover = styled.div`
  img {
    border-radius: 4px;
    width: 60%;
    height: 60%;
    filter: drop-shadow(30px 10px 10px #013507);
  }
`
export const EbookLink = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  p {
    font-size: 24px;
    margin: 40px 0;
  }

  h3 {
    font-size: 32px;
  }

  button {
    font-weight: bold;
    text-transform: uppercase;
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    border: 2px solid transparent;
    background-color: ${Colors.white};

    &:hover {
      filter: drop-shadow(30px 10px 8px #013507);
    }
  }
`
