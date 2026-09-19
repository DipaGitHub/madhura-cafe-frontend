import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import '../styles/dark.css';

const menuData = [
  {
    id: 'beverages',
    title: 'Beverages',
    subtitle: 'Healing Elixirs & Traditional Drinks',
    parallaxImg: '/images/parallax/kanji_sherbet_1789821913031.jpg',
    items: [
      {
        id: 1,
        name: 'Brahmi Infused Herbal Brew',
        price: '₹180',
        description: 'Ancient Ayurvedic memory and focus enhancement herbal decoction brewed with fresh Brahmi and wildflower honey.',
        badge: 'Enhances cognitive clarity',
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 2,
        name: 'Ashwagandha Golden Milk',
        price: '₹220',
        description: 'Slow-simmered farm-fresh A2 milk with organic turmeric root, black pepper extract, and restorative Ashwagandha.',
        badge: 'Deep stress relief',
        img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 3,
        name: 'Traditional Kanji Sherbet',
        price: '₹150',
        description: 'A fermented probiotic drink made from black carrots, mustard seeds, and Himalayan pink salt. Excellent for gut health.',
        badge: 'Probiotic & Digestive',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      }
    ]
  },
  {
    id: 'appetizers',
    title: 'Appetizers',
    subtitle: 'Crisp & Wholesome Starters',
    parallaxImg: '/images/parallax/indian_appetizers_1789821998310.jpg',
    items: [
      {
        id: 4,
        name: 'Sprouted Moong & Moringa Tikki',
        price: '₹280',
        description: 'Crisp golden patties made with protein-rich sprouted lentils, drumstick leaves, and digestive cumin seeds.',
        badge: 'Rich in plant protein',
        img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 5,
        name: 'Beetroot & Peanut Samosa',
        price: '₹240',
        description: 'Baked rustic samosas filled with earthy beetroot, crushed roasted peanuts, and tempered with mustard seeds.',
        badge: 'High in Iron',
        img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
      }
    ]
  },
  {
    id: 'main-course',
    title: 'Main Course',
    subtitle: 'Sattvic & Nourishing Meals',
    parallaxImg: '/images/parallax/indian_thali_main_1789822013314.jpg',
    items: [
      {
        id: 6,
        name: 'Sattvic Ragi & Vegetable Platter',
        price: '₹340',
        description: 'Nutritious finger millet dumplings served alongside freshly pressed coconut curry and organic farm greens.',
        badge: 'High fiber',
        img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 7,
        name: 'Panchmel Dal & Bajra Roti',
        price: '₹320',
        description: 'A slow-cooked blend of five lentils tempered with pure cow ghee, served with pearl millet flatbreads.',
        badge: 'Complete Protein',
        img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'Guilt-Free Sweet Indulgence',
    parallaxImg: '/images/parallax/indian_desserts_1789822033184.jpg',
    items: [
      {
        id: 8,
        name: 'Jaggery & Cardamom Amla Halwa',
        price: '₹210',
        description: 'Slow-cooked Indian gooseberry compote sweetened with chemical-free palm jaggery and green cardamom.',
        badge: 'Loaded with Vitamin C',
        img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 9,
        name: 'Saffron & Pistachio Kheer',
        price: '₹250',
        description: 'Fragrant rice pudding cooked in almond milk, infused with Kashmiri saffron strands and crushed pistachios.',
        badge: 'Cooling & Rejuvenating',
        img: 'https://images.unsplash.com/photo-1551881192-002d02cb146e?auto=format&fit=crop&w=600&q=80',
      }
    ]
  }
];

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
      to="/menu-details" 
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
  // IntersectionObserver for all reveal animations site-wide
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
      '.ak-interactive-menu-row, .ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      {menuData.map((category) => (
        <section key={category.id} id={category.id}>
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
