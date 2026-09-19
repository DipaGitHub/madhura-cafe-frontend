import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Setup intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(
      '.ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="elegencia-dark-theme">
      {/* 2-Tier Header */}
      <DarkHeader />

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

      {/* Section 1: Our Ayurvedic Heritage */}
      <section className="ak-about-bg-color ak-royalty-fullbleed">
        <div className="about-section ak-about-1">
          <div className="about-text-section ak-reveal-right">
            <div className="ak-section-heading">
              <div className="ak-section-subtitle">Roots & Traditions</div>
              <h2 className="ak-section-title">
                <span className="text-white">Our Ayurvedic</span>
                <br />
                <span className="gold-accent">Heritage</span>
              </h2>
            </div>
            <div className="ak-height-30"></div>
            <img src="/images/patterns/lotus-divider.svg" alt="Lotus" style={{ width: '80px', marginBottom: '20px' }} />
            <p className="about-subtext" style={{ color: 'var(--ak-text-muted)' }}>
              Welcome to Madhura's Cafe, where ancient Vedic wisdom meets modern culinary artistry. We believe that food is not just nourishment for the body, but medicine for the soul.
            </p>
            <div className="ak-height-30"></div>
            <p className="about-subtext" style={{ color: 'var(--ak-text-muted)' }}>
              Rooted in deep Ayurvedic traditions, our kitchen exclusively uses pristine sattvic ingredients, stone-ground heritage millets, and therapeutic botanicals to restore your inner balance and vitality.
            </p>
            <div className="ak-height-50"></div>
            <div className="text-btn">
              <Link className="text-btn1" to="/menu">Discover Our Menu</Link>
            </div>
          </div>

          <div className="about-media-right ak-parallax-img-wrap ak-reveal-left">
            <img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=85"
              alt="Traditional Indian Culinary Preparation"
              className="ak-parallax-img"
              style={{ transform: 'scale(1.05)' }}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Testimonials & Client Endorsement */}
      <section id="testimonials" className="ak-testimonial-section ak-reveal-scale">
        <div className="ak-height-150"></div>
        <div className="container ak-testimonial-container" style={{ position: 'relative', border: '1px solid var(--ak-border-gold)', padding: '40px', borderRadius: '8px', background: 'rgba(10, 13, 14, 0.4)' }}>
          {/* Left Decorative Quote Icon */}
          <div className="testimonial-quote-icon">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <path d="M4 68L9 58C23 52 30 38 30 18V0H4V26H8C8 40 2 50 4 68ZM38 68L43 58C57 52 64 38 64 18V0H38V26H42C42 40 36 50 38 68Z" fill="#FFD28D" fillOpacity="0.25"/>
            </svg>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{ nextEl: '.about-testi-next', prevEl: '.about-testi-prev' }}
            loop={true}
          >
            {darkTestimonials.map((testi, idx) => (
              <SwiperSlide key={idx}>
                <div className="ak-reveal-fade in-view">
                  <img
                    src={testi.img}
                    className="testimonial-info-img"
                    alt={testi.name}
                  />
                  <h6 className="testimonial-info-title">{testi.name}</h6>
                  <p className="short-title">{testi.role}</p>
                  <p className="testimonial-info-subtitle">{testi.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Decorative Quote Icon */}
          <div className="testimonial-quote-icon" style={{ position: 'absolute', right: 0, top: '40px' }}>
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <path d="M4 68L9 58C23 52 30 38 30 18V0H4V26H8C8 40 2 50 4 68ZM38 68L43 58C57 52 64 38 64 18V0H38V26H42C42 40 36 50 38 68Z" fill="#FFD28D" fillOpacity="0.25"/>
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 30 }}>
          <button
            className="hero-swiper-btn about-testi-prev"
            style={{ width: 48, height: 48 }}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="hero-swiper-btn about-testi-next"
            style={{ width: 48, height: 48 }}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Section 3: Opening Hours Split Layout */}
      <div className="ak-height-150"></div>
      <div className="ak-bg-secendary ak-opening-fullbleed ak-reveal-fade">
        <div className="opening-hour-grid">
          <div className="opening-hour-img-section">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
              alt="Opening Hours Table Ambiance"
            />
          </div>

          <div className="opening-hour-text-section ak-reveal-right">
            <div className="ak-section-heading">
              <h2 className="ak-section-title">Opening Hours</h2>
            </div>
            <div className="ak-height-30"></div>
            <p className="opening-hour-subtext">
              Experience the tranquility and warmth of traditional Indian wellness hospitality throughout our open hours.
            </p>
            <div className="ak-height-30"></div>
            <div className="opening-hour-date">
              <p>SUNDAY - THURSDAY: 11:30AM - 11PM</p>
              <div className="opening-hour-hr"></div>
              <p>FRIDAY & SATURDAY: 11:30AM - 12AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Cinematic Video Tour Strip */}
      <div className="ak-height-150"></div>
      <section className="about-video-strip-section ak-reveal-scale">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
          alt="Ayurvedic Spice Preparation"
          className="about-video-strip-img"
        />
        <div className="about-video-strip-overlay" style={{ background: 'linear-gradient(rgba(10,13,14,0.4), rgba(10,13,14,0.7))' }}></div>
        <button className="video-section-btn about-video-play" aria-label="Play video tour">
          <Play size={28} fill="#FFD28D" />
        </button>
      </section>

      {/* Section 5: Elegencia Footer */}
      <DarkFooter />
    </div>
  );
}
