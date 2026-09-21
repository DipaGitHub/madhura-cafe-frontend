import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import '../styles/dark.css';

export default function DarkContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '2026-10-20',
    time: '19:00',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);

  React.useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/contactInfo');
        const result = await res.json();
        if (result.success && result.data) {
          setContactInfo(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch contact info:', err);
      }
    };
    fetchContactInfo();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="elegencia-dark-theme">
      <DarkHeader />

      {/* Hero Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="about-hero-breadcrumb">
            <Link to="/">Home</Link> / <span>Contact Us</span>
          </div>
          <h1 className="about-hero-title">Contact Us</h1>
        </div>
      </section>

      <div className="ak-height-75"></div>

      <section className="container">
        {/* Contact Info Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '70px' }}>
          <div style={{ background: 'var(--ak-card-bg)', padding: '30px 24px', border: '1px solid rgba(255,210,141,0.2)', textAlign: 'center' }}>
            <MapPin size={32} color="var(--ak-gold)" style={{ marginBottom: '14px', marginInline: 'auto' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Our Location</h4>
            <p style={{ color: 'var(--ak-text-muted)', fontSize: '0.92rem', textAlign: 'center', whiteSpace: 'pre-line' }}>
              {contactInfo?.location_text || "Madhura Herbal Heritage Cafe\nCivil Lines, Jaipur, India"}
            </p>
          </div>

          <div style={{ background: 'var(--ak-card-bg)', padding: '30px 24px', border: '1px solid rgba(255,210,141,0.2)', textAlign: 'center' }}>
            <Phone size={32} color="var(--ak-gold)" style={{ marginBottom: '14px', marginInline: 'auto' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Phone Numbers</h4>
            <p style={{ color: 'var(--ak-text-muted)', fontSize: '0.92rem', textAlign: 'center', whiteSpace: 'pre-line' }}>
              {contactInfo?.phone_text || "+91 (800) 915-6271\n+91 (800) 915-6272"}
            </p>
          </div>

          <div style={{ background: 'var(--ak-card-bg)', padding: '30px 24px', border: '1px solid rgba(255,210,141,0.2)', textAlign: 'center' }}>
            <Mail size={32} color="var(--ak-gold)" style={{ marginBottom: '14px', marginInline: 'auto' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Email Address</h4>
            <p style={{ color: 'var(--ak-text-muted)', fontSize: '0.92rem', textAlign: 'center', whiteSpace: 'pre-line' }}>
              {contactInfo?.email_text || "info@madhuracafe.com\nnamaste@madhuracafe.com"}
            </p>
          </div>

          <div style={{ background: 'var(--ak-card-bg)', padding: '30px 24px', border: '1px solid rgba(255,210,141,0.2)', textAlign: 'center' }}>
            <Clock size={32} color="var(--ak-gold)" style={{ marginBottom: '14px', marginInline: 'auto' }} />
            <h4 style={{ color: '#FFFFFF', fontSize: '1.2rem', marginBottom: '8px' }}>Working Hours</h4>
            <p style={{ color: 'var(--ak-text-muted)', fontSize: '0.92rem', textAlign: 'center', whiteSpace: 'pre-line' }}>
              {contactInfo?.working_hours_text || "Mon - Sun: 10:00 AM - 11:00 PM\nKitchen Closes at 10:30 PM"}
            </p>
          </div>
        </div>

        {/* Contact Form Area */}
        <div id="contact-form" style={{ background: 'var(--ak-card-bg)', border: '1px solid rgba(255,210,141,0.2)', padding: '48px 36px', borderRadius: '4px' }}>
          <div className="ak-section-heading ak-type-1">
            <div className="ak-section-subtitle">Get In Touch</div>
            <h2 className="ak-section-title">
              <span className="text-white">Send Us A </span>
              <span className="gold-accent">Message</span>
            </h2>
          </div>

          <div className="ak-height-30"></div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <h3 style={{ color: 'var(--ak-gold)', fontSize: '1.8rem', marginBottom: '12px' }}>Message Received!</h3>
              <p style={{ color: '#D2D8DD', maxWidth: '500px', margin: '0 auto 24px' }}>
                Thank you, {formData.name}. Our team has received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="ak-btn style-5 color-yellow-bg"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--ak-gold)', fontSize: '0.85rem', marginBottom: '6px', letterSpacing: '0.05em' }}>Your Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,210,141,0.2)', color: '#FFFFFF', borderRadius: '2px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--ak-gold)', fontSize: '0.85rem', marginBottom: '6px', letterSpacing: '0.05em' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,210,141,0.2)', color: '#FFFFFF', borderRadius: '2px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--ak-gold)', fontSize: '0.85rem', marginBottom: '6px', letterSpacing: '0.05em' }}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,210,141,0.2)', color: '#FFFFFF', borderRadius: '2px' }}
                />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', color: 'var(--ak-gold)', fontSize: '0.85rem', marginBottom: '6px', letterSpacing: '0.05em' }}>Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="How can we help you?"
                  rows="4"
                  style={{ width: '100%', padding: '12px 16px', background: '#13181A', border: '1px solid rgba(255,210,141,0.2)', color: '#FFFFFF', borderRadius: '2px', resize: 'vertical' }}
                ></textarea>
              </div>

              <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '16px' }}>
                <button type="submit" className="ak-btn style-5 color-yellow-bg">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <div className="ak-height-130"></div>
      <DarkFooter />
    </div>
  );
}
