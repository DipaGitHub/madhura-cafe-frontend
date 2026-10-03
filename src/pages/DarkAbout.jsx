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
  const [founders, setFounders] = useState([]);

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

    const fetchFounders = async () => {
      try {
        const res = await fetch(apiUrl('/api/founders'));
        const result = await res.json();
        if (result.success && result.data) {
          setFounders(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch founders:', err);
      }
    };

    fetchAbout();
    fetchGallery();
    fetchFounders();
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
  }, [aboutData, galleryImages, founders]);

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
              <div 
                className="about-subtext" 
                style={{ color: 'var(--ak-text-muted)' }}
                dangerouslySetInnerHTML={{ __html: aboutData.description }}
              />
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

      {/* Section 2: Meet Our Founders */}
      {founders && founders.length > 0 && (
        <section className="ak-founders-section ak-reveal-scale">
          <div className="ak-height-150"></div>
          <div className="container">
            <div className="ak-section-heading" style={{ textAlign: 'center' }}>
              <div className="ak-section-subtitle">OUR LEADERSHIP</div>
              <h2 className="ak-section-title">Meet Our Founders</h2>
              <img src="/images/patterns/lotus-divider.svg" alt="Lotus Divider" className="ak-lotus-divider" style={{ marginTop: '14px', width: '60px', opacity: 0.6, margin: '14px auto 0' }} />
            </div>
            <div className="ak-height-50"></div>
            
            <div className="founders-list">
              {founders.map((founder, index) => (
                <div key={founder.id || index} className={`founder-card ${index % 2 !== 0 ? 'row-reverse' : ''}`}>
                  <div className="founder-image-col ak-reveal-left">
                    <div className="founder-image-wrapper">
                      <img 
                        src={founder.image_url ? imageUrl(founder.image_url) : "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"} 
                        alt={founder.name} 
                        className="founder-img"
                      />
                      {founder.image_quote && (
                        <div className="founder-quote-overlay">
                          <p>"{founder.image_quote}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="founder-content-col ak-reveal-right">
                    <h3 className="founder-name">{founder.name}</h3>
                    <div className="founder-designation">{founder.designation}</div>
                      <div 
                        className="founder-description-html" 
                        style={{ color: 'var(--ak-text-muted)' }}
                        dangerouslySetInnerHTML={{ __html: founder.description }} 
                      />
                    {founder.contact_info && (
                      <div className="founder-contact">
                        <span className="contact-icon" style={{ color: 'var(--ak-gold)', marginRight: '8px' }}>📞</span>
                        <a href={`tel:${founder.contact_info}`} style={{ color: 'var(--ak-text-white)' }}>{founder.contact_info}</a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
