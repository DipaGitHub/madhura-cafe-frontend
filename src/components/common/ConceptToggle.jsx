import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Home, Info } from 'lucide-react';

export default function ConceptToggle() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const isDark = path.startsWith('/dark');
  const isAbout = path.endsWith('/about');

  const switchToLight = () => {
    navigate(isAbout ? '/about' : '/');
  };

  const switchToDark = () => {
    navigate(isAbout ? '/dark/about' : '/dark');
  };

  const goToHome = () => {
    navigate(isDark ? '/dark' : '/');
  };

  const goToAbout = () => {
    navigate(isDark ? '/dark/about' : '/about');
  };

  return (
    <aside aria-label="Concept Switcher" className="concept-switcher-floating">
      <span className="concept-switcher-label">
        Theme:
      </span>
      <div className="concept-switcher-group">
        <button
          className={`concept-btn ${!isDark ? 'active light-theme-btn' : ''}`}
          onClick={switchToLight}
          title="Light Theme (Cafert Template)"
        >
          <Sun size={14} /> Light
        </button>
        <button
          className={`concept-btn ${isDark ? 'active dark-theme-btn' : ''}`}
          onClick={switchToDark}
          title="Dark Theme (Elegencia Template)"
        >
          <Moon size={14} /> Dark
        </button>
      </div>

      <div className="page-nav-group">
        <button
          className={`page-link-btn ${!isAbout ? 'active' : ''}`}
          onClick={goToHome}
          title="Homepage"
        >
          <Home size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
          Home
        </button>
        <button
          className={`page-link-btn ${isAbout ? 'active' : ''}`}
          onClick={goToAbout}
          title="About Us"
        >
          <Info size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
          About
        </button>
      </div>
    </aside>
  );
}
