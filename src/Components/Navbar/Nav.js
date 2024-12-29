import React, { useState } from 'react'
import './Nav.css'


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle click to open/close menu and close menu after clicking a link
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='navbar'>
      <div className="logo">
        <a href="/">PORTFOLIO</a>
      </div>


      {/* Hamburger Icon */}
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>


      <nav className={`nav-item ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </nav>
    </header>

  )
}

export default Nav