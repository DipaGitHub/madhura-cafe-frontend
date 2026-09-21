import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import '../styles/dark.css';
import { apiUrl, imageUrl } from '../config/api';

export default function DarkBlog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl('/api/blogs'))
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBlogPosts(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch blogs", err);
        setLoading(false);
      });
  }, []);

  // IntersectionObserver for scroll animations
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
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [blogPosts]);

  return (
    <div className="elegencia-dark-theme">
      <DarkHeader />

      {/* Hero Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="about-hero-breadcrumb">
            <Link to="/">Home</Link> / <span>Our Journal &amp; Blog</span>
          </div>
          <h1 className="about-hero-title">Ayurvedic Journal &amp; Insights</h1>
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
          {loading ? (
            <div style={{ color: 'var(--ak-gold)', textAlign: 'center', gridColumn: '1 / -1', padding: '50px 0' }}>Loading blogs...</div>
          ) : blogPosts.length === 0 ? (
            <div style={{ color: 'var(--ak-text-muted)', textAlign: 'center', gridColumn: '1 / -1', padding: '50px 0' }}>No blogs found.</div>
          ) : (
            blogPosts.map((post) => (
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
                    src={imageUrl(post.banner_image || '')}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
            ))
          )}
        </div>
      </section>

      <div className="ak-height-130"></div>
      <DarkFooter />
    </div>
  );
}
