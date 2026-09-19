import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import { Search, CheckCircle2, Loader2 } from 'lucide-react';
import '../styles/dark.css';
import { apiUrl, imageUrl } from '../config/api';

const getImageUrl = (url) => {
  if (!url) return '';
  return url.startsWith('http') ? url : imageUrl(url);
};

const SidebarItemCard = ({ item }) => (
  <Link
    to={`/menu-details/${item.id}`}
    style={{ display: 'flex', gap: '15px', alignItems: 'center', textDecoration: 'none' }}
    className="popular-item-link"
  >
    <img
      src={getImageUrl(item.image_url)}
      alt={item.title}
      style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
    />
    <div>
      <h5 style={{ color: '#D2D8DD', fontSize: '0.95rem', marginBottom: '5px', transition: 'color 0.3s ease' }}>
        {item.title}
      </h5>
      <span style={{ color: 'var(--ak-gold)', fontSize: '0.9rem', fontWeight: '600' }}>{item.price}</span>
    </div>
  </Link>
);

export default function DarkMenuDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [categoryItems, setCategoryItems] = useState([]);
  const [popularItems, setPopularItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    const fetchAll = async () => {
      setIsLoading(true);
      try {
        const itemRes = await fetch(apiUrl(`/api/menus/${id}`));
        const itemResult = await itemRes.json();

        if (!itemResult.success || !itemResult.data) {
          navigate('/menu');
          return;
        }

        const itemData = itemResult.data;
        setItem(itemData);

        const [catRes, popularRes] = await Promise.all([
          fetch(apiUrl(`/api/menus?category=${itemData.category_id}`)),
          fetch(apiUrl('/api/menus?popular=true'))
        ]);

        const catResult = await catRes.json();
        const popularResult = await popularRes.json();

        if (catResult.success) {
          setCategoryItems(catResult.data.filter(i => i.id !== id).slice(0, 4));
        }
        if (popularResult.success) {
          setPopularItems(popularResult.data.filter(i => i.id !== id).slice(0, 4));
        }
      } catch (err) {
        console.error('Failed to fetch menu details:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, [id]);

  useEffect(() => {
    if (isLoading || !item) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [item, isLoading]);

  const ingredients = item?.ingredients
    ? (typeof item.ingredients === 'string' ? JSON.parse(item.ingredients) : item.ingredients)
    : [];

  if (isLoading) {
    return (
      <div className="elegencia-dark-theme">
        <DarkHeader />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Loader2 size={40} color="var(--ak-gold)" className="animate-spin" />
        </div>
        <DarkFooter />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="elegencia-dark-theme">
        <DarkHeader />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: 'var(--ak-text-muted)', fontSize: '1.2rem' }}>Item not found.</p>
          <Link to="/menu" className="text-btn1">Back to Menu</Link>
        </div>
        <DarkFooter />
      </div>
    );
  }

  return (
    <div className="elegencia-dark-theme">
      <DarkHeader />

      {/* Hero Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="about-hero-breadcrumb ak-reveal-fade">
            <Link to="/">Home</Link> / <Link to="/menu">Menu</Link> / <span>{item.title}</span>
          </div>
          <h1 className="about-hero-title ak-reveal">{item.title}</h1>
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
                  src={getImageUrl(item.image_url)}
                  alt={item.title}
                  style={{ width: '100%', height: '450px', display: 'block', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'var(--ak-gold)', color: '#0A0D0E', padding: '8px 20px', fontWeight: '700', borderRadius: '4px', fontSize: '1.2rem', fontFamily: 'Cinzel, serif' }}>
                  {item.price}
                </div>
                {(item.is_popular === 1 || item.is_popular === true) && (
                  <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(229, 169, 60, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(229, 169, 60, 0.4)', color: 'var(--ak-gold)', padding: '5px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    &#9733; Popular
                  </div>
                )}
              </div>
            </div>

            {/* Category & Title */}
            <div className="ak-section-subtitle ak-reveal" style={{ marginBottom: '15px' }}>
              {item.category_name || 'Ayurvedic Specialty'}
            </div>
            <h2 className="ak-section-title ak-reveal delay-1" style={{ fontSize: '2.8rem', color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.2 }}>
              {item.title}
            </h2>

            {/* Benefit Badge */}
            {item.benefit && (
              <div className="ak-reveal delay-2" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(229, 169, 60, 0.1)', border: '1px solid rgba(229, 169, 60, 0.25)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
                <span style={{ color: 'var(--ak-gold)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  ✦ {item.benefit}
                </span>
              </div>
            )}

            {/* Short Description */}
            <p className="ak-reveal delay-2" style={{ fontSize: '1.05rem', color: 'var(--ak-text-muted)', marginBottom: '24px', lineHeight: 1.8 }}>
              {item.short_description}
            </p>

            {/* Long Description */}
            {item.long_description && (
              <p className="ak-reveal delay-3" style={{ fontSize: '1.05rem', color: 'var(--ak-text-muted)', marginBottom: '36px', lineHeight: 1.8 }}>
                {item.long_description}
              </p>
            )}

            {/* Ingredients */}
            {ingredients.length > 0 && (
              <>
                <h3 className="ak-reveal" style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '20px' }}>
                  Key Ingredients & Benefits
                </h3>
                <div className="ak-reveal delay-1" style={{ background: 'rgba(10, 13, 14, 0.4)', padding: '24px', border: '1px solid rgba(255,210,141,0.1)', borderRadius: '8px', marginBottom: '40px' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {ingredients.map((ing, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#D2D8DD', fontSize: '1rem' }}>
                        <CheckCircle2 size={20} color="var(--ak-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span><strong>{ing}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* CTA */}
            <div className="ak-reveal delay-2" style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              <Link to="/contact#contact-form" className="text-btn1">ORDER AT TABLE</Link>
              <Link to="/menu" className="text-btn1" style={{ background: 'transparent', border: '1px solid rgba(229,169,60,0.3)', color: 'var(--ak-gold)' }}>† Back to Menu</Link>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="ak-menu-details-sidebar">

            {/* Search Widget */}
            <div className="ak-sidebar-widget ak-reveal">
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search Menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate('/menu'); }}
                  style={{ width: '100%', padding: '14px 45px 14px 20px', background: 'transparent', border: '1px solid rgba(255, 210, 141, 0.2)', borderRadius: '6px', color: '#FFF', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }}
                />
                <Search size={18} color="var(--ak-gold)" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>

            {/* Other Items in Category */}
            {categoryItems.length > 0 && (
              <div className="ak-sidebar-widget ak-reveal delay-1" style={{ background: '#0D1113', padding: '30px 24px', borderRadius: '12px', marginTop: '30px', border: '1px solid rgba(255, 210, 141, 0.05)' }}>
                <h4 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '24px', fontFamily: 'var(--ak-font-title)' }}>
                  More from this Category
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {categoryItems.map(catItem => (
                    <SidebarItemCard key={catItem.id} item={catItem} />
                  ))}
                </div>
                <Link to="/menu" style={{ display: 'inline-block', marginTop: '24px', color: 'var(--ak-gold)', fontSize: '0.95rem', fontWeight: '600', textDecoration: 'none', borderBottom: '1px solid var(--ak-gold)', paddingBottom: '2px' }}>
                  View Full Menu †’
                </Link>
              </div>
            )}

            {/* Popular Items */}
            {popularItems.length > 0 && (
              <div className="ak-sidebar-widget ak-reveal delay-2" style={{ background: '#0D1113', padding: '30px 24px', borderRadius: '12px', marginTop: '30px', border: '1px solid rgba(255, 210, 141, 0.05)' }}>
                <h4 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '24px', fontFamily: 'var(--ak-font-title)' }}>
                  Popular Food Items
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {popularItems.map(popItem => (
                    <SidebarItemCard key={popItem.id} item={popItem} />
                  ))}
                </div>
                <Link to="/menu" style={{ display: 'inline-block', marginTop: '24px', color: 'var(--ak-gold)', fontSize: '0.95rem', fontWeight: '600', textDecoration: 'none', borderBottom: '1px solid var(--ak-gold)', paddingBottom: '2px' }}>
                  View More †’
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="ak-height-130"></div>
      <DarkFooter />
    </div>
  );
}
