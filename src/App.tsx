import { GlobalStyle } from './styles'
import Header from './Header'
import Ebook from './Ebook'
import Posts from './Posts'
import Footer from './Footer'
import Videos from './Videos'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Videos />
      <Ebook />
      <Posts />
      <Footer />
    </>
  )
}

export default App
