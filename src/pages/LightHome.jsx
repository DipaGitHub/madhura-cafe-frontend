import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/light.css';

export default function LightHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('breakfasts');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeGallerySlide, setActiveGallerySlide] = useState(0);
  const [activeInteriorSlide, setActiveInteriorSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const heroSlides = [
    {
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
      title: 'Artisanal Roastery'
    },
    {
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
      title: 'Master Viennoiserie'
    }
  ];

  // Auto-Slide Effect for Right Hero Media (every 4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const interiorSlides = [
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1400&auto=format&fit=crop'
  ];

  // Auto-Slide Effect for Interior Gallery (every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveInteriorSlide((prev) => (prev + 1) % interiorSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [interiorSlides.length]);

  const testimonials = [
    {
      text: "At integer duis duis enim, auctor ultrices eu, natoque eget. Leo aliquam egestas ac ac suspendisse auctor nunc. Lectus vitae, quis libero sit lorem. Best cafe in the city!",
      name: "Kristin Watson"
    },
    {
      text: "Leo aliquam duis duis enim, auctor ultrices eu, natoque eget. Madhura Cafe has redefined specialty coffee and sourdough baking for us.",
      name: "Derek Smith"
    },
    {
      text: "Quis auctor nunc, auctor ultrices eu, natoque eget. Stunning atmosphere, exceptional service, and delicious brunch items.",
      name: "Mary Lynn"
    }
  ];

  // Auto-Slide Effect for Testimonials (every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const gallerySlides = [
    'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop'
  ];

  const menuItems = {
    starters: [
      { name: "Pate with Mushrooms", price: "$15", desc: "Mushrooms, Toast, Garlic Sauce" },
      { name: "Cheese Slices", price: "$25", desc: "Parmesan, Mascarpone, Mozzarella" },
      { name: "Spicy Chicken Wings", price: "$30", desc: "Chicken Wings, Sesame Seeds, Spicy Sauce", spicy: true },
      { name: "Shrimps in Butter", price: "$18", desc: "Shrimps, Sauce, Herbs" },
      { name: "Cold Cuts Platter", price: "$32", desc: "Balyk, Prosciutto, Boiled Pork" },
      { name: "Pita Bread with Greens", price: "$28", desc: "Lavash, Greens, Tomato, Cucumber, Sauce", vegan: true },
      { name: "Assorted Garden Vegetables", price: "$10", desc: "Cucumbers, Tomatoes, Peppers, Olives", vegan: true },
      { name: "Toast with Smoked Salmon", price: "$15", desc: "Bread, Flax, Herbs, Sauce, Salmon" }
    ],
    breakfasts: [
      { name: "Full English Breakfast", price: "$25", desc: "Bacon or breakfast sausage, eggs your way, grilled tomato, toast" },
      { name: "Classic American Pancakes", price: "$18", desc: "Buttermilk waffles or pancakes, maple syrup, crispy bacon", spicy: false },
      { name: "Nutella Brioche French Toast", price: "$16", desc: "Fresh berries, whipped cream, caramelized banana" },
      { name: "Artisan Avocado Toast", price: "$16", desc: "Sourdough bread, poached eggs, feta, light organic salad", vegan: true },
      { name: "Fluffy Buttermilk Pancakes", price: "$12", desc: "Fresh fruit, Canadian maple syrup, whipped butter" },
      { name: "Huevos Rancheros", price: "$16", desc: "Scrambled eggs, avocado, feta cheese, fiery ranchero sauce", spicy: true },
      { name: "Avenue Club Sandwich", price: "$19", desc: "Grilled chicken, melted cheddar, bacon, avocado, heirloom tomato" },
      { name: "Truffle Penne Alfredo", price: "$24", desc: "Penne in creamy parmesan alfredo sauce with herb grilled chicken" }
    ],
    desserts: [
      { name: "Nutella Belgian Chocolate", price: "$12", desc: "Rich hazelnut chocolate ganache", vegan: true },
      { name: "Romeo and Juliet Crepe", price: "$15", desc: "Nutella, sliced bananas, fresh strawberries", vegan: true },
      { name: "Very Berry Parfait", price: "$15", desc: "Greek yogurt, honey, fresh raspberries, blueberries", vegan: true },
      { name: "Almond Biscotti", price: "$14", desc: "Double baked Italian biscuits, espresso dip" },
      { name: "Warm Fudge Brownie", price: "$15", desc: "Chocolate chip brownie, warm hazelnut drizzle" },
      { name: "Grand Brownie Sundae", price: "$15", desc: "Vanilla bean ice cream, hot chocolate fudge" },
      { name: "New York Cheese Cake", price: "$10", desc: "Vanilla sour cream, wild strawberry coulis" },
      { name: "Tropical Fruit Bowl", price: "$14", desc: "Greek yogurt, organic honey, mango, banana" }
    ],
    beverages: [
      { name: "Strawberry Lychee Spritzer", price: "$13", desc: "Strawberries, Lychee Juice, Lime Juice, Ginger Beer" },
      { name: "Blueberry Mint Mojito", price: "$13", desc: "Blueberries, Fresh Mint, Lime Juice, Club Soda" },
      { name: "Spicy Citrus Rita", price: "$15", desc: "Spicy citrus mix topped with chili rim", spicy: true },
      { name: "Puebla Smoked Old Fashioned", price: "$15", desc: "Oak bitters, brown sugar, sweet luxardo cherry" },
      { name: "Santorini Herbal Cooler", price: "$15", desc: "Dry botanicals, fresh thyme, lime wheel, sparkling soda" },
      { name: "Tropical Vanilla Cooler", price: "$17", desc: "Madagascan vanilla, mango, pineapple, elderflower" },
      { name: "Dark & Stormy Brew", price: "$17", desc: "Spiced cold brew, ginger beer, fig slices, fresh thyme" },
      { name: "Maple Reserve Cold Brew", price: "$17", desc: "Slow steeped single-origin, maple syrup, angostura" }
    ]
  };

  return (
    <div className="light-theme-cafert">
      {/* HEADER */}
      <header className="header" data-page="home2">
        <div className="container d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap">
          <Link className="logo h3" to="/design-1">
            <span className="logo_img">
              <svg width="50" height="56" viewBox="0 0 67 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.56 4.2C65.56 5.85333 64.9467 7.77333 63.72 9.96C62.5467 12.0933 60.7867 14.36 58.44 16.76C56.1467 19.16 53.32 21.64 49.96 24.2C46.6 26.7067 42.7867 29.16 38.52 31.56C37.0267 34.28 35.6933 36.76 34.52 39C33.4 41.1867 32.3067 43.5067 31.24 45.96C31.1333 46.2267 31.1067 46.3867 31.16 46.44C31.2133 46.44 31.32 46.36 31.48 46.2C32.8133 44.6 34.3867 42.9733 36.2 41.32C38.0133 39.6133 39.8533 38.3333 41.72 37.48C42.04 37.3733 42.28 37.32 42.44 37.32C42.8667 37.32 43.1867 37.5067 43.4 37.88C43.6667 38.2533 43.8 38.5467 43.8 38.76C43.8 38.9733 43.6667 39.4533 43.4 40.2C43.1333 40.9467 42.7867 41.8 42.36 42.76C41.9333 43.72 41.4533 44.76 40.92 45.88C40.44 46.9467 39.96 47.96 39.48 48.92C39 49.8267 38.44 50.8933 37.8 52.12C37.16 53.2933 36.4933 54.4667 35.8 55.64C35.1067 56.8667 34.4133 58.0133 33.72 59.08C33.08 60.2 32.4667 61.16 31.88 61.96C29.5867 65.16 27.24 67.72 24.84 69.64C22.4933 71.6133 19.9867 73.0533 17.32 73.96C14.8667 74.8133 12.52 75.24 10.28 75.24C8.78667 75.24 7.34667 75.0533 5.96 74.68C4.52 74.36 3.21333 73.8267 2.04 73.08C1.66667 72.8133 1.45333 72.52 1.4 72.2C1.29333 71.9333 1.21333 71.5867 1.16 71.16C1.16 70.9467 1.13333 70.6267 1.08 70.2C1.02667 69.8267 0.973333 69.4267 0.92 69C0.866667 68.6267 0.813334 68.2533 0.76 67.88C0.706667 67.5067 0.68 67.24 0.68 67.08C0.68 66.6 0.893334 66.4133 1.32 66.52C1.32 67.1067 1.48 67.8267 1.8 68.68C2.06667 69.5333 2.6 70.3867 3.4 71.24C4.14667 72.0933 5.18667 72.8133 6.52 73.4C7.8 73.9867 9.42667 74.28 11.4 74.28C13.0533 74.28 14.9467 73.96 17.08 73.32C19.6933 72.5733 22.04 71.16 24.12 69.08C26.2 67 28.2 64.52 30.12 61.64C31.08 60.2 32.04 58.5733 33 56.76C33.96 55 34.84 53.2667 35.64 51.56C36.44 49.8533 37.1067 48.3333 37.64 47C38.2267 45.6133 38.6 44.6533 38.76 44.12C39.1333 43.0533 39.3733 42.2533 39.48 41.72C39.5867 41.1333 39.64 40.7067 39.64 40.44C39.64 40.0667 39.5067 39.88 39.24 39.88C39.0267 39.88 38.3867 40.3067 37.32 41.16C36.3067 41.96 35.2133 42.9733 34.04 44.2C32.92 45.3733 31.9067 46.68 31 48.12C30.0933 49.5067 29.64 50.8133 29.64 52.04C29.64 52.4667 29.6667 52.84 29.72 53.16C29.7733 53.48 29.8 53.6933 29.8 53.8C29.8 54.0667 29.4 54.3067 28.6 54.52C27.8533 54.7333 27.1067 55.0533 26.36 55.48C26.1467 55.48 26.04 55.2667 26.04 54.84C26.04 54.2 26.04 53.6933 26.04 53.32C26.04 52.8933 26.0933 52.4133 26.2 51.88C26.36 51.2933 26.6 50.6 26.92 49.8C27.2933 49 27.8533 47.9067 28.6 46.52C29.3467 45.08 30.3067 43.2667 31.48 41.08C32.6533 38.84 34.12 36.0933 35.88 32.84C33.6933 33.96 31.32 35 28.76 35.96C26.2 36.92 23.48 37.72 20.6 38.36C20.12 39.16 19.5333 40.1733 18.84 41.4C18.1467 42.5733 17.48 43.8267 16.84 45.16C16.2533 46.44 15.7467 47.72 15.32 49C14.8933 50.28 14.68 51.4 14.68 52.36C14.68 53.2667 14.7867 53.9333 15 54.36C15.2133 54.7867 15.6667 55 16.36 55C17.1067 55 17.8533 54.84 18.6 54.52C19.4 54.2 20.4133 53.6933 21.64 53C21.8 52.8933 21.9333 52.92 22.04 53.08C22.1467 53.1867 22.1467 53.32 22.04 53.48C18.52 55.6133 15.6933 56.68 13.56 56.68C12.92 56.68 12.36 56.52 11.88 56.2C11.4 55.88 11.16 55 11.16 53.56C11.16 52.92 11.3733 52.04 11.8 50.92C12.28 49.7467 12.84 48.4667 13.48 47.08C14.1733 45.6933 14.8933 44.28 15.64 42.84C16.3867 41.3467 17.0533 39.96 17.64 38.68C16.52 38.9467 15.1333 39.16 13.48 39.32C11.8267 39.4267 10.3333 39.5067 9 39.56C8.78667 39.56 8.68 39.48 8.68 39.32C8.68 39 9 38.84 9.64 38.84C10.2267 38.84 10.9467 38.84 11.8 38.84C12.6533 38.7867 13.48 38.7333 14.28 38.68C15.1333 38.5733 15.9067 38.4667 16.6 38.36C17.3467 38.2533 17.8267 38.1467 18.04 38.04C18.52 37.2933 19.0533 36.4667 19.64 35.56C20.2267 34.6533 20.8133 33.7733 21.4 32.92C21.9867 32.0133 22.52 31.2133 23 30.52C23.5333 29.8267 23.9333 29.3733 24.2 29.16C24.6267 28.8933 25.24 28.6533 26.04 28.44C26.8933 28.1733 27.6667 27.9333 28.36 27.72C28.6267 27.72 28.7333 27.8 28.68 27.96C28.6267 28.12 28.52 28.2533 28.36 28.36C27.9867 28.4667 27.56 28.68 27.08 29C26.6533 29.2667 26.3067 29.5867 26.04 29.96C25.4 30.76 24.6533 31.8 23.8 33.08C23 34.3067 22.0667 35.8267 21 37.64C23.24 37.2133 25.6667 36.52 28.28 35.56C30.9467 34.6 33.5867 33.4267 36.2 32.04C36.9467 30.7067 37.7733 29.1867 38.68 27.48C39.5867 25.7733 40.52 24.04 41.48 22.28C42.4933 20.52 43.4533 18.8133 44.36 17.16C45.32 15.5067 46.2 14.0933 47 12.92C48.12 11.2133 49.32 9.61333 50.6 8.12C51.88 6.62667 53.1867 5.34667 54.52 4.28C55.9067 3.16 57.2667 2.28 58.6 1.64C59.9867 1 61.32 0.68 62.6 0.68C63.2933 0.68 63.96 0.866667 64.6 1.24C65.24 1.56 65.56 2.52 65.56 4.12V4.2Z" fill="currentColor" />
              </svg>
            </span>
            Madhura
          </Link>

          <nav className={`header_nav text--medium text--md collapse ${mobileMenuOpen ? 'show' : ''}`} id="headerMenu">
            <ul className="header_nav-list">
              <li className="header_nav-list_item">
                <Link className="nav-item nav-link current" to="/design-1" style={{ color: '#b38e6a' }}>
                  <span className="nav-item_text">Home</span>
                </Link>
              </li>
              <li className="header_nav-list_item">
                <Link className="nav-item nav-link" to="/design-1/about">
                  <span className="nav-item_text">About</span>
                </Link>
              </li>
              <li className="header_nav-list_item">
                <a className="nav-item nav-link" href="#menu">
                  <span className="nav-item_text">Menu</span>
                </a>
              </li>
              <li className="header_nav-list_item">
                <a className="nav-item nav-link" href="#services">
                  <span className="nav-item_text">Services</span>
                </a>
              </li>
              <li className="header_nav-list_item">
                <a className="nav-item nav-link" href="#team">
                  <span className="nav-item_text">Team</span>
                </a>
              </li>
              <li className="header_nav-list_item">
                <a className="nav-item nav-link" href="#contacts">
                  <span className="nav-item_text">Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>

          <button
            className={`header_trigger ${mobileMenuOpen ? 'active' : ''}`}
            id="headerTrigger"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line line--short"></span>
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION - FULL-BLEED 50/50 SPLIT (MATCHING CAFERT INDEX2) */}
        <section className="light-hero-split-section">
          <div className="light-hero-split-grid">

            {/* Left Content Column with Beige Background & Watermark */}
            <div className="light-hero-left-content">
              <span className="light-hero-subtitle">
                PRIVATE EVENTS
              </span>
              <h1 className="light-hero-main-title">
                We Love<br />What We Do
              </h1>
              <p className="light-hero-text">
                Est elit mollis pretium mattis orci hendrerit migo faucibus nisi morbi pellentesque.
              </p>
              <div className="light-hero-btn-group">
                <a className="light-hero-btn-solid" href="#menu">View menu</a>
                <a className="light-hero-btn-outline" href="#contacts">Reservations</a>
              </div>
            </div>

            {/* Right Full-Bleed Sliding Media Column */}
            <div className="light-hero-right-media">
              <img
                key={activeHeroSlide}
                src={heroSlides[activeHeroSlide].img}
                alt={heroSlides[activeHeroSlide].title}
                className="light-hero-split-img light-hero-fade"
              />
              <div className="light-hero-slider-dots">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveHeroSlide(i)}
                    className={`light-hero-dot ${activeHeroSlide === i ? 'active' : ''}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* AMBIENT QUOTE BANNER */}
        <section className="banner section" style={{ background: '#f5eee6', padding: '60px 0', borderTop: '1px solid #ECE5DD', borderBottom: '1px solid #ECE5DD' }}>
          <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
            <h3 className="banner_main h3" style={{ fontSize: '28px', color: '#534931', fontWeight: 600, lineHeight: '1.5', margin: 0, fontStyle: 'italic' }}>
              "Madhura brings together. Here people close to each other meet, share smiles and experience bright moments."
            </h3>
          </div>
        </section>

        {/* ABOUT SECTION (WHY CHOOSE US - 50/50 FULL-BLEED SPLIT) */}
        <section className="light-about-split-section">
          <div className="light-about-split-grid">
            
            {/* Left Full-Bleed Media Column */}
            <div className="light-about-left-media">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
                alt="Why Choose Us Cafe Interior"
                className="light-about-split-img"
              />
            </div>

            {/* Right Content Column */}
            <div className="light-about-right-content">
              <div className="light-about-text-wrap">
                <span className="section_header-subtitle">ABOUT US</span>
                <h2 className="section_header-title h2" style={{ fontSize: '42px', margin: '14px 0 20px', color: '#534931', fontWeight: 700 }}>
                  Why Choose Us
                </h2>
                <p className="section_header-text text--md" style={{ color: '#786C63', lineHeight: '1.75', marginBottom: '35px', maxWidth: '540px' }}>
                  We are devoted to the art of fine dining, micro-lot coffee sourcing, and authentic artisanal sourdough pastries prepared fresh daily in our open bakery.
                </p>
                <div style={{ marginBottom: '45px' }}>
                  <Link className="btn" to="/design-1/about">About us</Link>
                </div>
              </div>

              {/* Counter Strip - Seamless Flush Attached Blocks */}
              <div className="light-about-counter-strip">
                <div className="light-counter-box light-counter-1">
                  <span className="light-counter-num">5934</span>
                  <span className="light-counter-label">SERVED DISHES</span>
                </div>
                <div className="light-counter-box light-counter-2">
                  <span className="light-counter-num">9211</span>
                  <span className="light-counter-label">SERVED CUSTOMERS</span>
                </div>
                <div className="light-counter-box light-counter-3">
                  <span className="light-counter-num">8672</span>
                  <span className="light-counter-label">MASTER COFFEES</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SPECIAL MENU TABS SECTION */}
        <section className="menu section" id="menu" style={{ background: '#fcfaf7', padding: '90px 0' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
            <div className="section_header centered" style={{ textAlign: 'center', marginBottom: '45px' }}>
              <span className="section_header-subtitle">Our menu</span>
              <h2 className="section_header-title h2" style={{ fontSize: '38px', margin: '10px 0' }}>Special Menu</h2>
              <p className="section_header-text text--md">Savor our curated selection of savory breakfast platters, decadent pastries, and refreshing craft mocktails.</p>
            </div>

            {/* Menu Nav Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
              {['starters', 'breakfasts', 'desserts', 'beverages'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMenuTab(tab)}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '30px',
                    border: activeMenuTab === tab ? '2px solid #b38e6a' : '1px solid #ECE5DD',
                    background: activeMenuTab === tab ? '#b38e6a' : '#fff',
                    color: activeMenuTab === tab ? '#fff' : '#534931',
                    fontSize: '15px',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Menu Grid (2 Columns) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px 40px' }}>
              {menuItems[activeMenuTab].map((item, idx) => (
                <div key={idx} style={{ borderBottom: '1px dashed #c3b2a5', paddingBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <h5 style={{ margin: 0, fontSize: '18px', color: '#534931', fontWeight: 600 }}>
                      {item.name}
                      {item.spicy && <span style={{ marginLeft: '8px', fontSize: '12px', color: '#d9534f', fontWeight: 700 }}>🌶️ SPICY</span>}
                      {item.vegan && <span style={{ marginLeft: '8px', fontSize: '12px', color: '#5cb85c', fontWeight: 700 }}>🌱 VEGAN</span>}
                    </h5>
                    <span style={{ fontSize: '18px', color: '#b38e6a', fontWeight: 700 }}>{item.price}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', color: '#786C63' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION & BIRTHDAY BANNER */}
        <section className="services section" id="services" style={{ padding: '90px 0', background: '#fff' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div className="section_header centered" style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span className="section_header-subtitle">our services</span>
              <h2 className="section_header-title h2" style={{ fontSize: '38px', margin: '10px 0' }}>We Hold Events</h2>
              <p className="section_header-text text--md">From intimate birthday celebrations to corporate networking brunches, our dedicated event specialists ensure every detail is flawless.</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'stretch', marginBottom: '70px' }}>
              {/* Promo Banner */}
              <div style={{
                flex: '1 1 380px',
                background: 'linear-gradient(rgba(83,73,49,0.7), rgba(83,73,49,0.7)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop) center/cover',
                padding: '50px 35px',
                borderRadius: '6px',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '25px', lineHeight: '1.3' }}>Give 10% on the Menu on Your Birthday</h3>
                <a className="btn" href="#contacts" style={{ background: '#b38e6a', color: '#fff' }}>Contact us</a>
              </div>

              {/* Service 4 Cards */}
              <div style={{ flex: '2 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
                {[
                  { num: '01 service', title: 'Holiday Parties', desc: 'Custom holiday menu curations and handcrafted winter warmers.' },
                  { num: '02 service', title: 'Stage & Ambient Decor', desc: 'Elegantly arranged floral decor, atmospheric warm lighting, and music.' },
                  { num: '03 service', title: 'Anniversaries', desc: 'Candlelit tables, private chef course tastings, and champagne service.' },
                  { num: '04 service', title: 'Live Acoustic Sets', desc: 'Weekend jazz and live acoustic sessions to accompany your dinner.' }
                ].map((s, idx) => (
                  <div key={idx} style={{ background: '#FAF7F2', padding: '25px 20px', borderRadius: '4px', border: '1px solid #ECE5DD' }}>
                    <span style={{ fontSize: '13px', color: '#b38e6a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{s.num}</span>
                    <h4 style={{ fontSize: '19px', color: '#534931', margin: '8px 0 10px' }}>{s.title}</h4>
                    <p style={{ fontSize: '14px', color: '#786C63', margin: 0, lineHeight: '1.6' }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Happy Moments Gallery Strip */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <div>
                  <span className="section_header-subtitle">Gallery</span>
                  <h3 className="section_header-title h3" style={{ fontSize: '26px', margin: '4px 0' }}>Happy Moments</h3>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setActiveGallerySlide((prev) => (prev > 0 ? prev - 1 : gallerySlides.length - 1))}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #b38e6a', background: '#fff', color: '#b38e6a', cursor: 'pointer' }}
                  >
                    ❮
                  </button>
                  <button
                    onClick={() => setActiveGallerySlide((prev) => (prev < gallerySlides.length - 1 ? prev + 1 : 0))}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #b38e6a', background: '#fff', color: '#b38e6a', cursor: 'pointer' }}
                  >
                    ❯
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {gallerySlides.map((img, i) => (
                  <div key={i} style={{ height: '200px', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src={img} alt="Happy Moment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS (MACARON SECTION - 50/50 FULL-BLEED SPLIT) */}
        <section className="light-testimonials-split-section">
          <div className="light-testimonials-split-grid">
            
            {/* Left Full-Bleed Media Column */}
            <div className="light-testimonials-left-media">
              <img
                src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1200&auto=format&fit=crop"
                alt="Artisanal Macarons"
                className="light-testimonials-split-img"
              />
            </div>

            {/* Right Testimonial Content Column */}
            <div className="light-testimonials-right-content">
              <div className="light-testimonials-inner">
                <span className="light-quote-mark">❝</span>
                <h2 className="section_header-title h2" style={{ fontSize: '40px', color: '#534931', margin: '10px 0 24px', fontWeight: 700 }}>
                  What They Say About Us
                </h2>
                <p className="light-testimonial-quote-text" key={activeTestimonial}>
                  "{testimonials[activeTestimonial].text}"
                </p>
                <h5 style={{ fontSize: '19px', color: '#534931', fontWeight: 700, margin: '20px 0 0' }}>
                  — {testimonials[activeTestimonial].name}
                </h5>
                <div className="light-testimonial-dots">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`light-testi-dot ${activeTestimonial === i ? 'active' : ''}`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* INTERIOR PRESENTATION CAROUSEL */}
        <section className="presentation" style={{ padding: '90px 0', background: '#fff' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '35px' }}>
              <div>
                <span className="section_header-subtitle">our gallery</span>
                <h2 className="section_header-title h2" style={{ fontSize: '36px', margin: '8px 0 0', color: '#534931', fontWeight: 700 }}>
                  Aesthetics of Our Interior
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => setActiveInteriorSlide((prev) => (prev > 0 ? prev - 1 : interiorSlides.length - 1))}
                  className="light-carousel-arrow-btn"
                  aria-label="Previous Interior Slide"
                >
                  ❮
                </button>
                <button
                  onClick={() => setActiveInteriorSlide((prev) => (prev < interiorSlides.length - 1 ? prev + 1 : 0))}
                  className="light-carousel-arrow-btn"
                  aria-label="Next Interior Slide"
                >
                  ❯
                </button>
              </div>
            </div>

            <div className="light-interior-carousel-wrapper">
              <img
                key={activeInteriorSlide}
                src={interiorSlides[activeInteriorSlide]}
                alt="Interior Aesthetics"
                className="light-interior-carousel-img light-hero-fade"
              />
              <div className="light-interior-dots">
                {interiorSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveInteriorSlide(i)}
                    className={`light-interior-dot ${activeInteriorSlide === i ? 'active' : ''}`}
                    aria-label={`Interior photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TEAM EXPERTS */}
        <section className="team section--nopb" id="team" style={{ padding: '90px 0 0', background: '#FAF7F2' }}>
          <div className="section_header centered" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
            <span className="section_header-subtitle">team</span>
            <h2 className="section_header-title h2" style={{ fontSize: '38px', margin: '10px 0' }}>Our Experts</h2>
            <p className="section_header-text text--md">Crafting every roast and delicate pastry with relentless dedication to hospitality and perfection.</p>
          </div>
          <ul className="team_list" style={{ display: 'flex', width: '100%', listStyle: 'none', padding: 0, margin: 0 }}>
            <li className="team_list-item" style={{ flex: 1, position: 'relative', height: '450px' }}>
              <div className="media" style={{ height: '100%' }}>
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" alt="Annette Black" />
              </div>
              <div className="main">
                <span className="main_position text--md">Head Pastry Chef</span>
                <span className="main_name h4">Annette Black</span>
                <p className="main_text text--md">French viennoiserie, signature sourdough, and artisanal tartes.</p>
                <ul className="main_socials">
                  <li><a className="link" href="#!"><i className="bi bi-instagram"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-facebook"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-twitter"></i></a></li>
                </ul>
              </div>
            </li>

            <li className="team_list-item" style={{ flex: 1, position: 'relative', height: '450px' }}>
              <div className="media" style={{ height: '100%' }}>
                <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop" alt="Jack White" />
              </div>
              <div className="main">
                <span className="main_position text--md">Master Roaster</span>
                <span className="main_name h4">Jack White</span>
                <p className="main_text text--md">Direct-trade estate beans and specialty single-origin roast profiles.</p>
                <ul className="main_socials">
                  <li><a className="link" href="#!"><i className="bi bi-instagram"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-facebook"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-twitter"></i></a></li>
                </ul>
              </div>
            </li>

            <li className="team_list-item" style={{ flex: 1, position: 'relative', height: '450px' }}>
              <div className="media" style={{ height: '100%' }}>
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" alt="Mike Smith" />
              </div>
              <div className="main">
                <span className="main_position text--md">Executive Chef</span>
                <span className="main_name h4">Mike Smith</span>
                <p className="main_text text--md">Gourmet brunch spreads, truffle pastas, and savory dining creations.</p>
                <ul className="main_socials">
                  <li><a className="link" href="#!"><i className="bi bi-instagram"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-facebook"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-twitter"></i></a></li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        {/* MAP */}
        <div id="map" style={{ width: '100%', height: '380px', background: '#e5dcd2', position: 'relative', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8926955074254!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(90%)' }}
            allowFullScreen=""
            loading="lazy"
            title="Madhura Cafe Location"
          ></iframe>
        </div>

        {/* INSTAGRAM MOSAIC 5-PHOTO SLIDER */}
        <div className="gallery_slider" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', width: '100%' }}>
          <div className="gallery_slider-slide">
            <a className="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop" alt="Cookies" />
            </a>
          </div>
          <div className="gallery_slider-slide">
            <a className="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop" alt="Macarons" />
            </a>
          </div>
          <div className="gallery_slider-slide">
            <a className="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=600&auto=format&fit=crop" alt="Matcha Latte" />
            </a>
          </div>
          <div className="gallery_slider-slide">
            <a className="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop" alt="Pour Over Coffee" />
            </a>
          </div>
          <div className="gallery_slider-slide">
            <a className="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop" alt="Signature Sandwich" />
            </a>
          </div>
        </div>
      </main>

      {/* 4-COLUMN FOOTER */}
      <footer className="footer section" id="contacts">
        <div className="container d-flex">
          <div className="footer_about">
            <Link className="logo h3" to="/design-1">
              <span className="logo_img">
                <svg width="50" height="56" viewBox="0 0 67 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M65.56 4.2C65.56 5.85333 64.9467 7.77333 63.72 9.96C62.5467 12.0933 60.7867 14.36 58.44 16.76C56.1467 19.16 53.32 21.64 49.96 24.2C46.6 26.7067 42.7867 29.16 38.52 31.56C37.0267 34.28 35.6933 36.76 34.52 39C33.4 41.1867 32.3067 43.5067 31.24 45.96C31.1333 46.2267 31.1067 46.3867 31.16 46.44C31.2133 46.44 31.32 46.36 31.48 46.2C32.8133 44.6 34.3867 42.9733 36.2 41.32C38.0133 39.6133 39.8533 38.3333 41.72 37.48C42.04 37.3733 42.28 37.32 42.44 37.32C42.8667 37.32 43.1867 37.5067 43.4 37.88C43.6667 38.2533 43.8 38.5467 43.8 38.76C43.8 38.9733 43.6667 39.4533 43.4 40.2C43.1333 40.9467 42.7867 41.8 42.36 42.76C41.9333 43.72 41.4533 44.76 40.92 45.88C40.44 46.9467 39.96 47.96 39.48 48.92C39 49.8267 38.44 50.8933 37.8 52.12C37.16 53.2933 36.4933 54.4667 35.8 55.64C35.1067 56.8667 34.4133 58.0133 33.72 59.08C33.08 60.2 32.4667 61.16 31.88 61.96C29.5867 65.16 27.24 67.72 24.84 69.64C22.4933 71.6133 19.9867 73.0533 17.32 73.96C14.8667 74.8133 12.52 75.24 10.28 75.24C8.78667 75.24 7.34667 75.0533 5.96 74.68C4.52 74.36 3.21333 73.8267 2.04 73.08C1.66667 72.8133 1.45333 72.52 1.4 72.2C1.29333 71.9333 1.21333 71.5867 1.16 71.16C1.16 70.9467 1.13333 70.6267 1.08 70.2C1.02667 69.8267 0.973333 69.4267 0.92 69C0.866667 68.6267 0.813334 68.2533 0.76 67.88C0.706667 67.5067 0.68 67.24 0.68 67.08C0.68 66.6 0.893334 66.4133 1.32 66.52C1.32 67.1067 1.48 67.8267 1.8 68.68C2.06667 69.5333 2.6 70.3867 3.4 71.24C4.14667 72.0933 5.18667 72.8133 6.52 73.4C7.8 73.9867 9.42667 74.28 11.4 74.28C13.0533 74.28 14.9467 73.96 17.08 73.32C19.6933 72.5733 22.04 71.16 24.12 69.08C26.2 67 28.2 64.52 30.12 61.64C31.08 60.2 32.04 58.5733 33 56.76C33.96 55 34.84 53.2667 35.64 51.56C36.44 49.8533 37.1067 48.3333 37.64 47C38.2267 45.6133 38.6 44.6533 38.76 44.12C39.1333 43.0533 39.3733 42.2533 39.48 41.72C39.5867 41.1333 39.64 40.7067 39.64 40.44C39.64 40.0667 39.5067 39.88 39.24 39.88C39.0267 39.88 38.3867 40.3067 37.32 41.16C36.3067 41.96 35.2133 42.9733 34.04 44.2C32.92 45.3733 31.9067 46.68 31 48.12C30.0933 49.5067 29.64 50.8133 29.64 52.04C29.64 52.4667 29.6667 52.84 29.72 53.16C29.7733 53.48 29.8 53.6933 29.8 53.8C29.8 54.0667 29.4 54.3067 28.6 54.52C27.8533 54.7333 27.1067 55.0533 26.36 55.48C26.1467 55.48 26.04 55.2667 26.04 54.84C26.04 54.2 26.04 53.6933 26.04 53.32C26.04 52.8933 26.0933 52.4133 26.2 51.88C26.36 51.2933 26.6 50.6 26.92 49.8C27.2933 49 27.8533 47.9067 28.6 46.52C29.3467 45.08 30.3067 43.2667 31.48 41.08C32.6533 38.84 34.12 36.0933 35.88 32.84C33.6933 33.96 31.32 35 28.76 35.96C26.2 36.92 23.48 37.72 20.6 38.36C20.12 39.16 19.5333 40.1733 18.84 41.4C18.1467 42.5733 17.48 43.8267 16.84 45.16C16.2533 46.44 15.7467 47.72 15.32 49C14.8933 50.28 14.68 51.4 14.68 52.36C14.68 53.2667 14.7867 53.9333 15 54.36C15.2133 54.7867 15.6667 55 16.36 55C17.1067 55 17.8533 54.84 18.6 54.52C19.4 54.2 20.4133 53.6933 21.64 53C21.8 52.8933 21.9333 52.92 22.04 53.08C22.1467 53.1867 22.1467 53.32 22.04 53.48C18.52 55.6133 15.6933 56.68 13.56 56.68C12.92 56.68 12.36 56.52 11.88 56.2C11.4 55.88 11.16 55 11.16 53.56C11.16 52.92 11.3733 52.04 11.8 50.92C12.28 49.7467 12.84 48.4667 13.48 47.08C14.1733 45.6933 14.8933 44.28 15.64 42.84C16.3867 41.3467 17.0533 39.96 17.64 38.68C16.52 38.9467 15.1333 39.16 13.48 39.32C11.8267 39.4267 10.3333 39.5067 9 39.56C8.78667 39.56 8.68 39.48 8.68 39.32C8.68 39 9 38.84 9.64 38.84C10.2267 38.84 10.9467 38.84 11.8 38.84C12.6533 38.7867 13.48 38.7333 14.28 38.68C15.1333 38.5733 15.9067 38.4667 16.6 38.36C17.3467 38.2533 17.8267 38.1467 18.04 38.04C18.52 37.2933 19.0533 36.4667 19.64 35.56C20.2267 34.6533 20.8133 33.7733 21.4 32.92C21.9867 32.0133 22.52 31.2133 23 30.52C23.5333 29.8267 23.9333 29.3733 24.2 29.16C24.6267 28.8933 25.24 28.6533 26.04 28.44C26.8933 28.1733 27.6667 27.9333 28.36 27.72C28.6267 27.72 28.7333 27.8 28.68 27.96C28.6267 28.12 28.52 28.2533 28.36 28.36C27.9867 28.4667 27.56 28.68 27.08 29C26.6533 29.2667 26.3067 29.5867 26.04 29.96C25.4 30.76 24.6533 31.8 23.8 33.08C23 34.3067 22.0667 35.8267 21 37.64C23.24 37.2133 25.6667 36.52 28.28 35.56C30.9467 34.6 33.5867 33.4267 36.2 32.04C36.9467 30.7067 37.7733 29.1867 38.68 27.48C39.5867 25.7733 40.52 24.04 41.48 22.28C42.4933 20.52 43.4533 18.8133 44.36 17.16C45.32 15.5067 46.2 14.0933 47 12.92C48.12 11.2133 49.32 9.61333 50.6 8.12C51.88 6.62667 53.1867 5.34667 54.52 4.28C55.9067 3.16 57.2667 2.28 58.6 1.64C59.9867 1 61.32 0.68 62.6 0.68C63.2933 0.68 63.96 0.866667 64.6 1.24C65.24 1.56 65.56 2.52 65.56 4.12V4.2Z" fill="currentColor" />
                </svg>
              </span>
              Madhura
            </Link>
            <div className="wrapper">
              <p className="footer_about-address text--sm text--bold">
                124 Residency Road, Richmond Circle, Bangalore 560025
              </p>
              <p className="footer_about-copyright text--sm">
                Madhura Cafe &copy; All Rights Reserved {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <div className="footer_block">
            <h4 className="footer_block-title h4">Contact Info</h4>
            <ul className="footer_block-list text--bold text--md">
              <li>
                <a className="link" href="tel:+918023456789">
                  <i className="bi bi-telephone icon"></i>
                  +91 (80) 2345-6789
                </a>
              </li>
              <li>
                <a className="link" href="tel:+919876543210">
                  <i className="bi bi-phone icon"></i>
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a className="link" href="mailto:concierge@madhuracafe.com">
                  <i className="bi bi-envelope icon"></i>
                  concierge@madhuracafe.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer_block">
            <h4 className="footer_block-title h4">Opening Hours</h4>
            <ul className="footer_block-list text--md">
              <li>
                <span className="text--bold">Mon – Fri</span>: 8am to 10pm
              </li>
              <li>
                <span className="text--bold">Saturday</span>: 8am to 11pm
              </li>
              <li>
                <span className="text--bold">Sunday</span>: 8am to 11pm
              </li>
            </ul>
          </div>

          <div className="footer_block">
            <h4 className="footer_block-title h4">Follow Our Activity</h4>
            <p className="footer_block-subtitle text--md text--bold">We are in social networks</p>
            <ul className="footer_block-socials d-flex">
              <li>
                <a className="link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter icon"></i>
                </a>
              </li>
              <li>
                <a className="link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook icon"></i>
                </a>
              </li>
              <li>
                <a className="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
