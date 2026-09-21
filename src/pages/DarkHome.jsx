import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, ArrowUp, Star } from 'lucide-react';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { apiUrl, imageUrl } from '../config/api';
import '../styles/dark.css';

const fallbackFoodShowcaseItems = [
  {
    id: 'ashwagandha-latte',
    title: 'Ashwagandha Golden Elixir',
    category: 'Immunity & Rejuvenation',
    benefit: 'Reduces cortisol, boosts vitality & natural calmness',
    desc: 'Pure A2 organic milk brewed with therapeutic Ashwagandha, organic turmeric, cardamom, and wild forest honey.',
    img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'moringa-khichdi',
    title: 'Moringa & Millet Khichdi',
    category: 'Detox & Digestive Health',
    benefit: 'Nutrient-dense superfood, eases digestion & restores gut flora',
    desc: 'Ancient foxtail millet and sprouted moong slow-cooked with drumstick leaves, cumin, and fragrant desi ghee.',
    img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
];

// Fallback data removed - now fully dynamic

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

const defaultHeroSlides = [
  {
    subtitle: "Madhura's Cafe Offers You",
    title: 'Traditional Indian Wellness',
    text: 'Ancient Vedic culinary wisdom crafted with immunity-boosting Ayurvedic herbs and pure desi ghee in a tranquil ambience.',
    bg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
    btn1: 'Explore Menu',
    btn2: 'Book A Table'
  },
  {
    subtitle: "Pure & Wholesome Delicacies",
    title: 'Fresh & Authentic Meals',
    text: 'Wholesome Sattvic delicacies and stone-ground millet preparations freshly made for optimal vitality and taste.',
    bg: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80',
    btn1: 'Explore Menu',
    btn2: 'Book A Table'
  },
  {
    subtitle: "Artisanal Cafe Experience",
    title: 'Crafted With Pure Devotion',
    text: 'Authentic Indian recipes free from artificial additives, enriched with therapeutic botanicals and heritage traditions.',
    bg: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80',
    btn1: 'Explore Menu',
    btn2: 'Book A Table'
  }
];

const MenuRow = ({ item, idx, scrollY }) => {
  const rowRef = useRef(null);
  const [mouseX, setMouseX] = useState('50%');
  const [lineWidth, setLineWidth] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setMouseX(`${x}px`);
  };

  useEffect(() => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let progress = (windowHeight - rect.top) / (windowHeight * 0.4);
    progress = Math.max(0, Math.min(1, progress));

    setLineWidth(progress * 100);
  }, [scrollY]);

  return (
    <Link
      to={`/menu-details/${item.id}`}
      className="ak-menu-list-section-1 ak-interactive-menu-row"
      style={{ animationDelay: `${idx * 0.08}s` }}
      onMouseMove={handleMouseMove}
      ref={rowRef}
    >
      {/* Floating Curved Glassmorphism Preview Portal */}
      <div
        className="ak-menu-hover-portal"
        style={{ left: mouseX }}
      >
        <img
          src={item.img}
          alt={item.name}
          className="ak-menu-hover-thumb"
        />
        <div className="ak-menu-hover-glow"></div>
      </div>

      <div className="food-menu style-1">
        <div className="food-menu-section-1">
          <div className="food-menu-title">
            <p>{item.name}</p>
          </div>
          <div className="food-menu-hr-wrap">
            <div
              className="food-menu-hr style-1"
              style={{ width: `${lineWidth}%`, opacity: lineWidth > 0 ? 1 : 0 }}
            ></div>
          </div>
          <div className="food-menu-price">
            <p>{item.price}</p>
          </div>
        </div>
        <div className="food-menu-section-2">
          <div><p>{item.sub}</p></div>
          <div className="food-menu-extra-badge"><p>{item.extra}</p></div>
        </div>
      </div>
    </Link>
  );
};

