import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo1.png'
import LogoNom from '../assets/logo2.png'
import "../assets/styles/header.css"

function Header() {
    return (
      <header>
        <nav className="nav_container">
          <div className='images'>
              <img src={Logo} alt="Logo SportSee" className='logo' />
              <img src={LogoNom} alt="Logo SportSee" />
          </div>
          <div className='navigation'>
            <p>
              Accueil
            </p>
            <p>
              Profil
            </p>
            <p>
              Réglage
            </p>
            <p>
              Communauté
            </p>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header