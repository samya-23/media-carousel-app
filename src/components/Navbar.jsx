import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Codepackers Software Solutions</div>

        <nav className="navbar-links">
          <a href="#capabilities">Capabilities</a>
          <a href="#analytics">Analytics</a>
          <a href="#form">Form</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#analytics" onClick={closeMenu}>Analytics</a>
          <a href="#form" onClick={closeMenu}>Form</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
