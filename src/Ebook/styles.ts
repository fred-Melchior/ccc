import { styled } from 'styled-components'
import { Colors, Media } from '../styles'

export const EbookContainer = styled.div`
  padding: 56px 0;
  background-color: ${Colors.green};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${Media.tablet}) {
    .container {
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (max-width: ${Media.mobile}) {
    padding: 16px;

    .container {
      width: 100%;
      flex-direction: column;
      justify-content: center;
    }
  }
`
export const EbookCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0;
    border-radius: 4px;
    width: 60%;
    height: 60%;
    filter: drop-shadow(30px 10px 10px #013507);
  }

  @media (max-width: ${Media.tablet}) {
    img {
      margin-bottom: 40px;
      width: 40%;
      height: 40%;
    }
  }

  @media (max-width: ${Media.mobile}) {
    img {
      margin-bottom: 40px;
      width: 80%;
      height: 80%;
      filter: drop-shadow(10px 20px 10px #013507);
    }
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
