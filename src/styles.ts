import { createGlobalStyle } from 'styled-components'

export const Colors = {
  black: '#000',
  white: '#F9F1E8',
  green: 'rgba(25, 182, 80, 1)'
}

export const Media = {
  tablet: '1023px',
  mobile: '767px'
}

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: arial;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: ${Media.tablet}) {
  .container {
    max-width: 768px;
  }
}

@media (max-width: 767px) {
  * {
    overflow-x: hidden;
  }

  .container {
    max-width: 425px;
  }
}

button {
  cursor: pointer;

  &:hover {
    border: 2px solid ${Colors.white};
  }
}
`
