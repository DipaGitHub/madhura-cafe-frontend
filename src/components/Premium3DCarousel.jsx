import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Premium3DCarousel.css';

const Premium3DCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!items || items.length === 0 || isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [items?.length, isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getCardStyle = (index) => {
    const totalItems = items.length;
    if (totalItems === 0) return {};

    // Determine distance from active index
    let diff = (index - activeIndex) % totalItems;
    if (diff < 0) diff += totalItems;

    // Based on diff, determine position
    // 0: Center, 1: Right, totalItems - 1: Left
    // Everything else: hidden behind

    let transform = 'translate(-50%, -50%) scale(0)';
    let zIndex = 0;
    let opacity = 0;
    let filter = 'brightness(50%)';

    if (diff === 0) {
      // Center
      transform = isHovered ? 'translate(-50%, -50%) scale(1.05) rotateY(0deg)' : 'translate(-50%, -50%) scale(1) rotateY(0deg)';
      zIndex = 10;
      opacity = 1;
      filter = 'brightness(100%)';
    } else if (diff === 1) {
      // Right 1
      transform = 'translate(20%, -50%) scale(0.85) rotateY(-20deg)';
      zIndex = 8;
      opacity = 0.9;
      filter = 'brightness(60%)';
    } else if (diff === 2) {
      // Right 2
      transform = 'translate(80%, -50%) scale(0.7) rotateY(-30deg)';
      zIndex = 6;
      opacity = 0.7;
      filter = 'brightness(30%)';
    } else if (diff === totalItems - 1) {
      // Left 1
      transform = 'translate(-120%, -50%) scale(0.85) rotateY(20deg)';
      zIndex = 8;
      opacity = 0.9;
      filter = 'brightness(60%)';
    } else if (diff === totalItems - 2) {
      // Left 2
      transform = 'translate(-180%, -50%) scale(0.7) rotateY(30deg)';
      zIndex = 6;
      opacity = 0.7;
      filter = 'brightness(30%)';
    } else {
      // Hidden behind
      transform = 'translate(-50%, -50%) scale(0.4) rotateY(0deg)';
      zIndex = 1;
      opacity = 0;
      filter = 'brightness(20%)';
    }

    return {
      transform,
      zIndex,
      opacity,
      filter,
      transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '420px',
      height: '560px',
    };
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="premium-3d-carousel-container">
      <button className="carousel-nav-btn prev" onClick={handlePrev}>
        <ChevronLeft size={24} />
      </button>
      <button className="carousel-nav-btn next" onClick={handleNext}>
        <ChevronRight size={24} />
      </button>
      <div className="premium-3d-carousel-stage">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id + '-' + index}
              className={`carousel-card ${isActive ? 'active' : ''}`}
              style={getCardStyle(index)}
              onMouseEnter={() => isActive && setIsHovered(true)}
              onMouseLeave={() => isActive && setIsHovered(false)}
              onClick={() => {
                if (!isActive) setActiveIndex(index);
              }}
            >
              <img src={item.img} alt={item.title} className="carousel-card-img" />
              <div className="carousel-card-badge">{item.category}</div>

              {/* Netflix style hover details */}
              <div className={`carousel-card-details ${isActive && isHovered ? 'show' : ''}`}>
                <h5 className="carousel-card-title">{item.title}</h5>
                <p className="carousel-card-benefit">{item.benefit}</p>
                <p className="carousel-card-desc">{item.desc}</p>
                <Link to={`/menu-details/${item.id}`} className="carousel-card-btn">
                  View Details &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Premium3DCarousel;
