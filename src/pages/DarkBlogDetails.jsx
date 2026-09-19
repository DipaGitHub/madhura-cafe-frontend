import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import { Search, Calendar, User, MessageCircle } from 'lucide-react';
import '../styles/dark.css';

const popularItems = [
  {
    id: 1,
    name: 'Ayurvedic Golden Milk',
    price: '₹220',
    img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Sattvic Ragi Platter',
    price: '₹340',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Sprouted Moong Tikki',
    price: '₹280',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=150&q=80'
  }
];

export default function DarkBlogDetails() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / <span>Details</span>
          </div>
          <h1 className="about-hero-title ak-reveal">Single Blog</h1>
        </div>
      </section>

      <div className="ak-height-100"></div>

      <section className="container">
        <div className="ak-menu-details-grid">
          
          {/* Left Column: Blog Content */}
          <div className="ak-menu-details-content">
            
            <h2 className="ak-reveal" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '15px', lineHeight: 1.2 }}>
              Indulge in Exquisite Dining
            </h2>
            
            <div className="ak-reveal delay-1" style={{ display: 'flex', gap: '20px', marginBottom: '30px', color: 'var(--ak-gold)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={16} /> 12 June, 2026</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><User size={16} /> By Admin</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MessageCircle size={16} /> 3 Comments</div>
            </div>

            <div className="ak-reveal-scale delay-2" style={{ marginBottom: '40px', borderRadius: '12px', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
                alt="Chef preparing food"
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                className="ak-food-image-hover"
              />
            </div>

            <p className="ak-reveal" style={{ fontSize: '1.05rem', color: 'var(--ak-text-muted)', marginBottom: '24px', lineHeight: 1.8 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </p>

            <p className="ak-reveal" style={{ fontSize: '1.05rem', color: 'var(--ak-text-muted)', marginBottom: '40px', lineHeight: 1.8 }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>

            <blockquote className="ak-reveal" style={{ borderLeft: '4px solid var(--ak-gold)', paddingLeft: '24px', margin: '40px 0', fontStyle: 'italic', fontSize: '1.4rem', color: '#FFF', fontFamily: 'var(--ak-font-title)', lineHeight: 1.6 }}>
              "The culinary arts of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            </blockquote>

            <h3 className="ak-reveal" style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '20px', lineHeight: 1.2 }}>
              A Symphony of Flavors
            </h3>

            <p className="ak-reveal" style={{ fontSize: '1.05rem', color: 'var(--ak-text-muted)', marginBottom: '40px', lineHeight: 1.8 }}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>

          </div>

          {/* Right Column: Sidebar */}
          <div className="ak-menu-details-sidebar">
            
            {/* Search Widget */}
            <div className="ak-sidebar-widget ak-reveal delay-1">
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  style={{ width: '100%', padding: '14px 45px 14px 20px', background: 'transparent', border: '1px solid rgba(255, 210, 141, 0.2)', borderRadius: '6px', color: '#FFF', outline: 'none', fontSize: '0.95rem' }} 
                />
                <Search size={18} color="var(--ak-gold)" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            {/* Popular Categories Widget */}
            <div className="ak-sidebar-widget ak-reveal delay-2" style={{ background: '#0D1113', padding: '30px 24px', borderRadius: '12px', marginTop: '30px', border: '1px solid rgba(255, 210, 141, 0.05)' }}>
              <h4 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '24px', fontFamily: 'var(--ak-font-title)' }}>Popular Categories</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><Link to="/menu" style={{ color: 'var(--ak-text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--ak-gold)'} onMouseOut={e => e.target.style.color = 'var(--ak-text-muted)'}>Immunity Elixirs</Link></li>
                <li style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}><Link to="/menu" style={{ color: 'var(--ak-text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--ak-gold)'} onMouseOut={e => e.target.style.color = 'var(--ak-text-muted)'}>Sattvic Appetizers</Link></li>
                <li style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}><Link to="/menu" style={{ color: 'var(--ak-text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--ak-gold)'} onMouseOut={e => e.target.style.color = 'var(--ak-text-muted)'}>Wholesome Mains</Link></li>
                <li style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}><Link to="/menu" style={{ color: 'var(--ak-text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--ak-gold)'} onMouseOut={e => e.target.style.color = 'var(--ak-text-muted)'}>Guilt-Free Desserts</Link></li>
              </ul>
            </div>

            {/* Popular Items Widget */}
            <div className="ak-sidebar-widget ak-reveal delay-3" style={{ background: '#0D1113', padding: '30px 24px', borderRadius: '12px', marginTop: '30px', border: '1px solid rgba(255, 210, 141, 0.05)' }}>
              <h4 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '24px', fontFamily: 'var(--ak-font-title)' }}>Popular Food Items</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {popularItems.map((item) => (
                  <Link key={item.id} to="/menu-details" style={{ display: 'flex', gap: '15px', alignItems: 'center', textDecoration: 'none' }} className="popular-item-link">
                    <img src={item.img} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} className="ak-food-image-hover" />
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
