import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';
import '../styles/dark.css';

const popularItems = [
  {
    id: 1,
    name: 'Brahmi Infused Herbal Brew',
    price: '₹180',
    img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 4,
    name: 'Sprouted Moong & Moringa Tikki',
    price: '₹280',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 6,
    name: 'Sattvic Ragi Platter',
    price: '₹340',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&q=80'
  }
];

export default function DarkMenuDetails() {
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
      <DarkHeader />

      {/* Hero Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="about-hero-breadcrumb ak-reveal-fade">
            <Link to="/">Home</Link> / <Link to="/menu">Menu</Link> / <span>Details</span>
          </div>
          <h1 className="about-hero-title ak-reveal">Menu Details</h1>
        </div>
      </section>

      <div className="ak-height-100"></div>

      {/* Main Details Section */}
      <section className="container">
        <div className="ak-menu-details-grid">
          
          {/* Left Column: Image & Details */}
          <div className="ak-menu-details-content">
            
            {/* Main Food Image */}
            <div className="ak-reveal-scale" style={{ marginBottom: '40px' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative' }}>
                <img
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
                  alt="Ashwagandha Golden Milk Elixir"
                  style={{ width: '100%', height: '450px', display: 'block', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'var(--ak-gold)', color: '#0A0D0E', padding: '8px 20px', fontWeight: '700', borderRadius: '4px', fontSize: '1.2rem', fontFamily: 'Cinzel, serif' }}>
                  ₹220
                </div>
              </div>
            </div>

            {/* Details Data */}
            <div className="ak-section-subtitle ak-reveal" style={{ marginBottom: '15px' }}>Immunity Elixirs</div>
            <h2 className="ak-section-title ak-reveal delay-1" style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.2 }}>
              Ashwagandha Golden Milk Elixir
            </h2>
            
            <p className="ak-reveal delay-2" style={{ fontSize: '1.05rem', color: 'var(--ak-text-muted)', marginBottom: '24px', lineHeight: 1.8 }}>
              Welcome to Madhura Cafe, where culinary artistry meets ancient Ayurvedic wisdom. Our Ashwagandha Golden Milk is a therapeutic elixir designed to restore balance and vitality. We strive to create a gastronomic haven that tantalizes your taste buds and leaves you with unforgettable memories of wellness.
            </p>

            <p className="ak-reveal delay-3" style={{ fontSize: '1.05rem', color: 'var(--ak-text-muted)', marginBottom: '32px', lineHeight: 1.8 }}>
              At Madhura Cafe, we understand the importance of consuming food that heals from within. We specialize in creating visually stunning and nutritionally potent beverages. Our team of Ayurvedic chefs works to ensure this elixir not only looks great but functions seamlessly as a stress-relieving tonic.
            </p>

            <h3 className="ak-reveal" style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '20px' }}>Key Ingredients & Benefits</h3>
            
            <div className="ak-reveal delay-1" style={{ background: 'rgba(10, 13, 14, 0.4)', padding: '24px', border: '1px solid rgba(255,210,141,0.1)', borderRadius: '8px', marginBottom: '40px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#D2D8DD', fontSize: '1rem' }}>
                  <CheckCircle2 size={20} color="var(--ak-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Ashwagandha Root:</strong> A potent adaptogen known for reducing physical and mental fatigue and managing cortisol levels.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#D2D8DD', fontSize: '1rem' }}>
                  <CheckCircle2 size={20} color="var(--ak-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Organic Turmeric:</strong> Contains anti-inflammatory curcumin, paired with black pepper to enhance bioavailability by 2000%.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#D2D8DD', fontSize: '1rem' }}>
                  <CheckCircle2 size={20} color="var(--ak-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Grass-fed A2 Milk:</strong> A nourishing base that carries the medicinal properties deep into the body's tissues (Ojas).</span>
                </li>
              </ul>
            </div>

            <div className="ak-reveal delay-2" style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <Link to="/contact#contact-form" className="text-btn1">
                ORDER AT TABLE
              </Link>
            </div>
          </div>

          {/* Right Column: Sidebar (Search + Category Items + Popular) */}
          <div className="ak-menu-details-sidebar">
            
            {/* Search Widget */}
            <div className="ak-sidebar-widget ak-reveal">
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder="Search Menu..." 
                  style={{ width: '100%', padding: '14px 45px 14px 20px', background: 'transparent', border: '1px solid rgba(255, 210, 141, 0.2)', borderRadius: '6px', color: '#FFF', outline: 'none', fontSize: '0.95rem' }} 
                />
                <Search size={18} color="var(--ak-gold)" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            {/* Other Items in Category */}
            <div className="ak-sidebar-widget ak-reveal delay-1" style={{ background: '#0D1113', padding: '30px 24px', borderRadius: '12px', marginTop: '30px', border: '1px solid rgba(255, 210, 141, 0.05)' }}>
              <h4 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '24px', fontFamily: 'var(--ak-font-title)' }}>Other Items in this Category</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Link to="/menu-details" style={{ display: 'flex', gap: '15px', alignItems: 'center', textDecoration: 'none' }} className="popular-item-link">
                  <img src="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?auto=format&fit=crop&w=150&q=80" alt="Tulsi Masala Chai" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} />
                  <div>
                    <h5 style={{ color: '#D2D8DD', fontSize: '0.95rem', marginBottom: '5px', transition: 'color 0.3s ease' }}>Tulsi Masala Chai</h5>
                    <span style={{ color: 'var(--ak-gold)', fontSize: '0.9rem', fontWeight: '600' }}>₹120</span>
                  </div>
                </Link>
                <Link to="/menu-details" style={{ display: 'flex', gap: '15px', alignItems: 'center', textDecoration: 'none' }} className="popular-item-link">
                  <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=150&q=80" alt="Kanji Sherbet" style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} />
                  <div>
                    <h5 style={{ color: '#D2D8DD', fontSize: '0.95rem', marginBottom: '5px', transition: 'color 0.3s ease' }}>Kanji Sherbet</h5>
                    <span style={{ color: 'var(--ak-gold)', fontSize: '0.9rem', fontWeight: '600' }}>₹140</span>
                  </div>
                </Link>
              </div>
              <Link to="/menu" style={{ display: 'inline-block', marginTop: '24px', color: 'var(--ak-gold)', fontSize: '0.95rem', fontWeight: '600', textDecoration: 'none', borderBottom: '1px solid var(--ak-gold)', paddingBottom: '2px' }}>
                View More &rarr;
              </Link>
            </div>

            {/* Popular Items Widget */}
            <div className="ak-sidebar-widget ak-reveal delay-2" style={{ background: '#0D1113', padding: '30px 24px', borderRadius: '12px', marginTop: '30px', border: '1px solid rgba(255, 210, 141, 0.05)' }}>
              <h4 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '24px', fontFamily: 'var(--ak-font-title)' }}>Popular Food Items</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {popularItems.map((item) => (
                  <Link key={item.id} to="/menu-details" style={{ display: 'flex', gap: '15px', alignItems: 'center', textDecoration: 'none' }} className="popular-item-link">
                    <img src={item.img} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} />
                    <div>
                      <h5 style={{ color: '#D2D8DD', fontSize: '0.95rem', marginBottom: '5px', transition: 'color 0.3s ease' }}>{item.name}</h5>
                      <span style={{ color: 'var(--ak-gold)', fontSize: '0.9rem', fontWeight: '600' }}>{item.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/menu" style={{ display: 'inline-block', marginTop: '24px', color: 'var(--ak-gold)', fontSize: '0.95rem', fontWeight: '600', textDecoration: 'none', borderBottom: '1px solid var(--ak-gold)', paddingBottom: '2px' }}>
                View More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="ak-height-130"></div>
      <DarkFooter />
    </div>
  );
}
