import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import '../styles/dark.css';

// Dynamic data fetched from API
import { apiUrl, imageUrl } from '../config/api';

// Fallback parallax image if a category has no image set
const FALLBACK_PARALLAX = '/images/parallax/indian_thali_main_1789822013314.jpg';

// Reusable Menu Row Component with Hover Portal and Scroll-linked Animation
const MenuRow = ({ item, idx }) => {
  const [mouseX, setMouseX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const rowRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      to={`/menu-details/${item.id}`}
      className="ak-menu-list-section-1 ak-interactive-menu-row ak-reveal"
      style={{ animationDelay: `${idx * 0.08}s` }}
      onMouseMove={handleMouseMove}
      ref={rowRef}
    >
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
          <div><p>{item.description}</p></div>
          <div className="food-menu-extra-badge"><p>{item.badge}</p></div>
        </div>
      </div>
    </Link>
  );
};

export default function DarkMenu() {
  const [scrollY, setScrollY] = useState(0);
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Smooth Scroll Listener
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

  // Fetch Menu Data
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const [catRes, itemsRes] = await Promise.all([
          fetch(apiUrl('/api/menus/categories')),
          fetch(apiUrl('/api/menus'))
        ]);
        
        const catResult = await catRes.json();
        const itemsResult = await itemsRes.json();
        
        if (catResult.success && itemsResult.success) {
          const categories = catResult.data;
          const items = itemsResult.data;
          
          // Group items by category
          const groupedData = categories.map(cat => {
            const catItems = items.filter(item => item.category_id === cat.id);
            return {
              id: cat.id,
              title: cat.name,
              subtitle: cat.description,
              parallaxImg: cat.image_url
                ? (cat.image_url.startsWith('http') ? cat.image_url : cat.image_url)
                : FALLBACK_PARALLAX,
              items: catItems.map(item => ({
                id: item.id,
                name: item.title,
                price: item.price,
                description: item.short_description,
                badge: item.benefit,
                img: item.image_url.startsWith('http') ? item.image_url : imageUrl(item.image_url)
              }))
            };
          }).filter(group => group.items.length > 0); // Only show categories with items
          
          setMenuData(groupedData);
        }
      } catch (err) {
        console.error('Failed to fetch menu:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMenus();
  }, []);

  // IntersectionObserver for all reveal animations site-wide
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
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(
      '.ak-interactive-menu-row, .ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [menuData]);

  return (
    <div className="elegencia-dark-theme">
      <DarkHeader />

      {/* Page Title Banner */}
      <section className="about-hero-banner">
        <div className="about-hero-overlay"></div>
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="about-hero-breadcrumb ak-reveal-fade">
            <Link to="/">Home</Link> / <span>Our Menu</span>
          </div>
          <h1 className="about-hero-title ak-reveal">Our Menu</h1>
        </div>
      </section>

      {/* Categories with Parallax */}
      {isLoading ? (
        <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
          <p className="text-amber-500 font-serif text-xl">Preparing our artisanal menu...</p>
        </div>
      ) : menuData.map((category, catIdx) => (
        <section
          key={category.id}
          id={category.id.toString()}
          className="ak-menu-category-section"
        >
          {/* Category Parallax Banner */}
          <div 
            className="ak-menu-category-parallax" 
            style={{ backgroundImage: `url(${category.parallaxImg})` }}
          >
            <div className="ak-menu-category-overlay"></div>
            <div className="ak-menu-category-content">
              <div className="ak-menu-category-subtitle ak-reveal">{category.subtitle}</div>
              <h2 className="ak-menu-category-title ak-reveal delay-1">{category.title}</h2>
              <img src="/images/patterns/lotus-divider.svg" alt="Lotus Divider" className="ak-lotus-divider ak-reveal delay-2" style={{ marginTop: '15px' }} />
            </div>
          </div>

          <div className="ak-height-100 ak-height-lg-60"></div>

          {/* Category Menu List */}
          <div className="container">
            <div className="ak-menu-list ak-interactive-menu-list">
              {category.items.map((item, idx) => (
                <MenuRow key={item.id} item={item} idx={idx} />
              ))}
            </div>
          </div>
          
          <div className="ak-height-100 ak-height-lg-60"></div>
        </section>
      ))}

      <DarkFooter />
    </div>
  );
}
