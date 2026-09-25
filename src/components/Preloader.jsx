import React from 'react';
import './Preloader.css';

const Preloader = ({ isLoading }) => {
  return (
    <div className={`madhura-preloader-overlay ${!isLoading ? 'fade-out' : ''}`}>
      <div className="madhura-preloader-content">
        <div className="madhura-logo-wrapper">
          {/* Animated SVG Ring */}
          <svg className="madhura-loader-ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <img src="/madhura-cafe-logo.png" alt="Madhura's Cafe" className="madhura-preloader-logo" />
        </div>
        <div className="madhura-preloader-text">
          <span>Loading</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
