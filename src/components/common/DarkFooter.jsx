import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function DarkFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

    const elements = document.querySelectorAll('.ak-reveal, .ak-reveal-fade, .ak-reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" className="ak-footer ak-footer-redesign">
      <div className="ak-footer-texture-bg"></div>
      
      {/* Top Decorator */}
      <div className="ak-footer-top-decorator ak-reveal-fade">
        <img src="/images/patterns/lotus-divider.svg" alt="Lotus" style={{ width: '120px', margin: '0 auto', display: 'block', opacity: 0.7 }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Scroll To Top Crest */}
        <div className="footer-top-crest ak-reveal" style={{ marginTop: '30px', marginBottom: '60px' }}>
          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--ak-gold)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0 auto',
              gap: 15,
            }}
          >
            <span style={{ fontSize: '1.4rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ak-gold)', fontFamily: 'Cinzel, serif', textShadow: '0 0 15px rgba(255,210,141,0.3)' }}>
              Madhura's Cafe
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="13" viewBox="0 0 30 13" fill="none" style={{ opacity: 0.6 }}>
              <path d="M28.991 12.2063L14.8322 1L0.67334 12.2063" stroke="#FFD28D" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* 3-Column Footer Main */}
        <div className="ak-footer-grid">
          
          {/* Column 1: About & Social */}
          <div className="ak-footer-col ak-reveal delay-1">
            <h4 className="ak-footer-heading">Our Philosophy</h4>
            <p className="ak-footer-text">
              Rooted in ancient Ayurvedic traditions, Madhura's Cafe brings you therapeutic recipes, sattvic ingredients, and a serene ambiance to restore your mind, body, and spirit.
            </p>
            <div className="ak-footer-socials">
              <a href="#facebook" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="ak-footer-col ak-reveal delay-2">
            <h4 className="ak-footer-heading">Quick Links</h4>
            <ul className="ak-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/menu">Ayurvedic Menu</Link></li>
              <li><Link to="/blog">Wellness Journal</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="ak-footer-col ak-reveal delay-3">
            <h4 className="ak-footer-heading">Visit Us</h4>
            <ul className="ak-footer-contact">
              <li>
                <MapPin size={18} />
                <span>Madhura Traditional Herbal Cafe<br/>Heritage Square, India</span>
              </li>
              <li>
                <Phone size={18} />
                <span><a href="tel:1-800-915-6271">+91 (800) 915-6271</a></span>
              </li>
              <li>
                <Mail size={18} />
                <span><a href="mailto:namaste@madhuracafe.com">namaste@madhuracafe.com</a></span>
              </li>
            </ul>
            <div className="ak-footer-hours" style={{ marginTop: '20px' }}>
              <p>Sun - Thu: 10:00 AM - 10:30 PM</p>
              <p>Fri - Sat: 10:00 AM - 11:30 PM</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="copy-right-section ak-reveal-fade" style={{ borderTop: '1px solid rgba(255,210,141,0.15)', marginTop: '50px', paddingTop: '30px', textAlign: 'center', position: 'relative' }}>
          <img src="/images/patterns/spice-mortar.svg" alt="Spice Mortar" style={{ position: 'absolute', left: '50%', top: '-20px', transform: 'translateX(-50%)', width: '40px', background: '#0A0D0E', padding: '0 10px', opacity: 0.6 }} />
          <p className="text-uppercase" style={{ color: 'var(--ak-text-muted)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>&copy; {new Date().getFullYear()} Madhura Cafe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
