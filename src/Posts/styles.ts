import { styled } from 'styled-components'
import { Colors, Media } from '../styles'

export const PostContainer = styled.div`
  padding: 40px 0;

  background-color: ${Colors.white};

  .container {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: ${Media.tablet}) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: ${Media.mobile}) {
    padding: 8px 0;

    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const CardPost = styled.div`
  padding: 4px 8px 16px;
  background-color: ${Colors.black};
  color: ${Colors.white};
  border-radius: 4px;
  width: 250px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 240px;
    width: 240px;
    object-fit: cover;
  }

  p {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 24px 0 40px;
  }

  button {
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    border: 2px solid transparent;
    font-size: 18px;
    color: ${Colors.white};
    background-color: ${Colors.green};

    &:hover {
      border: 2px solid ${Colors.white};
    }
  }

  @media (max-width: ${Media.tablet}) {
    width: 200px;

    img {
      height: 190px;
      width: 190px;
    }
  }

  @media (max-width: ${Media.mobile}) {
    padding: 16px;
    width: 100%;

    img {
      height: 240px;
      width: 100%;
      border-radius: 4px;
    }

    button {
      font-size: 24px;
    }
  }
`
