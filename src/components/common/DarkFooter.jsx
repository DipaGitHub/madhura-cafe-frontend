import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { apiUrl } from '../../config/api';

export default function DarkFooter() {
  const [contactInfo, setContactInfo] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch(apiUrl('/api/contactInfo'));
        const result = await res.json();
        if (result.success && result.data) {
          setContactInfo(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch contact info:', err);
      }
    };
    fetchContactInfo();

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
              <a href="#whatsapp" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="#facebook" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#pinterest" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.25 2.652 7.876 6.386 9.32-.083-.79-.158-2.007.033-2.883.172-.787 1.11-4.7 1.11-4.7s-.284-.567-.284-1.408c0-1.319.765-2.304 1.717-2.304.811 0 1.203.609 1.203 1.34 0 .816-.52 2.036-.788 3.167-.224.945.474 1.717 1.404 1.717 1.683 0 2.975-1.776 2.975-4.34 0-2.268-1.63-3.85-3.953-3.85-2.695 0-4.275 2.023-4.275 4.108 0 .816.314 1.69.706 2.164.077.094.088.176.065.267-.074.306-.24.97-.272 1.107-.043.18-.14.22-.326.134-1.22-.56-1.982-2.316-1.982-3.727 0-3.033 2.203-5.817 6.353-5.817 3.332 0 5.922 2.373 5.922 5.539 0 3.313-2.088 5.98-4.985 5.98-1.026 0-1.99-.533-2.322-1.164l-.634 2.417c-.228.874-.845 1.967-1.26 2.635 1.05.308 2.167.475 3.32.475 5.523 0 10-4.477 10-10S17.523 2 12 2z"></path></svg>
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
                <span style={{ whiteSpace: 'pre-line' }}>{contactInfo?.location_text || "Madhura Traditional Herbal Cafe\nHeritage Square, India"}</span>
              </li>
              <li>
                <Phone size={18} />
                <span style={{ whiteSpace: 'pre-line' }}>{contactInfo?.phone_text || "+91 (800) 915-6271"}</span>
              </li>
              <li>
                <Mail size={18} />
                <span style={{ whiteSpace: 'pre-line' }}>{contactInfo?.email_text || "namaste@madhuracafe.com"}</span>
              </li>
            </ul>
            <div className="ak-footer-hours" style={{ marginTop: '20px', whiteSpace: 'pre-line' }}>
              <p>{contactInfo?.working_hours_text || "Sun - Thu: 10:00 AM - 10:30 PM\nFri - Sat: 10:00 AM - 11:30 PM"}</p>
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
