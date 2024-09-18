import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo1.png'
import LogoNom from '../assets/logo2.png'
import "../assets/styles/header.css"

function Header() {
    return (
      <header>
        <nav className="nav_container">
          <div className='images'>
            <NavLink to="/">
              <img src={Logo} alt="Logo SportSee" className='logo' />
              <img src={LogoNom} alt="Logo SportSee" />
            </NavLink>
          </div>
          <div>
            <NavLink className="nav_link" to="/">
              Accueil
            </NavLink>
            <NavLink className="nav_link">
              Profil
            </NavLink>
            <NavLink className="nav_link">
              Réglage
            </NavLink>
            <NavLink className="nav_link">
              Communauté
            </NavLink>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header