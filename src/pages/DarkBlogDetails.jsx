import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import { Search, Calendar, User, MessageCircle } from 'lucide-react';
import '../styles/dark.css';
import { apiUrl, imageUrl } from '../config/api';

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
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch blog details
  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(apiUrl(`/api/blogs/${id}`))
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setBlog(data.data);
          }
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch blog details", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Wait until content is loaded to attach observers
    if (loading) return;

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

    // Use a small timeout to ensure DOM has updated with dynamic content
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        '.ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade'
      );
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [loading, blog]);

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
          <h1 className="about-hero-title ak-reveal">Blog Details</h1>
        </div>
      </section>

      <div className="ak-height-100"></div>

      <section className="container">
        <div className="ak-menu-details-grid">
          
          {/* Left Column: Blog Content */}
          <div className="ak-menu-details-content">
            {loading ? (
              <div style={{ color: 'var(--ak-gold)', padding: '50px 0', fontSize: '1.2rem' }}>Loading blog details...</div>
            ) : !blog ? (
              <div style={{ color: 'var(--ak-text-muted)', padding: '50px 0', fontSize: '1.2rem' }}>Blog not found.</div>
            ) : (
              <>
                <h2 className="ak-reveal" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '15px', lineHeight: 1.2 }}>
                  {blog.title}
                </h2>
                
                <div className="ak-reveal delay-1" style={{ display: 'flex', gap: '20px', marginBottom: '30px', color: 'var(--ak-gold)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={16} /> {new Date(blog.publish_date).toLocaleDateString()}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><User size={16} /> By {blog.author}</div>
                  {blog.tags && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>Tag: {blog.tags}</div>}
                </div>

                <div className="ak-reveal-scale delay-2" style={{ marginBottom: '40px', borderRadius: '12px', overflow: 'hidden' }}>
                  <img
                    src={imageUrl(blog.banner_image || '')}
                    alt={blog.title}
                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                    className="ak-food-image-hover"
                  />
                </div>

                <div 
                  className="ak-reveal blog-dynamic-content" 
                  style={{ fontSize: '1.05rem', color: 'var(--ak-text-muted)', marginBottom: '40px', lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{ __html: blog.full_content }}
                />
              </>
            )}
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
