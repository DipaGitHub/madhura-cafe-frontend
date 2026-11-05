import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu as MenuIcon, ChevronDown } from 'lucide-react';
import { apiUrl, imageUrl } from '../../config/api';

export default function DarkHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [menuPdfUrl, setMenuPdfUrl] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const res = await fetch(apiUrl('/api/aboutUs'));
        const json = await res.json();
        if (json.success && json.data && json.data.menu_pdf_url) {
          setMenuPdfUrl(imageUrl(json.data.menu_pdf_url));
        }
      } catch (e) {
        console.error('Failed to fetch menu pdf:', e);
      }
    };
    fetchPdf();
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
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
              src={`${import.meta.env.BASE_URL}madhura-cafe-logo.png`}
              alt="Madhura's Cafe"
              className="dark-header-logo-img"
            />
            <span className="brand-text">Madhura's Cafe</span>
          </Link>

          {/* Right: Desktop Navigation Menu */}
          <nav className="header-desktop-nav">
            <ul className="ak-nav_list">
              {navLinks.map((link, idx) => (
                link.name === 'About' ? (
                  <li
                    key={link.name}
                    className="animate-slide-right-item dark-nav-has-dropdown"
                    style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <div className="dark-nav-dropdown-trigger">
                      <Link
                        to={link.path}
                        className={isActive(link.path) ? 'active' : ''}
                      >
                        {link.name}
                      </Link>
                      <ChevronDown size={14} className={`dark-nav-chevron ${aboutDropdownOpen ? 'open' : ''}`} />
                    </div>

                    <ul className={`dark-nav-dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
                      <li>
                        <Link
                          to="/about"
                          className={location.pathname === '/about' ? 'active' : ''}
                          onClick={() => setAboutDropdownOpen(false)}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about/water-of-india"
                          className={location.pathname === '/about/water-of-india' ? 'active' : ''}
                          onClick={() => setAboutDropdownOpen(false)}
                        >
                          Water of India
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
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
                )
              ))}
            </ul>
          </nav>

          {/* Explore Menu Button (Desktop) */}
          <div className="header-explore-btn-container hidden md:block" style={{ marginLeft: '20px' }}>
            {menuPdfUrl ? (
              <a href={menuPdfUrl} target="_blank" rel="noopener noreferrer" className="premium-btn" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                Explore Menu
              </a>
            ) : (
              <Link to="/menu" className="premium-btn" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
                Explore Menu
              </Link>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <div className="nav-toggles">
            {menuPdfUrl ? (
              <a href={menuPdfUrl} target="_blank" rel="noopener noreferrer" className="premium-btn explore-menu-mobile" style={{ padding: '6px 12px', fontSize: '0.7rem', marginRight: '10px' }}>
                Menu
              </a>
            ) : (
              <Link to="/menu" className="premium-btn explore-menu-mobile" style={{ padding: '6px 12px', fontSize: '0.7rem', marginRight: '10px' }}>
                Menu
              </Link>
            )}
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
              link.name === 'About' ? (
                <li key={link.name} className="dark-mobile-dropdown-item">
                  <div
                    className="dark-mobile-dropdown-header"
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  >
                    <span className={isActive(link.path) ? 'active' : ''}>
                      {link.name}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`dark-mobile-chevron ${mobileAboutOpen ? 'rotate' : ''}`}
                    />
                  </div>
                  {mobileAboutOpen && (
                    <ul className="dark-mobile-subnav-list">
                      <li>
                        <Link
                          to="/about"
                          className={location.pathname === '/about' ? 'active' : ''}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about/water-of-india"
                          className={location.pathname === '/about/water-of-india' ? 'active' : ''}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Water of India
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={isActive(link.path) ? 'active' : ''}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
