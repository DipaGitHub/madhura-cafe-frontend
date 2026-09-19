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
import '../styles/dark.css';

const foodShowcaseItems = [
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
  { 
    id: 'triphala-dosa',
    title: 'Triphala Fermented Dosa', 
    category: 'Gut Vitality & Balance', 
    benefit: 'Tri-doshic balance, rich in prebiotics and bio-available iron',
    desc: 'Stone-ground heritage millet crepe crisped in cold-pressed sesame oil, served with digestive herbal chutneys.',
    img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 'brahmi-sattvic-thali',
    title: 'Brahmi Sattvic Platter', 
    category: 'Cognitive Harmony & Vitality', 
    benefit: 'Enhances memory, cognitive focus & cell rejuvenation',
    desc: 'Brahmi herb infusions with seasonal organic vegetables, hand-churned Vedic butter, and steamed red rice.',
    img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80' 
  },
  {
    id: 'tulsi-ginger-rasam',
    title: 'Tulsi & Ginger Rasam',
    category: 'Respiratory Wellness',
    benefit: 'Soothes throat, builds immunity & aids digestion',
    desc: 'A healing South Indian broth infused with Holy Basil, freshly crushed black pepper, and cold-pressed tamarind.',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'amla-cumin-cooler',
    title: 'Amla Cumin Cooler',
    category: 'Detox & Skin Health',
    benefit: 'Rich in Vitamin C, purifies blood & cools the system',
    desc: 'Fresh Indian gooseberry extract blended with roasted cumin, mint, and a touch of black salt.',
    img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sattvic-paneer-tikka',
    title: 'Sattvic Paneer Tikka',
    category: 'Protein & Gut Health',
    benefit: 'Easily digestible protein, balances doshas',
    desc: 'Fresh farm cottage cheese marinated in hung curd, turmeric, and gentle aromatic spices, grilled to perfection.',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'makhana-almond-kheer',
    title: 'Makhana & Almond Kheer',
    category: 'Energy & Calm Mind',
    benefit: 'Heart healthy, promotes peaceful sleep & energy',
    desc: 'Fox nuts and crushed almonds slow-cooked in A2 milk, sweetened lightly with natural jaggery and saffron strands.',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
  },
];

const appetizersData = [
  { name: 'KASHMIRI KAHWA ELIXIR', sub: 'Saffron, Green Cardamom & Crushed Almonds', price: '₹220', extra: 'Immunity Booster', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=300&q=80' },
  { name: 'RAGI & METHI CHEELA', sub: 'Spiced Finger Millet Crepe with Mint Chutney', price: '₹280', extra: 'High Fiber & Protein', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=300&q=80' },
  { name: 'VITALITY SPROUT SALAD', sub: 'Sprouted Moong, Pomegranate & Rock Salt', price: '₹260', extra: 'Digestive Enzymes', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80' },
  { name: 'HERBAL TULSI INFUSION', sub: 'Fresh Holy Basil, Ginger & Wild Honey', price: '₹180', extra: 'Respiratory Wellness', img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80' },
  { name: 'ORGANIC TURMERIC LATTE', sub: 'Stone-ground Turmeric with A2 Desi Milk', price: '₹240', extra: 'Anti-inflammatory', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80' },
  { name: 'JOWAR ROTI & KADHI', sub: 'Sorghum Flatbread with Probiotic Herb Kadhi', price: '₹340', extra: 'Gut Microbiome', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=300&q=80' },
  { name: 'AMLA & GINGER SHOOTER', sub: 'Fresh Indian Gooseberry & Cold-pressed Ginger', price: '₹160', extra: 'Vitamin C Boost', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&q=80' },
  { name: 'TRIPHALA DETOX SOUP', sub: 'Lentil & Triphala Consommé with Ghee Tadka', price: '₹290', extra: 'Metabolism Cleanse', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80' },
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
      to="/menu-details" 
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
  const [heroIdx, setHeroIdx] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  const [testiIdx, setTestiIdx] = useState(0);
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

  // Automatic hero slider rotation (faster)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('next');
      setHeroIdx((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [heroIdx]);

  // IntersectionObserver for all reveal animations site-wide
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
      '.ak-interactive-menu-row, .ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
          <div className="ak-moving-section">
            <h2>Embark on a gastronomic adventure <span>guided our by exquisite dishes</span></h2>
          </div>
          <div className="ak-moving-section">
            <h2>Embark on a gastronomic adventure <span>guided our by exquisite dishes</span></h2>
          </div>
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
              <Link className="text-btn1" to="/about">View More</Link>
            </div>
          </div>

          <div className="about-media-right ak-parallax-img-wrap ak-reveal-left">
            <img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=85"
              alt="Traditional Indian Culinary Preparation"
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{ nextEl: '.showcase-next', prevEl: '.showcase-prev' }}
            pagination={{ clickable: true, el: '.showcase-pagination', bulletClass: 'ak-slider-dot', bulletActiveClass: 'active' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            className="ak-slider-food-grid ak-staggered-grid"
            style={{ paddingBottom: '20px' }}
          >
            {foodShowcaseItems.map((item, idx) => (
              <SwiperSlide key={item.id}>
                <Link 
                  to={`/menu-details?item=${item.id}`} 
                  className="ak-food-showcase-item"
                  style={{ animationDelay: `${idx * 0.15}s` }}
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
            {appetizersData.map((item, idx) => (
              <MenuRow key={idx} item={item} idx={idx} scrollY={scrollY} />
            ))}
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
                  Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. At Madhura's Cafe, we strive to create a gastronomic haven that tantalizes your taste buds.
                </p>
              </div>
              <div className="ak-height-50"></div>
              <div className="img-one ak-parallax-img-wrap ak-reveal-scale delay-2">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
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
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
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
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
              alt="Opening Hours Ambiance"
              className="ak-parallax-img"
              style={{ transform: `scale(1.15) translateY(${Math.min(Math.max((scrollY - 2000) * 0.08, -40), 40)}px)` }}
            />
          </div>

          <div className="opening-hour-text-section">
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

      <div className="ak-height-100"></div>

      {/* Footer */}
      <DarkFooter />
    </div>
  );
}
