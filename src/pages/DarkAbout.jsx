import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { apiUrl, imageUrl } from '../config/api';
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
  const [aboutData, setAboutData] = useState(null);

  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [openingHours, setOpeningHours] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAbout = async () => {
      try {
        const res = await fetch(apiUrl('/api/aboutUs'));
        const result = await res.json();
        if (result.success && result.data) {
          setAboutData(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch about us data:', err);
      }
    };

    const fetchGallery = async () => {
      try {
        const res = await fetch(apiUrl('/api/gallery'));
        const result = await res.json();
        if (result.success && result.data) {
          setGalleryImages(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch gallery:', err);
      }
    };

    const fetchOpeningHours = async () => {
      try {
        const res = await fetch(apiUrl('/api/openingHours'));
        const result = await res.json();
        if (result.success && result.data) {
          setOpeningHours(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch opening hours:', err);
      }
    };

    fetchAbout();
    fetchGallery();
    fetchOpeningHours();
  }, []);

  let displayGalleryImages = [...galleryImages];
  if (displayGalleryImages.length > 0) {
    while (displayGalleryImages.length < 6) {
      displayGalleryImages = [...displayGalleryImages, ...galleryImages];
    }
  }

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
  }, [aboutData, galleryImages, openingHours]);

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
                {aboutData ? aboutData.title : (
                  <>
                    <span className="text-white">Our Ayurvedic</span>
                    <br />
                    <span className="gold-accent">Heritage</span>
                  </>
                )}
              </h2>
            </div>
            <div className="ak-height-30"></div>
            <img src="/images/patterns/lotus-divider.svg" alt="Lotus" style={{ width: '80px', marginBottom: '20px' }} />
            
            {aboutData ? (
              <p className="about-subtext" style={{ color: 'var(--ak-text-muted)', whiteSpace: 'pre-wrap' }}>
                {aboutData.description}
              </p>
            ) : (
              <>
                <p className="about-subtext" style={{ color: 'var(--ak-text-muted)' }}>
                  Welcome to Madhura's Cafe, where ancient Vedic wisdom meets modern culinary artistry. We believe that food is not just nourishment for the body, but medicine for the soul.
                </p>
                <div className="ak-height-30"></div>
                <p className="about-subtext" style={{ color: 'var(--ak-text-muted)' }}>
                  Rooted in deep Ayurvedic traditions, our kitchen exclusively uses pristine sattvic ingredients, stone-ground heritage millets, and therapeutic botanicals to restore your inner balance and vitality.
                </p>
              </>
            )}
            
            <div className="ak-height-50"></div>
            <div className="text-btn">
              <Link className="text-btn1" to="/menu">Discover Our Menu</Link>
            </div>
          </div>

          <div className="about-media-right ak-premium-zoom-container ak-reveal-left">
            <img
              src={aboutData?.image_url ? imageUrl(aboutData.image_url) : "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=85"}
              alt={aboutData?.title || "Traditional Indian Culinary Preparation"}
              className="ak-premium-zoom-img"
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
              src={openingHours?.image_url ? (openingHours.image_url.startsWith('http') ? openingHours.image_url : imageUrl(openingHours.image_url)) : "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"}
              alt={openingHours?.title || "Opening Hours Table Ambiance"}
            />
          </div>

          <div className="opening-hour-text-section ak-reveal-right">
            <div className="ak-section-heading">
              <h2 className="ak-section-title">{openingHours?.title || "Opening Hours"}</h2>
            </div>
            <div className="ak-height-30"></div>
            <p className="opening-hour-subtext">
              {openingHours?.description || "Experience the tranquility and warmth of traditional Indian wellness hospitality throughout our open hours."}
            </p>
            <div className="ak-height-30"></div>
            <div className="opening-hour-date">
              <p>{openingHours?.hours_1 || "SUNDAY - THURSDAY: 11:30AM - 11PM"}</p>
              {openingHours?.hours_2 && (
                <>
                  <div className="opening-hour-hr"></div>
                  <p>{openingHours.hours_2}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="ak-height-150"></div>

      {/* Dynamic Gallery Section (Slider) */}
      {displayGalleryImages.length > 0 && (
        <section className="ak-gallery-section">
          <div className="container">
            <div className="ak-gallery-heading-wrap ak-reveal">
              <div className="ak-gallery-ornament">
                <div className="ak-gallery-ornament-line"></div>
                <div className="ak-gallery-ornament-dot"></div>
                <div className="ak-gallery-ornament-line right"></div>
              </div>
              <div className="ak-section-subtitle">Moments & Memories</div>
              <h2 className="ak-section-title">Cafe Gallery</h2>
              <img src="/images/patterns/lotus-divider.svg" alt="Lotus Divider" className="ak-lotus-divider" style={{ marginTop: '14px', width: '60px', opacity: 0.6 }} />
            </div>
          </div>

          <div className="ak-gallery-slider-wrap ak-reveal-fade" style={{ animationDelay: '0.2s' }}>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20 },
                992: { slidesPerView: 5, spaceBetween: 30 },
                1400: { slidesPerView: 5, spaceBetween: 30 }
              }}
              className="gallery-swiper"
            >
              {displayGalleryImages.map((img, idx) => (
                <SwiperSlide key={`${img.id}-${idx}`}>
                  <div
                    className="ak-gallery-slide-item"
                    onClick={() => setSelectedGalleryImage(img)}
                  >
                    <img
                      src={imageUrl(img.image)}
                      alt={img.image_title || 'Gallery Image'}
                    />
                    <div className="ak-gallery-icon-view">
                      <Star size={20} />
                    </div>
                    <div className="ak-gallery-overlay">
                      {img.image_title && (
                        <div className="ak-gallery-overlay-title">{img.image_title}</div>
                      )}
                      {img.image_type && (
                        <div className="ak-gallery-overlay-type">{img.image_type}</div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      <div className="ak-height-100"></div>

      <DarkFooter />

      {/* Lightbox Overlay */}
      <div 
        className={`ak-lightbox-overlay ${selectedGalleryImage ? 'active' : ''}`}
        onClick={() => setSelectedGalleryImage(null)}
      >
        {selectedGalleryImage && (
          <div className="ak-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="ak-lightbox-close"
              onClick={() => setSelectedGalleryImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <img 
              src={imageUrl(selectedGalleryImage.image)} 
              alt={selectedGalleryImage.image_title || 'Gallery Image'} 
              className="ak-lightbox-img"
            />
            {(selectedGalleryImage.image_title || selectedGalleryImage.image_type) && (
              <div className="ak-lightbox-info">
                {selectedGalleryImage.image_title && (
                  <h4 className="ak-lightbox-title">{selectedGalleryImage.image_title}</h4>
                )}
                {selectedGalleryImage.image_type && (
                  <span className="ak-lightbox-type">{selectedGalleryImage.image_type}</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
