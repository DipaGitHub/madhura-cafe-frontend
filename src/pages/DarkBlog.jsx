import React from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import '../styles/dark.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Ancient Science of Food as Medicine in Ayurvedic Cafes',
    date: 'October 14, 2026',
    author: 'Vaidya Dr. Sharma',
    summary: 'Discover how traditional herbs like Brahmi, Ashwagandha, and Shatavari transform everyday meals into therapeutic nourishment for the mind and body.',
    img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    tag: 'Ayurveda & Health'
  },
  {
    id: 2,
    title: 'Why Golden Milk with Turmeric and Black Pepper is a Daily Superfood',
    date: 'October 08, 2026',
    author: 'Chef Ananya Rao',
    summary: 'The bio-enhancing synergy of piperine with organic curcumin creates the ultimate cellular shield against oxidative stress and inflammation.',
    img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    tag: 'Nutrition'
  },
  {
    id: 3,
    title: 'Balancing Your Tridosha (Vata, Pitta, Kapha) Through Seasonal Diet',
    date: 'September 28, 2026',
    author: 'Madhura Wellness Team',
    summary: 'Learn how aligning your culinary choices with natural seasonal cycles promotes restorative vitality and glowing longevity.',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    tag: 'Holistic Living'
  }
];

export default function DarkBlog() {
  return (
    <div className="elegencia-dark-theme">
      <DarkHeader />

      {/* Hero Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="about-hero-breadcrumb">
            <Link to="/">Home</Link> / <span>Our Journal & Blog</span>
          </div>
          <h1 className="about-hero-title">Ayurvedic Journal & Insights</h1>
        </div>
      </section>

      <div className="ak-height-75"></div>

      <section className="container">
        <div className="ak-section-heading ak-type-1">
          <div className="ak-section-subtitle">Wisdom & Healing Notes</div>
          <h2 className="ak-section-title">
            <span className="text-white">Stories from the </span>
            <span className="gold-accent">Madhura Kitchen</span>
          </h2>
        </div>

        <div className="ak-height-45"></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              style={{
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
                  src={post.img}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.82rem', color: 'var(--ak-gold)' }}>
                  <span>{post.tag}</span>
                  <span style={{ color: 'var(--ak-text-muted)' }}>{post.date}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: '0 0 12px', lineHeight: 1.3 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--ak-text-muted)', marginBottom: '20px', flexGrow: 1 }}>
                  {post.summary}
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.84rem', color: '#FFFFFF' }}>By {post.author}</span>
                  <Link to="/blog-details" className="text-btn1" style={{ fontSize: '0.8rem' }}>
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="ak-height-130"></div>
      <DarkFooter />
    </div>
  );
}
