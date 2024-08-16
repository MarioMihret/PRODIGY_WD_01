import React, { useState, useEffect } from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100; // Adjust as needed

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to run only on mount

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <div className="logo-container">
            <span className="logo-text">Mario</span>
            <div className="logo-accent"></div>
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/sell" className="nav-link">Sell on Etsy</a></li>
            <li><a href="/shops" className="nav-link">Shops</a></li>
            <li><a href="/discover" className="nav-link">Discover</a></li>
            <li><a href="/cart" className="nav-link">Cart</a></li>
            <li><a href="/signin" className="nav-link">Sign in</a></li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;