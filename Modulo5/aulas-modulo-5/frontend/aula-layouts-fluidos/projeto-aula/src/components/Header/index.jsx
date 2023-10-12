import Logo from '../../assets/logo.svg'
import Menu from '../Menu'
import './style.css'

function Header() {
  return (
    <header className='header'>
      <img className='logo' src={Logo} alt="logo" />
      <Menu />
    </header>
  )
}

export default Header