export default function DarkHome() {
  const [heroSlides, setHeroSlides] = useState(defaultHeroSlides);
  const [updates, setUpdates] = useState([]);
  const [aboutData, setAboutData] = useState(null);
  const [heroIdx, setHeroIdx] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [testiIdx, setTestiIdx] = useState(0);
  const [showcaseItems, setShowcaseItems] = useState(fallbackFoodShowcaseItems);
  const [homeMenuItems, setHomeMenuItems] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [specialities, setSpecialities] = useState(null);
  const [openingHours, setOpeningHours] = useState(null);
  const [showcaseIdx, setShowcaseIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Smooth scroll listener for Parallax effects
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch dynamic banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch(apiUrl('/api/banners'));
        const result = await res.json();
        if (result.status === 200 && result.data.length > 0) {
          const mappedSlides = result.data.map((banner) => ({
            subtitle: banner.title2 || '',
            title: banner.title1 || '',
            text: banner.description || '',
            bg: imageUrl(banner.image_url),
            btn1: 'Explore Menu',
            btn2: 'Book A Table'
          }));
          setHeroSlides(mappedSlides);
        }
      } catch (err) {
        console.error('Failed to fetch banners:', err);
      }
    };

    const fetchUpdates = async () => {
      try {
        const res = await fetch(apiUrl('/api/latestUpdates'));
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          setUpdates(result.data);
        } else {
          setUpdates([{ id: 'default', title: 'Embark on a gastronomic adventure', description: 'guided our by exquisite dishes' }]);
        }
      } catch (err) {
        console.error('Failed to fetch updates:', err);
        setUpdates([{ id: 'default', title: 'Embark on a gastronomic adventure', description: 'guided our by exquisite dishes' }]);
      }
    };

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

    const fetchFeatured = async () => {
      try {
        const res = await fetch(apiUrl('/api/menus?featured=true'));
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          const formatted = result.data.map(item => ({
            id: item.id,
            title: item.title,
            category: item.category_name || 'Featured',
            benefit: item.benefit,
            desc: item.short_description,
            img: item.image_url.startsWith('http') ? item.image_url : imageUrl(item.image_url)
          }));
          setShowcaseItems(formatted);
        }
      } catch (err) {
        console.error('Failed to fetch featured menu items:', err);
      }
    };

    const fetchHomeMenuItems = async () => {
      try {
        const res = await fetch(apiUrl('/api/menus?popular=true'));
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          const formatted = result.data.map(item => ({
            id: item.id,
            name: item.title,
            sub: item.short_description,
            price: item.price,
            extra: item.benefit,
            img: item.image_url.startsWith('http') ? item.image_url : imageUrl(item.image_url)
          }));
          setHomeMenuItems(formatted);
        }
      } catch (err) {
        console.error('Failed to fetch menu items:', err);
      }
    };

    const fetchLatestBlogs = async () => {
      try {
        const res = await fetch(apiUrl('/api/blogs'));
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          setLatestBlogs(result.data.slice(0, 3));
        }
      } catch (err) {
        console.error('Failed to fetch latest blogs:', err);
      }
    };

    const fetchTestimonials = async () => {
      try {
        const res = await fetch(apiUrl('/api/testimonials'));
        const result = await res.json();
        if (result.status === 200 && result.data && result.data.length > 0) {
          setTestimonials(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
      }
    };

    const fetchSpecialities = async () => {
      try {
        const res = await fetch(apiUrl('/api/specialities'));
        const result = await res.json();
        if (result.success && result.data) {
          setSpecialities(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch specialities:', err);
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

    const fetchGallery = async () => {
      try {
        const res = await fetch(apiUrl('/api/gallery'));
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          setGalleryImages(result.data.slice(0, 8));
        }
      } catch (err) {
        console.error('Failed to fetch gallery:', err);
      }
    };

    fetchBanners();
    fetchUpdates();
    fetchAbout();
    fetchFeatured();
    fetchHomeMenuItems();
    fetchLatestBlogs();
    fetchGallery();
    fetchTestimonials();
    fetchSpecialities();
    fetchOpeningHours();
  }, []);

  // Automatic hero slider rotation (faster)
  useEffect(() => {
    if (heroSlides.length === 0) return;
    const timer = setInterval(() => {
      setSlideDirection('next');
      setHeroIdx((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [heroIdx, heroSlides.length]);

  // IntersectionObserver for all reveal animations site-wide
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(
      '.ak-interactive-menu-row, .ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [homeMenuItems, showcaseItems, aboutData, latestBlogs, galleryImages]);

  const prevHeroSlide = () => {
    setSlideDirection('prev');
    setHeroIdx((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextHeroSlide = () => {
    setSlideDirection('next');
    setHeroIdx((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ensure enough items for Swiper loop to work correctly with slidesPerView: 5
  let displayShowcaseItems = [...showcaseItems];
  if (displayShowcaseItems.length > 0) {
    while (displayShowcaseItems.length < 6) {
      displayShowcaseItems = [...displayShowcaseItems, ...showcaseItems];
    }
  }

  let displayGalleryImages = [...galleryImages];
  if (displayGalleryImages.length > 0) {
    while (displayGalleryImages.length < 6) {
      displayGalleryImages = [...displayGalleryImages, ...galleryImages];
    }
  }

  return (
    <div className="elegencia-dark-theme">
      {/* 2-Tier Header */}
      <DarkHeader />

      {/* Hero Section with Full Background & Animation */}
      <section className="ak-hero-wrapper-section hero-fullbleed-stage">
        {/* Full Hero Background Image with Ken Burns animation */}
        <div
          className={`hero-fullbleed-bg-slide animate-${slideDirection}`}
          key={`hero-bg-${heroIdx}`}
          style={{ backgroundImage: `url(${heroSlides[heroIdx].bg})` }}
        >
          <div className="hero-fullbleed-overlay"></div>
        </div>

        {/* Side Arrow Navigation (Left & Right) */}
        <button
          className="hero-arrow-nav hero-arrow-nav-left"
          onClick={prevHeroSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="hero-arrow-nav hero-arrow-nav-right"
          onClick={nextHeroSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Hero Centered Content */}
        <div className="hero-centered-content-container">
          <div className="hero-centered-slide-card" key={`hero-text-${heroIdx}`}>
            <p className="hero-slide-subtitle">{heroSlides[heroIdx].subtitle}</p>
            <h1 className="hero-slide-main-title">{heroSlides[heroIdx].title}</h1>
            <p className="hero-slide-description">{heroSlides[heroIdx].text}</p>
            <div className="hero-slide-buttons">
              <a href="#menu" className="hero-btn-gold-solid">
                {heroSlides[heroIdx].btn1}
              </a>
              <a href="#contact" className="hero-btn-outline">
                {heroSlides[heroIdx].btn2}
              </a>
            </div>
          </div>

          {/* Bottom Dots Indicator */}
          <div className="hero-slide-dots">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`hero-dot ${idx === heroIdx ? 'active' : ''}`}
                onClick={() => setHeroIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section attached directly to banner */}
      <div className="ak-moving-section-wrap text-uppercase">
        <div className="ak-moving-section-in">
          {updates.map((update, idx) => (
            <div className="ak-moving-section" key={update.id || idx}>
              <h2>{update.title} <span>{update.description}</span></h2>
            </div>
          ))}
          {/* Duplicate for seamless infinite scrolling */}
          {updates.map((update, idx) => (
            <div className="ak-moving-section" key={`dup-${update.id || idx}`}>
              <h2>{update.title} <span>{update.description}</span></h2>
            </div>
          ))}
        </div>
      </div>

      {/* About Section: Our Ayurvedic Heritage */}
      <div className="ak-height-100"></div>
      <section className="ak-about-bg-color ak-royalty-fullbleed ak-parallax-container">
        <div className="about-section ak-about-1">
          <div className="about-text-section ak-reveal-right">
            <div className="ak-section-heading">
              <div className="ak-section-subtitle">About Us</div>
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
              <Link className="text-btn1" to="/about">View More</Link>
            </div>
          </div>

          <div className="about-media-right ak-parallax-img-wrap ak-reveal-left">
            <img
              src={aboutData?.image_url ? imageUrl(aboutData.image_url) : "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=85"}
              alt={aboutData?.title || "Traditional Indian Culinary Preparation"}
              className="ak-parallax-img"
              style={{ transform: `scale(1.15) translateY(${Math.min(Math.max((scrollY - 500) * 0.08, -40), 40)}px)` }}
            />
          </div>
        </div>
      </section>

      {/* Food Items Showcase Slider: Placed directly below About section */}
      <section id="showcase" className="ak-medicinal-showcase-section">
        <div className="ak-height-100"></div>
        <div className="container-fluid">
          <div className="ak-section-heading ak-type-1">
            <div className="ak-section-subtitle">Vedic Healing & Wellness</div>
            <h2 className="ak-section-title">Therapeutic Food Delicacies</h2>
          </div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ nextEl: '.showcase-next', prevEl: '.showcase-prev' }}
            pagination={{ clickable: true, el: '.showcase-pagination', bulletClass: 'ak-slider-dot', bulletActiveClass: 'active' }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 30 }
            }}
            className="ak-slider-food-grid ak-staggered-grid"
            style={{ paddingBottom: '20px' }}
          >
            {displayShowcaseItems.map((item, idx) => (
              <SwiperSlide key={`${item.id}-${idx}`}>
                <Link
                  to={`/menu-details/${item.id}`}
                  className="ak-food-showcase-item"
                  style={{ animationDelay: `${(idx % 5) * 0.15}s` }}
                >
                  <div className="ak-showcase-img-holder">
                    <img src={item.img} alt={item.title} className="ak-showcase-img" />
                    <span className="ak-showcase-pill-badge">{item.category}</span>

                    {/* Dark Vignette & Hover Reveal Card */}
                    <div className="ak-showcase-hover-overlay">
                      <div className="ak-showcase-hover-card">
                        <h5 className="ak-showcase-title">{item.title}</h5>
                        <p className="ak-showcase-benefit">{item.benefit}</p>
                        <p className="ak-showcase-desc">{item.desc}</p>
                        <div className="ak-showcase-view-more">
                          <span>View Details &rarr;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Pagination Controls */}
          <div className="ak-slider-nav-row" style={{ marginTop: '20px' }}>
            <button className="hero-swiper-btn showcase-prev" style={{ width: 44, height: 44 }} aria-label="Previous Showcase">
              <ChevronLeft size={20} />
            </button>
            <div className="showcase-pagination ak-slider-dots"></div>
            <button className="hero-swiper-btn showcase-next" style={{ width: 44, height: 44 }} aria-label="Next Showcase">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Ayurvedic Delicacies Menu Section: Positioned directly after Food Items with Magnetic Hover Animation */}
      <section id="menu" className="ak-menu-parallax-section">
        {/* Subtle Parallax Botanical Background Pattern */}
        <div
          className="ak-menu-parallax-bg-texture"
          style={{ transform: `translateY(${Math.min(Math.max((scrollY - 1200) * 0.07, -40), 40)}px)` }}
        />

        <div className="ak-height-120"></div>
        <div className="container ak-menu-container-relative">
          <div className="ak-section-heading ak-type-1">
            <div className="ak-section-subtitle">Ancient Recipes & Modern Vitality</div>
            <h2 className="ak-section-title">Authentic Cafe Menu</h2>
          </div>

          <div className="ak-menu-list ak-interactive-menu-list">
            {homeMenuItems.length > 0 ? homeMenuItems.map((item, idx) => (
              <MenuRow key={idx} item={item} idx={idx} scrollY={scrollY} />
            )) : (
              <div className="text-center py-10 text-muted-foreground">Loading menu items...</div>
            )}
          </div>

          <div className="ak-height-50"></div>
          <div style={{ textAlign: 'center' }}>
            <div className="text-btn">
              <Link className="text-btn1" to="/menu">Explore Full Ayurvedic Menu</Link>
            </div>
          </div>
        </div>
      </section>


      {/* Our Specialties Section with Multi-layer Parallax */}
      <section id="specialties">
        <div className="ak-height-150"></div>
        <div className="container">
          <div className="ak-best-item">
            <div className="best-item-section-1">
              <div className="ak-section-heading ak-reveal">
                <h2 className="ak-section-title">
                  <span className="text-white">Our</span>
                  <br />
                  <span className="gold-accent">Specialties</span>
                </h2>
                <div className="ak-height-30"></div>
                <img src="/images/patterns/lotus-divider.svg" alt="Lotus Divider" className="ak-lotus-divider" />
              </div>
              <div className="ak-height-30"></div>
              <div style={{ position: 'relative' }}>
                <img src="/images/patterns/tulsi-leaf.svg" alt="Tulsi" className="ak-tulsi-ornament" style={{ top: -20, left: -20, width: 40 }} />
                <p className="ak-reveal delay-1">
                  {specialities ? specialities.description : "Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At Madhura's Cafe, we strive to create a gastronomic haven that tantalizes your taste buds."}
                </p>
              </div>
              <div className="ak-height-50"></div>
              <div className="img-one ak-parallax-img-wrap ak-reveal-scale delay-2">
                <img
                  src={specialities?.image1_url ? (specialities.image1_url.startsWith('http') ? specialities.image1_url : imageUrl(specialities.image1_url)) : "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"}
                  alt="Specialty dish 1"
                  className="ak-parallax-img"
                  style={{ transform: `scale(1.08) translateY(${Math.min(Math.max((scrollY - 2200) * -0.06, -35), 35)}px)` }}
                />
              </div>
            </div>

            {/* Vertical Star Ornament */}
            <div className="best-item-section-2 ak-reveal delay-3">
              <Star size={20} fill="#FFD28D" color="#FFD28D" />
              <div style={{ width: 1, height: 80, background: 'rgba(255,210,141,0.3)' }}></div>
              <Star size={20} fill="#FFD28D" color="#FFD28D" />
            </div>

            <div className="best-item-section-3">
              <div className="img-two ak-parallax-img-wrap ak-reveal-right delay-4">
                <img
                  src={specialities?.image2_url ? (specialities.image2_url.startsWith('http') ? specialities.image2_url : imageUrl(specialities.image2_url)) : "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"}
                  alt="Chef Crafting Experience"
                  className="ak-parallax-img"
                  style={{ transform: `scale(1.08) translateY(${Math.min(Math.max((scrollY - 2200) * 0.07, -35), 35)}px)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container ak-reveal-scale">
        <div className="ak-height-150"></div>
        <div className="testimonial-section" style={{ position: 'relative', border: '1px solid var(--ak-border-gold)', padding: '40px', borderRadius: '8px', background: 'rgba(10, 13, 14, 0.4)' }}>
          {/* Left Decorative Quote Icon */}
          <div className="testimonial-quote-icon">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <path d="M22 42H8C8 28 14 18 26 12L21 2C7 8 0 22 0 42V68H26V42H22ZM56 42H42C42 28 48 18 60 12L55 2C41 8 34 22 34 42V68H60V42H56Z" fill="#FFD28D" fillOpacity="0.25" />
            </svg>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{ nextEl: '.testi-next', prevEl: '.testi-prev' }}
            loop={true}
          >
            {testimonials.map((testi, idx) => (
              <SwiperSlide key={testi.id || idx}>
                <div className="ak-reveal-fade in-view">
                  {testi.image_url && (
                    <img
                      src={testi.image_url.startsWith('http') ? testi.image_url : imageUrl(testi.image_url)}
                      className="testimonial-info-img"
                      alt={testi.client_name}
                    />
                  )}
                  <h6 className="testimonial-info-title">{testi.client_name}</h6>
                  <p className="short-title">{testi.client_position || testi.client_company || 'Guest'}</p>
                  <p className="testimonial-info-subtitle">{testi.comment}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Decorative Quote Icon */}
          <div className="testimonial-quote-icon" style={{ position: 'absolute', right: 0, top: '40px' }}>
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <path d="M4 68L9 58C23 52 30 38 30 18V0H4V26H8C8 40 2 50 4 68ZM38 68L43 58C57 52 64 38 64 18V0H38V26H42C42 40 36 50 38 68Z" fill="#FFD28D" fillOpacity="0.25" />
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24 }}>
          <button
            className="hero-swiper-btn testi-prev"
            style={{ width: 48, height: 48 }}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="hero-swiper-btn testi-next"
            style={{ width: 48, height: 48 }}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Opening Hours with Parallax Image */}
      <div className="ak-height-150"></div>
      <div className="ak-bg-secendary ak-opening-fullbleed ak-parallax-container">
        <div className="opening-hour-grid">
          <div className="opening-hour-img-section ak-parallax-img-wrap">
            <img
              src={openingHours?.image_url ? (openingHours.image_url.startsWith('http') ? openingHours.image_url : imageUrl(openingHours.image_url)) : "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"}
              alt={openingHours?.title || "Opening Hours Ambiance"}
              className="ak-parallax-img"
              style={{ transform: `scale(1.15) translateY(${Math.min(Math.max((scrollY - 2000) * 0.08, -40), 40)}px)` }}
            />
          </div>

          <div className="opening-hour-text-section">
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

      <div className="ak-height-100"></div>

      {/* Dynamic Blog Section */}
      {latestBlogs.length > 0 && (
        <section className="container">
          <div className="ak-section-heading ak-type-1">
            <div className="ak-section-subtitle">Wisdom & Healing Notes</div>
            <h2 className="ak-section-title">From Our Journal</h2>
          </div>
          <div className="ak-height-45"></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
            {latestBlogs.map((post, idx) => (
              <article
                key={post.id}
                className="ak-reveal"
                style={{
                  animationDelay: `${idx * 0.15}s`,
                  background: 'var(--ak-card-bg)',
                  border: '1px solid rgba(255, 210, 141, 0.15)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={imageUrl(post.banner_image || '')}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="ak-food-image-hover"
                  />
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.82rem', color: 'var(--ak-gold)' }}>
                    <span>{post.tags}</span>
                    <span style={{ color: 'var(--ak-text-muted)' }}>{new Date(post.publish_date).toLocaleDateString()}</span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: '0 0 12px', lineHeight: 1.3 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--ak-text-muted)', marginBottom: '20px', flexGrow: 1 }}>
                    {post.short_description || (post.full_content ? post.full_content.replace(/<[^>]+>/g, '').substring(0, 100) + '...' : '')}
                  </p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.84rem', color: '#FFFFFF' }}>By {post.author}</span>
                    <Link to={`/blog-details/${post.id}`} className="text-btn1" style={{ fontSize: '0.8rem' }}>
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="ak-height-50"></div>
          <div style={{ textAlign: 'center' }}>
            <div className="text-btn">
              <Link className="text-btn1" to="/blog">View All Articles</Link>
            </div>
          </div>
        </section>
      )}

      <div className="ak-height-100"></div>

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

      {/* Footer */}
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
