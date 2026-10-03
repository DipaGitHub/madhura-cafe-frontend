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
          <div dangerouslySetInnerHTML={{ __html: item.description }} className="html-description" />
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

  // Drag-to-scroll state for categories
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Carousel arrows + active tab tracking
  const barRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scrollTabs = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: 'smooth' });
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [menuData]);

  useEffect(() => {
    if (menuData.length === 0) return;
    const onScroll = () => {
      const barH = barRef.current ? barRef.current.offsetHeight : 60;
      let current = null;
      for (const cat of menuData) {
        const el = document.getElementById(cat.id.toString());
        if (el && el.getBoundingClientRect().top <= barH + 40) current = cat.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuData]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || activeId === null) return;
    const btn = el.querySelector(`[data-tab-id="${activeId}"]`);
    if (btn) {
      el.scrollTo({
        left: btn.offsetLeft - (el.clientWidth - btn.offsetWidth) / 2,
        behavior: 'smooth'
      });
    }
  }, [activeId]);

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
                ? (cat.image_url.startsWith('http') ? cat.image_url : imageUrl(cat.image_url))
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
          <div className="about-hero-breadcrumb">
            <Link to="/">Home</Link> / <span>Our Menu</span>
          </div>
          <h1 className="about-hero-title">Our Menu</h1>
        </div>
      </section>

      {/* Sticky Category Tabs */}
      {!isLoading && menuData.length > 0 && (
        <div className="sticky-category-tabs-container" ref={barRef}>
          <div className="sticky-category-tabs-wrap">
            <button
              type="button"
              aria-label="Scroll categories left"
              className={`category-tab-arrow left ${canLeft ? '' : 'hidden'}`}
              onClick={() => scrollTabs(-1)}
            >
              ‹
            </button>
            <div 
              className={`sticky-category-tabs-scroll ${isDown ? 'active' : ''}`}
              ref={scrollRef}
              onScroll={updateArrows}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
            >
              {menuData.map(category => (
                <button
                  key={`tab-${category.id}`}
                  data-tab-id={category.id}
                  className={`category-tab-btn ${activeId === category.id ? 'active' : ''}`}
                  onClick={() => {
                    const element = document.getElementById(category.id.toString());
                    if (element) {
                      // Offset by the sticky bar's real height
                      const barH = barRef.current ? barRef.current.offsetHeight : 60;
                      const y = element.getBoundingClientRect().top + window.scrollY - barH;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Scroll categories right"
              className={`category-tab-arrow right ${canRight ? '' : 'hidden'}`}
              onClick={() => scrollTabs(1)}
            >
              ›
            </button>
          </div>
        </div>
      )}

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
              <img src={`${import.meta.env.BASE_URL}images/patterns/lotus-divider.svg`} alt="Lotus Divider" className="ak-lotus-divider ak-reveal delay-2" style={{ marginTop: '15px' }} />
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
