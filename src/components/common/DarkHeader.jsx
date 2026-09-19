import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu as MenuIcon } from 'lucide-react';

export default function DarkHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Menu Details', path: '/menu-details' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/design-2';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="ak-sticky_header">
      <div className="header-navbar-wrapper">
        <div className="navbar-container">
          {/* Left: Brand Logo & Title */}
          <Link to="/" className="header-brand-link animate-slide-left">
            <img
              src="/madhura-cafe-logo.png"
              alt="Madhura's Cafe"
              className="dark-header-logo-img"
            />
            <span className="brand-text">Madhura's Cafe</span>
          </Link>

          {/* Right: Desktop Navigation Menu */}
          <nav className="header-desktop-nav">
            <ul className="ak-nav_list">
              {navLinks.map((link, idx) => (
                <li
                  key={link.name}
                  className="animate-slide-right-item"
                  style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
                >
                  <Link
                    to={link.path}
                    className={isActive(link.path) ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="nav-toggles">
            <button
              className="dark-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} color="#FFD28D" /> : <MenuIcon size={26} color="#FFD28D" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="dark-mobile-drawer">
          <ul className="dark-mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={isActive(link.path) ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
