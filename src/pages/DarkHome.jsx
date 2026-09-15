import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, ArrowUp, Star } from 'lucide-react';
import '../styles/dark.css';

const foodShowcaseItems = [
  { title: 'Spaghetti Carbonara', category: 'Desserts', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80' },
  { title: 'Spaghetti Carbonara', category: 'Desserts', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
  { title: 'Spaghetti Carbonara', category: 'Desserts', img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80' },
  { title: 'Spaghetti Carbonara', category: 'Desserts', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80' },
];

const appetizersData = [
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&q=80' },
  { name: 'SPAGHETTI ALLA CARBONARA', sub: 'Spaghetti alla Carbonara', price: '$49', extra: 'Extra free juice', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80' },
];

const darkTestimonials = [
  {
    name: 'Steven K. Roberts',
    role: 'From USA',
    quote: '“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'K. Roberts',
    role: 'From ',
    quote: '“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Jon K. Sun',
    role: 'From ',
    quote: '“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

const heroSlides = [
  {
    title1: 'Elegance Retreat',
    title2: 'Restaurant',
    text: 'Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds and leaves you with',
    btnText: 'View More',
    btnLink: '#reservations'
  },
  {
    title1: 'Royal Flavors',
    title2: 'Experience',
    text: 'Immerse yourself in authentic gourmet delicacies prepared by master chefs, blending timeless recipes with a rich contemporary dining atmosphere.',
    btnText: 'Explore Menu',
    btnLink: '#menu'
  },
  {
    title1: 'Artisanal Craft',
    title2: 'Delicacies',
    text: 'Every dish is a masterpiece designed to captivate your senses, featuring hand-selected organic ingredients and curated spice blends.',
    btnText: 'Book A Table',
    btnLink: '#reservations'
  }
];

export default function DarkHome() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [testiIdx, setTestiIdx] = useState(0);
  const [showcaseIdx, setShowcaseIdx] = useState(0);
  const [guests, setGuests] = useState('One');
  const [bookingTime, setBookingTime] = useState('03:45');
  const [bookingDate, setBookingDate] = useState('2023-07-22');

  const prevHeroSlide = () => {
    setHeroIdx((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextHeroSlide = () => {
    setHeroIdx((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

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
              <a className="logo" href="#reservations">reservations</a>
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

            <ul className="top-main-menu" style={{ display: 'none' }}>
              <li className="top-main-menu-li"><Link to="/design-2">Home</Link></li>
              <li className="top-main-menu-li"><Link to="/design-2/about">About</Link></li>
              <li className="top-main-menu-li"><a href="#menu">Menu</a></li>
              <li className="top-main-menu-li"><a href="#specialties">Chef</a></li>
              <li className="top-main-menu-li"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="ak-main_header">
          <div className="ak-nav-container">
            <ul className="ak-nav_list">
              <li><Link to="/design-2" className="active">Home</Link></li>
              <li><Link to="/design-2/about">About</Link></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#specialties">Chef</a></li>
              <li><a href="#showcase">Portfolio</a></li>
              <li><a href="#testimonials">Blog</a></li>
              <li><a href="#contact">Pages</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="ak-hero-wrapper-section">
        <div className="ak-hero ak-style1">
          <div className="ak-hero-grid">
            <div className="slider-info">
              <div className="hero-slide-content" key={heroIdx}>
                <div className="hero-title">
                  <h1 className="hero-main-title">{heroSlides[heroIdx].title1}</h1>
                  <h1 className="hero-main-title-1">{heroSlides[heroIdx].title2}</h1>
                </div>
                <div className="ak-height-30"></div>
                <p className="hero-sub-text">
                  {heroSlides[heroIdx].text}
                </p>
                <div className="ak-height-50"></div>
                <a className="ak-btn style-5 color-yellow-bg" href={heroSlides[heroIdx].btnLink}>
                  {heroSlides[heroIdx].btnText}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Middle Navigation Controls */}
          <div className="ak-swiper-controll-hero-center">
            <button className="hero-swiper-btn" onClick={prevHeroSlide} aria-label="Previous Slide">
              <ChevronLeft size={22} />
            </button>
            <button className="hero-swiper-btn" onClick={nextHeroSlide} aria-label="Next Slide">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* Spacing before Marquee */}
      <div className="ak-height-100"></div>

      {/* Marquee Section */}
      <div className="ak-moving-section-wrap text-uppercase">
        <div className="ak-moving-section-in">
          <div className="ak-moving-section">
            <h2>Embark on a gastronomic adventure <span>guided our by exquisite dishes</span></h2>
          </div>
          <div className="ak-moving-section">
            <h2>Embark on a gastronomic adventure <span>guided our by exquisite dishes</span></h2>
          </div>
        </div>
      </div>

      {/* Spacing after Marquee */}
      <div className="ak-height-150"></div>

      {/* About Section: Exquisite Dining Experience Fit for Royalty */}
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

      {/* Opening Hours */}
      <div className="ak-height-150"></div>
      <div className="ak-bg-secendary ak-opening-fullbleed">
        <div className="opening-hour-grid">
          <div className="opening-hour-img-section">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
              alt="Opening Hours Ambiance"
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
              <a className="text-btn1" href="#reservations">Reservation</a>
            </div>
          </div>
        </div>
      </div>

      {/* Food Items Showcase Slider */}
      <section id="showcase">
        <div className="ak-height-150"></div>
        <div className="container-fluid">
          <div className="ak-section-heading ak-type-1">
            <div className="ak-section-subtitle">Food Showcase</div>
            <h2 className="ak-section-title">Food Items</h2>
          </div>

          <div className="ak-slider-food-grid">
            {foodShowcaseItems.map((item, idx) => (
              <div key={idx} className="ak-food-card">
                <img src={item.img} alt={item.title} />
                <div className="ak-food-card-info">
                  <h5>{item.title}</h5>
                  <div className="subtitle">{item.category}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Controls */}
          <div className="ak-slider-nav-row">
            <button className="hero-swiper-btn" style={{ width: 44, height: 44 }} aria-label="Previous Showcase">
              <ChevronLeft size={20} />
            </button>
            <div className="ak-slider-dots">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dot) => (
                <span key={dot} className={`ak-slider-dot ${dot === showcaseIdx ? 'active' : ''}`} />
              ))}
            </div>
            <button className="hero-swiper-btn" style={{ width: 44, height: 44 }} aria-label="Next Showcase">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Appetizers Menu Section with Hover Preview Bubble */}
      <section id="menu">
        <div className="ak-height-150"></div>
        <div className="container">
          <div className="ak-section-heading ak-type-1">
            <div className="ak-section-subtitle">Appetizers</div>
            <h2 className="ak-section-title">Appetizers</h2>
          </div>

          <div className="ak-menu-list">
            {appetizersData.map((item, idx) => (
              <div key={idx} className="ak-menu-list-section-1">
                {/* Hover Reveal Circular Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="ak-menu-hover-thumb"
                />

                <div className="food-menu style-1">
                  <div className="food-menu-section-1">
                    <div className="food-menu-title">
                      <p>{item.name}</p>
                    </div>
                    <div className="food-menu-hr-wrap">
                      <div className="food-menu-hr style-1"></div>
                    </div>
                    <div className="food-menu-price">
                      <p>{item.price}</p>
                    </div>
                  </div>
                  <div className="food-menu-section-2">
                    <div><p>{item.sub}</p></div>
                    <div style={{ color: 'var(--ak-gold)' }}><p>{item.extra}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ak-height-50"></div>
          <div style={{ textAlign: 'center' }}>
            <div className="text-btn">
              <a className="text-btn1" href="#menu">View more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialties Section */}
      <section id="specialties">
        <div className="ak-height-150"></div>
        <div className="container">
          <div className="ak-best-item">
            <div className="best-item-section-1">
              <div className="ak-section-heading">
                <h2 className="ak-section-title">
                  <span className="text-white">Our</span>
                  <br />
                  <span className="gold-accent">Specialties</span>
                </h2>
              </div>
              <div className="ak-height-30"></div>
              <p>
                Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At, we strive to create a gastronomic haven that tantalizes your taste buds.
              </p>
              <div className="ak-height-50"></div>
              <div className="img-one">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
                  alt="Specialty dish 1"
                />
              </div>
            </div>

            {/* Vertical Star Ornament */}
            <div className="best-item-section-2">
              <Star size={20} fill="#FFD28D" color="#FFD28D" />
              <div style={{ width: 1, height: 80, background: 'rgba(255,210,141,0.3)' }}></div>
              <Star size={20} fill="#FFD28D" color="#FFD28D" />
            </div>

            <div className="best-item-section-3">
              <div className="img-two">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                  alt="Chef Crafting Experience"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container">
        <div className="ak-height-150"></div>
        <div className="testimonial-section">
          {/* Left Decorative Quote Icon */}
          <div className="testimonial-quote-icon">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <path d="M22 42H8C8 28 14 18 26 12L21 2C7 8 0 22 0 42V68H26V42H22ZM56 42H42C42 28 48 18 60 12L55 2C41 8 34 22 34 42V68H60V42H56Z" fill="#FFD28D" fillOpacity="0.25"/>
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

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24 }}>
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

      {/* Booking / Reservations */}
      <div id="reservations" className="ak-height-150"></div>
      <div className="ak-booking-system">
        <div className="container">
          <div className="ak-booking-grid">
            <div className="booking-left-media">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Table Reservation Mood"
              />
              <button className="video-section-btn" aria-label="Play video tour">
                <Play size={28} fill="#FFD28D" />
              </button>
            </div>

            <div>
              <div className="ak-section-heading">
                <div className="ak-section-subtitle">Reservations</div>
                <h2 className="ak-section-title">Reservations</h2>
              </div>
              <div className="ak-height-30"></div>

              <div className="booking-system-form">
                <form onSubmit={(e) => { e.preventDefault(); alert('Reservation submitted for Madhura Cafe!'); }}>
                  <select
                    className="ak-form-select"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>

                  <div className="ak-form-time-date">
                    <input
                      className="time-input"
                      type="time"
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                    />
                    <input
                      className="date-input"
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />
                  </div>

                  <div className="ak-height-30"></div>
                  <div className="ak-btn style-5">
                    <button type="submit">Reservations</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
              <div className="footer-menu">
                <ul>
                  <li><Link to="/design-2">Home</Link></li>
                  <li><Link to="/design-2/about">About</Link></li>
                  <li><a href="#menu">Menu</a></li>
                  <li><a href="#specialties">Chef</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-info">
              <div>
                <a href="tel:1-800-915-6271">1-800-915-6271</a><br />
                <a href="tel:1-800-915-6271">1-800-915-6271</a>
              </div>
              <div>
                <p>2726 Av. PapineauMontreal<br />H2K 4J6, Canada</p>
              </div>
              <div>
                <p>SUNDAY - THURSDAY: 11:30AM - 11PM</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '6px 0' }}></div>
                <p>FRIDAY & SATURDAY: 11:30AM - 12AM</p>
              </div>
              <div>
                <a className="footer-btn-white" href="#reservations">Reservations</a>
              </div>
            </div>
          </div>

          <div className="copy-right-section">
            <p className="text-uppercase">Copyright 2026 Madhura Cafe. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
