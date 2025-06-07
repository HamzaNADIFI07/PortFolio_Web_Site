import { useState } from 'react'
import Style from './BarreStyles.module.css'
import logo from '../assets/logo/logo.png'

function Barre() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 250;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={Style.barre}>
        <div className={Style.logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={`${Style.button} ${isMenuOpen ? Style.active : ''}`}>
            <button type="button" onClick={() => scrollToSection('nom')}>About</button>
            <button type="button" onClick={() => scrollToSection('skills')}>Skills</button>
            <button type="button" onClick={() => scrollToSection('projects')}>Projects</button>
            <button type="button" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className={Style.menu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Barre
