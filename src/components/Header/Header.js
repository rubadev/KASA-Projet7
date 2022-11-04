import {Link} from 'react-router-dom'

import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt=''/>
      <nav>
        <Link to ="/" className='accueil'>Accueil</Link>
        <Link to ="/propos" className='propose'>A Propos</Link>
      </nav>
    </div>
  )
}

export default Header
