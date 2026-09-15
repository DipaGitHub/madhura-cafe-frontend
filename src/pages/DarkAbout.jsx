import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import '../styles/dark.css';

const darkTestimonials = [
  {
    name: 'Steven K. Roberts',
    role: 'From USA',
    quote: '“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'K. Roberts',
    role: 'From UK',
    quote: '“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Jon K. Sun',
    role: 'From Canada',
    quote: '“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

export default function DarkAbout() {
  const [testiIdx, setTestiIdx] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="elegencia-dark-theme">
      {/* 2-Tier Header */}
      <header className="ak-sticky_header">
        <div className="header-top">
          <div className="wrapper">
            <div className="header-logo">
              <Link className="logo" to="/design-2#reservations">reservations</Link>
            </div>

            <div className="center-log">
              <Link to="/design-2" className="center-brand-title">
                <span className="crest">✦</span>
                <span>MADHURA CAFE</span>
              </Link>
            </div>

            <div className="nav-toggles">
              <div className="ak-munu_toggles-top">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="ak-main_header">
          <div className="ak-nav-container">
            <ul className="ak-nav_list">
              <li><Link to="/design-2">Home</Link></li>
              <li><Link to="/design-2/about" className="active">About</Link></li>
              <li><Link to="/design-2#menu">Menu</Link></li>
              <li><Link to="/design-2#specialties">Chef</Link></li>
              <li><Link to="/design-2#showcase">Portfolio</Link></li>
              <li><Link to="/design-2#testimonials">Blog</Link></li>
              <li><a href="#contact">Pages</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero / Page Title Banner with Ambient Glass Table Background */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="about-hero-breadcrumb">
            <Link to="/design-2">Home</Link> / <span>About Us</span>
          </div>
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </section>

      {/* Spacing Gap between Banner and Exquisite Dining */}
      <div className="ak-height-150"></div>

      {/* Section 1: Exquisite Dining Experience Fit for Royalty */}
      <section className="ak-about-bg-color ak-royalty-fullbleed">
        <div className="about-section ak-about-1">
          <div className="about-text-section">
            <div className="ak-section-heading">
              <h2 className="ak-section-title">
                <span className="text-white">Exquisite Dining</span>
                <br />
                <span className="text-white">Experience Fit for</span>
                <br />
                <span className="gold-accent">Royalty</span>
              </h2>
            </div>
            <div className="ak-height-30"></div>
            <p className="about-subtext">
              Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds and leaves you with unforgettable memories.
            </p>
            <div className="ak-height-30"></div>
            <p className="about-subtext">
              Lorem to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that.
            </p>
            <div className="ak-height-50"></div>
            <div className="text-btn">
              <Link className="text-btn1" to="/design-2/about">Discover The Kitchen</Link>
            </div>
          </div>

          <div className="about-media-right">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
              alt="Exquisite Steak Dish"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Testimonials & Client Endorsement */}
      <section id="testimonials" className="ak-testimonial-section">
        <div className="ak-height-150"></div>
        <div className="container ak-testimonial-container">
          {/* Left Decorative Quote Icon */}
          <div className="testimonial-quote-icon">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <path d="M4 68L9 58C23 52 30 38 30 18V0H4V26H8C8 40 2 50 4 68ZM38 68L43 58C57 52 64 38 64 18V0H38V26H42C42 40 36 50 38 68Z" fill="#FFD28D" fillOpacity="0.25"/>
            </svg>
          </div>

          <div>
            <img
              src={darkTestimonials[testiIdx].img}
              className="testimonial-info-img"
              alt={darkTestimonials[testiIdx].name}
            />
            <h6 className="testimonial-info-title">{darkTestimonials[testiIdx].name}</h6>
            <p className="short-title">{darkTestimonials[testiIdx].role}</p>
            <p className="testimonial-info-subtitle">{darkTestimonials[testiIdx].quote}</p>
          </div>

          {/* Right Decorative Quote Icon */}
          <div className="testimonial-quote-icon">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <path d="M4 68L9 58C23 52 30 38 30 18V0H4V26H8C8 40 2 50 4 68ZM38 68L43 58C57 52 64 38 64 18V0H38V26H42C42 40 36 50 38 68Z" fill="#FFD28D" fillOpacity="0.25"/>
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 30 }}>
          <button
            onClick={() => setTestiIdx((prev) => (prev - 1 + darkTestimonials.length) % darkTestimonials.length)}
            className="hero-swiper-btn"
            style={{ width: 48, height: 48 }}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setTestiIdx((prev) => (prev + 1) % darkTestimonials.length)}
            className="hero-swiper-btn"
            style={{ width: 48, height: 48 }}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Section 3: Opening Hours Split Layout */}
      <div className="ak-height-150"></div>
      <div className="ak-bg-secendary ak-opening-fullbleed">
        <div className="opening-hour-grid">
          <div className="opening-hour-img-section">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
              alt="Opening Hours Table Ambiance"
            />
          </div>

          <div className="opening-hour-text-section">
            <div className="ak-section-heading">
              <h2 className="ak-section-title">Opening Hours</h2>
            </div>
            <div className="ak-height-30"></div>
            <p className="opening-hour-subtext">
              Lorem to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that.
            </p>
            <div className="ak-height-30"></div>
            <div className="opening-hour-date">
              <p>SUNDAY - THURSDAY: 11:30AM - 11PM</p>
              <div className="opening-hour-hr"></div>
              <p>FRIDAY & SATURDAY: 11:30AM - 12AM</p>
            </div>
            <div className="ak-height-50"></div>
            <div className="text-btn">
              <a className="text-btn1" href="/design-2#reservations">Reservation</a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Cinematic Video Tour Strip */}
      <div className="ak-height-150"></div>
      <section className="about-video-strip-section">
        <img
          src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1600&q=85"
          alt="Artisanal Noodle Preparation"
          className="about-video-strip-img"
        />
        <div className="about-video-strip-overlay"></div>
        <button className="video-section-btn about-video-play" aria-label="Play video tour">
          <Play size={28} fill="#FFD28D" />
        </button>
      </section>

      {/* Section 5: Elegencia Footer */}
      <footer id="contact" className="ak-footer ak-style-1">
        <div className="container">
          <div className="footer-top-crest">
            <button
              onClick={scrollToTop}
              style={{ background: 'none', border: 'none', color: 'var(--ak-gold)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', gap: 8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="0 0 30 13" fill="none">
                <path d="M28.991 12.2063L14.8322 1L0.67334 12.2063" stroke="#FFD28D" strokeLinecap="round" strokeWidth="2" />
              </svg>
              <span style={{ fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFFFF', fontFamily: 'Cinzel, serif' }}>
                MADHURA CAFE
              </span>
            </button>
          </div>

          <div className="footer-main">
            <div className="footer-eamil-menu">
              <div className="footer-email">
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
              <ul className="footer-menu">
                <li><Link to="/design-2">HOME</Link></li>
                <li><Link to="/design-2/about">ABOUT</Link></li>
                <li><a href="/design-2#menu">MENU</a></li>
                <li><a href="/design-2#specialties">CHEF</a></li>
                <li><a href="#contact">CONTACT</a></li>
              </ul>
            </div>

            <div className="footer-info">
              <div className="footer-info-item">
                <p className="footer-info-subtitle">1-800-915-6271</p>
                <p className="footer-info-subtitle">1-800-915-6271</p>
              </div>
              <div className="footer-info-item">
                <p className="footer-info-subtitle">2726 AK PAPINEAUMONTREAL</p>
                <p className="footer-info-subtitle">H2K 4J6, CANADA</p>
              </div>
              <div className="footer-info-item">
                <p className="footer-info-subtitle">SUNDAY - THURSDAY: 11:30AM - 11PM</p>
                <p className="footer-info-subtitle">FRIDAY & SATURDAY: 11:30AM - 12AM</p>
              </div>
              <div className="footer-btn">
                <a href="/design-2#reservations" className="ak-btn style-5 color-yellow-bg">RESERVATIONS</a>
              </div>
            </div>
          </div>

          <div className="ak-height-70"></div>
          <div className="copy-right-section">
            <p className="text-white text-uppercase" style={{ fontSize: '0.78rem', letterSpacing: '0.14em', opacity: 0.7 }}>
              COPYRIGHT 2025 ALL RIGHT RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
