import logo from '../assets/semfundo-logo-cuidando.png'
import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logo} alt="logo" />
      </div>
    </HeaderContainer>
  )
}

export default Header
