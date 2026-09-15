import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/light.css';

export default function LightAbout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="light-theme-cafert">
      {/* HEADER */}
      <header className="header" data-page="about">
        <div className="container d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap">
          <Link className="logo h3" to="/design-1">
            <span className="logo_img">
              <svg width="50" height="56" viewBox="0 0 67 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.56 4.2C65.56 5.85333 64.9467 7.77333 63.72 9.96C62.5467 12.0933 60.7867 14.36 58.44 16.76C56.1467 19.16 53.32 21.64 49.96 24.2C46.6 26.7067 42.7867 29.16 38.52 31.56C37.0267 34.28 35.6933 36.76 34.52 39C33.4 41.1867 32.3067 43.5067 31.24 45.96C31.1333 46.2267 31.1067 46.3867 31.16 46.44C31.2133 46.44 31.32 46.36 31.48 46.2C32.8133 44.6 34.3867 42.9733 36.2 41.32C38.0133 39.6133 39.8533 38.3333 41.72 37.48C42.04 37.3733 42.28 37.32 42.44 37.32C42.8667 37.32 43.1867 37.5067 43.4 37.88C43.6667 38.2533 43.8 38.5467 43.8 38.76C43.8 38.9733 43.6667 39.4533 43.4 40.2C43.1333 40.9467 42.7867 41.8 42.36 42.76C41.9333 43.72 41.4533 44.76 40.92 45.88C40.44 46.9467 39.96 47.96 39.48 48.92C39 49.8267 38.44 50.8933 37.8 52.12C37.16 53.2933 36.4933 54.4667 35.8 55.64C35.1067 56.8667 34.4133 58.0133 33.72 59.08C33.08 60.2 32.4667 61.16 31.88 61.96C29.5867 65.16 27.24 67.72 24.84 69.64C22.4933 71.6133 19.9867 73.0533 17.32 73.96C14.8667 74.8133 12.52 75.24 10.28 75.24C8.78667 75.24 7.34667 75.0533 5.96 74.68C4.52 74.36 3.21333 73.8267 2.04 73.08C1.66667 72.8133 1.45333 72.52 1.4 72.2C1.29333 71.9333 1.21333 71.5867 1.16 71.16C1.16 70.9467 1.13333 70.6267 1.08 70.2C1.02667 69.8267 0.973333 69.4267 0.92 69C0.866667 68.6267 0.813334 68.2533 0.76 67.88C0.706667 67.5067 0.68 67.24 0.68 67.08C0.68 66.6 0.893334 66.4133 1.32 66.52C1.32 67.1067 1.48 67.8267 1.8 68.68C2.06667 69.5333 2.6 70.3867 3.4 71.24C4.14667 72.0933 5.18667 72.8133 6.52 73.4C7.8 73.9867 9.42667 74.28 11.4 74.28C13.0533 74.28 14.9467 73.96 17.08 73.32C19.6933 72.5733 22.04 71.16 24.12 69.08C26.2 67 28.2 64.52 30.12 61.64C31.08 60.2 32.04 58.5733 33 56.76C33.96 55 34.84 53.2667 35.64 51.56C36.44 49.8533 37.1067 48.3333 37.64 47C38.2267 45.6133 38.6 44.6533 38.76 44.12C39.1333 43.0533 39.3733 42.2533 39.48 41.72C39.5867 41.1333 39.64 40.7067 39.64 40.44C39.64 40.0667 39.5067 39.88 39.24 39.88C39.0267 39.88 38.3867 40.3067 37.32 41.16C36.3067 41.96 35.2133 42.9733 34.04 44.2C32.92 45.3733 31.9067 46.68 31 48.12C30.0933 49.5067 29.64 50.8133 29.64 52.04C29.64 52.4667 29.6667 52.84 29.72 53.16C29.7733 53.48 29.8 53.6933 29.8 53.8C29.8 54.0667 29.4 54.3067 28.6 54.52C27.8533 54.7333 27.1067 55.0533 26.36 55.48C26.1467 55.48 26.04 55.2667 26.04 54.84C26.04 54.2 26.04 53.6933 26.04 53.32C26.04 52.8933 26.0933 52.4133 26.2 51.88C26.36 51.2933 26.6 50.6 26.92 49.8C27.2933 49 27.8533 47.9067 28.6 46.52C29.3467 45.08 30.3067 43.2667 31.48 41.08C32.6533 38.84 34.12 36.0933 35.88 32.84C33.6933 33.96 31.32 35 28.76 35.96C26.2 36.92 23.48 37.72 20.6 38.36C20.12 39.16 19.5333 40.1733 18.84 41.4C18.1467 42.5733 17.48 43.8267 16.84 45.16C16.2533 46.44 15.7467 47.72 15.32 49C14.8933 50.28 14.68 51.4 14.68 52.36C14.68 53.2667 14.7867 53.9333 15 54.36C15.2133 54.7867 15.6667 55 16.36 55C17.1067 55 17.8533 54.84 18.6 54.52C19.4 54.2 20.4133 53.6933 21.64 53C21.8 52.8933 21.9333 52.92 22.04 53.08C22.1467 53.1867 22.1467 53.32 22.04 53.48C18.52 55.6133 15.6933 56.68 13.56 56.68C12.92 56.68 12.36 56.52 11.88 56.2C11.4 55.88 11.16 55 11.16 53.56C11.16 52.92 11.3733 52.04 11.8 50.92C12.28 49.7467 12.84 48.4667 13.48 47.08C14.1733 45.6933 14.8933 44.28 15.64 42.84C16.3867 41.3467 17.0533 39.96 17.64 38.68C16.52 38.9467 15.1333 39.16 13.48 39.32C11.8267 39.4267 10.3333 39.5067 9 39.56C8.78667 39.56 8.68 39.48 8.68 39.32C8.68 39 9 38.84 9.64 38.84C10.2267 38.84 10.9467 38.84 11.8 38.84C12.6533 38.7867 13.48 38.7333 14.28 38.68C15.1333 38.5733 15.9067 38.4667 16.6 38.36C17.3467 38.2533 17.8267 38.1467 18.04 38.04C18.52 37.2933 19.0533 36.4667 19.64 35.56C20.2267 34.6533 20.8133 33.7733 21.4 32.92C21.9867 32.0133 22.52 31.2133 23 30.52C23.5333 29.8267 23.9333 29.3733 24.2 29.16C24.6267 28.8933 25.24 28.6533 26.04 28.44C26.8933 28.1733 27.6667 27.9333 28.36 27.72C28.6267 27.72 28.7333 27.8 28.68 27.96C28.6267 28.12 28.52 28.2533 28.36 28.36C27.9867 28.4667 27.56 28.68 27.08 29C26.6533 29.2667 26.3067 29.5867 26.04 29.96C25.4 30.76 24.6533 31.8 23.8 33.08C23 34.3067 22.0667 35.8267 21 37.64C23.24 37.2133 25.6667 36.52 28.28 35.56C30.9467 34.6 33.5867 33.4267 36.2 32.04C36.9467 30.7067 37.7733 29.1867 38.68 27.48C39.5867 25.7733 40.52 24.04 41.48 22.28C42.4933 20.52 43.4533 18.8133 44.36 17.16C45.32 15.5067 46.2 14.0933 47 12.92C48.12 11.2133 49.32 9.61333 50.6 8.12C51.88 6.62667 53.1867 5.34667 54.52 4.28C55.9067 3.16 57.2667 2.28 58.6 1.64C59.9867 1 61.32 0.68 62.6 0.68C63.2933 0.68 63.96 0.866667 64.6 1.24C65.24 1.56 65.56 2.52 65.56 4.12V4.2Z" fill="currentColor"/>
              </svg>
            </span>
            Madhura
          </Link>

          <nav className={`header_nav text--medium text--md collapse ${mobileMenuOpen ? 'show' : ''}`} id="headerMenu">
            <ul className="header_nav-list">
              <li className="header_nav-list_item">
                <Link className="nav-item nav-link" to="/design-1">
                  <span className="nav-item_text">Home</span>
                </Link>
              </li>
              <li className="header_nav-list_item">
                <Link className="nav-item nav-link current" to="/design-1/about" style={{ color: '#b38e6a' }}>
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

      {/* PAGE BANNER / BREADCRUMBS */}
      <header className="page" style={{ position: 'relative' }}>
        <div 
          className="page_cover d-flex flex-column align-items-center justify-content-center"
          style={{
            background: 'linear-gradient(rgba(245, 238, 230, 0.45), rgba(245, 238, 230, 0.45)), url(https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1600&auto=format&fit=crop) center/cover no-repeat',
            minHeight: '340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <h2 className="page_cover-title h2" style={{ fontSize: '42px', color: '#534931', fontWeight: 700, marginTop: '80px' }}>About Us</h2>
        </div>
        <div className="page_breadcrumbs" style={{ background: '#e5dcd2', padding: '16px 20px', textAlign: 'center' }}>
          <ul className="page_breadcrumbs-list d-flex flex-wrap justify-content-center h5" style={{ margin: 0, gap: '8px', listStyle: 'none', fontSize: '16px' }}>
            <li>
              <Link className="link" to="/design-1" style={{ color: '#b38e6a', fontWeight: 600 }}>Home</Link>
            </li>
            <li style={{ color: '#534931' }}>/</li>
            <li style={{ color: '#534931', fontWeight: 500 }}>About Us</li>
          </ul>
        </div>
      </header>

      <main>
        {/* BENEFITS SECTION */}
        <div className="benefits section">
          <div className="container">
            <ul className="benefits_list">
              <li className="benefits_list-item">
                <div className="media icon" style={{ fontSize: '38px', color: '#b38e6a' }}>
                  <svg width="50" height="60" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9966 22.1592C18.4915 18.3418 15.7608 14.4083 14.0128 10.2651C13.9355 10.0846 14.2289 9.88935 14.3636 10.0752C16.946 13.6545 18.9728 17.5776 21.3255 21.2792C23.7972 25.1696 26.5216 28.9344 28.9839 32.8273C29.0611 32.9489 28.8408 33.0668 28.7468 32.9554C25.8752 29.5476 23.4056 25.8306 20.9966 22.1592Z" fill="currentColor"/>
                    <path d="M45.9711 39.7741C46.0825 39.9177 45.844 40.09 45.7295 39.9454C37.5404 29.5408 27.9963 20.285 18.031 11.191C17.9301 11.0989 18.0982 10.9378 18.2096 11.0252C28.8619 19.3896 37.947 29.4376 45.9711 39.7741Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="main">
                  <h4 className="main_title h4">Our Story</h4>
                  <p className="main_text text--md">Crafted with passion since 2012, bringing artisanal Indian beans and European pastry traditions together.</p>
                </div>
              </li>

              <li className="benefits_list-item">
                <div className="media icon" style={{ fontSize: '38px', color: '#b38e6a' }}>
                  <svg width="50" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M57.943 20.3001C58.6152 19.459 58.9059 18.6881 58.2004 17.7277C59.1883 16.928 59.6652 15.9899 59.5122 14.7623C59.4822 14.5226 59.5723 14.2724 59.6636 14.0189C59.7233 13.853 59.7836 13.6856 59.811 13.519C60.1098 11.7015 60.2835 9.9059 58.4906 8.61687Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="main">
                  <h4 className="main_title h4">Our Mission</h4>
                  <p className="main_text text--md">To provide an oasis of calm elegance, uncompromising culinary craftsmanship, and memorable moments.</p>
                </div>
              </li>

              <li className="benefits_list-item">
                <div className="media icon" style={{ fontSize: '38px', color: '#b38e6a' }}>
                  <svg width="50" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0567 28.6957C39.1921 28.8997 39.3332 29.0217 39.3332 29.1442C39.3332 29.2117 39.1019 29.28 38.9721 29.3478C38.8649 29.2373 38.6957 29.134 38.6675 29.0129C38.6505 28.9474 38.8593 28.8502 39.0567 28.6957Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="main">
                  <h4 className="main_title h4">Curated Menu</h4>
                  <p className="main_text text--md">Seasonal ingredients, micro-lot single-origin espressos, delicate brunch platters, and gourmet desserts.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* PROMO VIDEO SECTION */}
        <div className="promo section">
          <div className="container">
            <div className="promo_video" style={{ overflow: 'hidden', borderRadius: '4px', position: 'relative' }}>
              {!isVideoPlaying ? (
                <span className="cover" onClick={() => setIsVideoPlaying(true)}>
                  <img 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop" 
                    alt="Madhura Cafe Artisan Baking" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <button className="btn btn--play" aria-label="Play Video" style={{ border: 'none' }}>
                    <i className="bi bi-play-fill" style={{ fontSize: '32px', marginLeft: '4px' }}></i>
                  </button>
                </span>
              ) : (
                <iframe 
                  src="https://www.youtube.com/embed/vP7X4HcDTwk?autoplay=1&controls=1" 
                  title="Madhura Cafe Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 0 }}
                ></iframe>
              )}
            </div>
          </div>
        </div>

        {/* 4-TONE COUNTER METRIC SECTION */}
        <div className="counter">
          <div className="counter_block">
            <span className="section_header-subtitle">progress</span>
            <h4 className="counter_block-title h4">
              Every day we <span className="linebreak">Get Better for You</span>
            </h4>
          </div>
          <div className="counter_block num">
            <span className="countNum h2">5934</span>
            <span style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Served Dishes</span>
          </div>
          <div className="counter_block num">
            <span className="countNum h2">9211</span>
            <span style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Served Customers</span>
          </div>
          <div className="counter_block num">
            <span className="countNum h2">8672</span>
            <span style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Master Coffees</span>
          </div>
        </div>

        {/* OUR EXPERTS TEAM SECTION */}
        <section className="team section--nopb" id="team">
          <div className="section_header centered">
            <span className="section_header-subtitle">team</span>
            <h2 className="section_header-title h2">Our Experts</h2>
            <p className="section_header-text text--md">
              Meet our world-class roasters, master bakers, and culinary artists who craft every cup and dish with obsessive devotion.
            </p>
          </div>
          <ul className="team_list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li className="team_list-item">
              <div className="media" style={{ height: '100%' }}>
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
                  alt="Annette Black" 
                />
              </div>
              <div className="main">
                <span className="main_position text--md">Head Pastry Chef</span>
                <span className="main_name h4">Annette Black</span>
                <p className="main_text text--md">Specializing in French viennoiserie, sourdough fermentation, and signature handcrafted macarons.</p>
                <ul className="main_socials">
                  <li><a className="link" href="#!"><i className="bi bi-instagram"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-facebook"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-twitter"></i></a></li>
                </ul>
              </div>
            </li>

            <li className="team_list-item">
              <div className="media" style={{ height: '100%' }}>
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop" 
                  alt="Jack White" 
                />
              </div>
              <div className="main">
                <span className="main_position text--md">Master Roaster</span>
                <span className="main_name h4">Jack White</span>
                <p className="main_text text--md">Q-Grader certified roaster sourcing direct-trade single origins from Chikmagalur to Ethiopia.</p>
                <ul className="main_socials">
                  <li><a className="link" href="#!"><i className="bi bi-instagram"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-facebook"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-twitter"></i></a></li>
                </ul>
              </div>
            </li>

            <li className="team_list-item">
              <div className="media" style={{ height: '100%' }}>
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" 
                  alt="Mike Smith" 
                />
              </div>
              <div className="main">
                <span className="main_position text--md">Executive Sous Chef</span>
                <span className="main_name h4">Mike Smith</span>
                <p className="main_text text--md">Curating seasonal savory dining menus, gourmet avocado toasts, and artisanal brunch spreads.</p>
                <ul className="main_socials">
                  <li><a className="link" href="#!"><i className="bi bi-instagram"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-facebook"></i></a></li>
                  <li><a className="link" href="#!"><i className="bi bi-twitter"></i></a></li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        {/* INVITATION SECTION (DUAL-IMAGE WITH OVAL BACKGROUND) */}
        <section className="invitation section--nopb">
          <div className="container">
            <div className="main">
              <div className="main_media">
                <img 
                  src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop" 
                  alt="Avocado Toast and Fresh Brunch" 
                />
              </div>
              <div className="section_header">
                <span className="section_header-subtitle">waiting for you</span>
                <h2 className="section_header-title h2">
                  Come and <span className="linebreak">Discover Our Cafe</span>
                </h2>
                <p className="section_header-text text--md">
                  Whether you seek a serene morning espresso, an intimate business lunch, or an indulgent afternoon high tea, Madhura Cafe welcomes you with open warmth.
                </p>
              </div>
              <div className="wrapper">
                <a className="btn" href="#contacts">Contact us</a>
              </div>
            </div>

            <div className="media">
              <img 
                src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=800&auto=format&fit=crop" 
                alt="Fresh Organic Ingredients" 
              />
              <span className="media_oval">
                <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M392.616 678.966C364.335 683.361 335.924 682.91 307.57 679.937C277.448 676.761 248.473 669.461 220.062 659.392C201.566 652.83 182.069 648.721 159.18 642.46C213.45 679.109 272.975 690.285 333.494 699.044C313.763 699.044 293.918 701.453 274.978 698.623C199.556 687.365 138.335 651.641 88.8526 598.428C30.6753 535.875 1.48175 462.425 0.060826 379.84C-1.67496 278.673 33.7513 189.759 104.878 113.344C124.004 92.8068 146.101 75.2045 169.983 59.634C184.224 50.355 197.989 39.774 213.595 33.0989C250.103 17.4984 288.477 6.99268 328.561 2.24402C464.421 -13.8456 612.738 56.8872 672.49 204.772C688.596 244.628 697.493 285.77 697.945 328.455C698.05 337.636 699.342 346.802 699.786 355.999C701.304 387.877 694.659 418.559 682.517 448.142C666.725 486.62 648.673 524.12 622.499 557.707C573.566 620.485 510.682 665.518 430.577 688.471C423.029 690.638 414.89 691.03 406.236 689.547C411.152 688.057 416.021 686.409 420.994 685.092C451.907 676.882 480.947 664.773 508.147 648.826C513.395 645.741 519.199 643.295 521 636.537C521.742 633.76 525.206 631.502 527.693 629.252C533.505 623.962 538.915 618.084 545.47 613.719C596.971 579.448 624.986 530.178 646.889 476.912C649.594 470.342 652.452 463.833 655.35 457.338C667.63 429.885 673.007 401.295 670.407 371.674C669.947 366.331 674.532 358.204 664.231 355.6C663.73 355.479 663.633 352.68 663.956 351.243C668.154 332.737 663.181 314.661 660.751 296.532C658.773 281.744 655.455 267.114 652.258 249.881C656.173 254.742 658.458 257.587 661.365 261.199C660.88 239.044 657.191 218.514 648.431 198.82C636.878 172.849 626.923 146.171 608.653 123.285C605.206 118.958 602.227 114.247 598.343 110.304C529.703 40.5567 444.649 7.45923 343.206 12.998C296.865 15.5266 253.139 28.1019 212.013 48.3908C202.656 53.004 194.187 58.1741 189.472 68.5669C193.363 67.3553 196.617 66.3469 199.862 65.3384C168.118 87.441 141.919 113.434 125.353 147.217C142.008 132.933 158.308 118.168 175.537 104.411C192.483 90.8878 211.173 79.6144 232.608 72.6382C229.928 74.3992 227.304 76.2656 224.543 77.9136C187.155 100.189 152.657 125.603 124.23 157.692C121.397 160.883 117.78 163.976 113.824 165.677C104.709 169.583 99.1462 176.657 95.2629 184.325C83.6613 207.211 73.3435 230.66 61.8469 253.598C52.6755 271.93 47.2905 290.933 44.0692 310.966C39.322 340.526 37.0049 370.117 37.4247 399.933C37.5297 407.173 35.261 415.142 43.5525 420.704C45.0057 421.689 45.2398 426.242 44.1257 428.214C38.5308 438.163 43.8512 447.216 46.144 456.458C47.7022 462.741 51.0123 468.747 51.8923 475.068C54.3305 492.618 62.2344 507.993 70.8891 523.443C118.272 608.023 194.292 654.899 293.652 670.733C321.126 675.106 348.987 676.468 376.921 672.72C384.655 671.689 392.834 669.416 404.928 674.458C398.38 676.904 395.603 678.5 392.616 678.966Z" fill="currentColor"/>
                </svg>
              </span>
            </div>
          </div>
        </section>

        {/* BRANDS / CLIENT PARTNERS SECTION (WITH CONTINUOUS AUTO-SLIDING MARQUEE) */}
        <section className="brands section light-brands-section" style={{ padding: '80px 0', background: '#FFFFFF', overflow: 'hidden' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
            <div className="section_header centered" style={{ marginBottom: '50px' }}>
              <span className="section_header-subtitle">BRANDS</span>
              <h2 className="section_header-title h2" style={{ fontSize: '38px', color: '#534931', margin: '10px 0 0', fontWeight: 700 }}>
                We are Proud to Feature Our Top Client Companies
              </h2>
            </div>
          </div>

          <div className="light-brands-marquee-wrap">
            <div className="light-brands-marquee-track">
              {/* Repeating 4 full sets so it forms an unbroken infinite ribbon */}
              {[1, 2, 3, 4].map((setNum) => (
                <React.Fragment key={setNum}>
                  <div className="light-brand-item">
                    <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 20H55C68 20 75 28 75 40C75 50 68 58 55 58H45L72 85H52L30 62V85H20V20H30ZM30 30V48H52C60 48 64 44 64 39C64 34 60 30 52 30H30Z" fill="#b38e6a"/>
                    </svg>
                  </div>
                  <div className="light-brand-item">
                    <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="75" cy="25" r="10" fill="#b38e6a"/>
                      <rect x="20" y="45" width="20" height="45" rx="10" transform="rotate(-45 20 45)" fill="#b38e6a"/>
                      <rect x="50" y="55" width="20" height="30" rx="10" transform="rotate(-45 50 55)" fill="#b38e6a"/>
                    </svg>
                  </div>
                  <div className="light-brand-item">
                    <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 20C50 20 75 35 75 60C75 75 62 85 50 85C38 85 25 75 25 60C25 35 50 20 50 20Z" fill="#b38e6a"/>
                      <circle cx="50" cy="90" r="6" fill="#b38e6a"/>
                    </svg>
                  </div>
                  <div className="light-brand-item">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <text x="50" y="72" fontSize="72" fontFamily="'Playfair Display', Georgia, serif" fontStyle="italic" fontWeight="700" fill="#b38e6a" textAnchor="middle">g</text>
                    </svg>
                  </div>
                  <div className="light-brand-item">
                    <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 25V80H50V58C62 58 78 54 85 40C85 30 75 25 65 25H40Z" fill="#b38e6a"/>
                      <path d="M60 80C75 80 85 70 85 58H50V80H60Z" fill="#b38e6a"/>
                    </svg>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <div id="map" style={{ width: '100%', height: '400px', background: '#e5dcd2', position: 'relative', overflow: 'hidden' }}>
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

        {/* INSTAGRAM GALLERY MOSAIC SLIDER */}
        <div className="gallery_slider" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', width: '100%' }}>
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

      {/* FOOTER */}
      <footer className="footer section" id="contacts">
        <div className="container d-flex">
          <div className="footer_about">
            <Link className="logo h3" to="/design-1">
              <span className="logo_img">
                <svg width="50" height="56" viewBox="0 0 67 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M65.56 4.2C65.56 5.85333 64.9467 7.77333 63.72 9.96C62.5467 12.0933 60.7867 14.36 58.44 16.76C56.1467 19.16 53.32 21.64 49.96 24.2C46.6 26.7067 42.7867 29.16 38.52 31.56C37.0267 34.28 35.6933 36.76 34.52 39C33.4 41.1867 32.3067 43.5067 31.24 45.96C31.1333 46.2267 31.1067 46.3867 31.16 46.44C31.2133 46.44 31.32 46.36 31.48 46.2C32.8133 44.6 34.3867 42.9733 36.2 41.32C38.0133 39.6133 39.8533 38.3333 41.72 37.48C42.04 37.3733 42.28 37.32 42.44 37.32C42.8667 37.32 43.1867 37.5067 43.4 37.88C43.6667 38.2533 43.8 38.5467 43.8 38.76C43.8 38.9733 43.6667 39.4533 43.4 40.2C43.1333 40.9467 42.7867 41.8 42.36 42.76C41.9333 43.72 41.4533 44.76 40.92 45.88C40.44 46.9467 39.96 47.96 39.48 48.92C39 49.8267 38.44 50.8933 37.8 52.12C37.16 53.2933 36.4933 54.4667 35.8 55.64C35.1067 56.8667 34.4133 58.0133 33.72 59.08C33.08 60.2 32.4667 61.16 31.88 61.96C29.5867 65.16 27.24 67.72 24.84 69.64C22.4933 71.6133 19.9867 73.0533 17.32 73.96C14.8667 74.8133 12.52 75.24 10.28 75.24C8.78667 75.24 7.34667 75.0533 5.96 74.68C4.52 74.36 3.21333 73.8267 2.04 73.08C1.66667 72.8133 1.45333 72.52 1.4 72.2C1.29333 71.9333 1.21333 71.5867 1.16 71.16C1.16 70.9467 1.13333 70.6267 1.08 70.2C1.02667 69.8267 0.973333 69.4267 0.92 69C0.866667 68.6267 0.813334 68.2533 0.76 67.88C0.706667 67.5067 0.68 67.24 0.68 67.08C0.68 66.6 0.893334 66.4133 1.32 66.52C1.32 67.1067 1.48 67.8267 1.8 68.68C2.06667 69.5333 2.6 70.3867 3.4 71.24C4.14667 72.0933 5.18667 72.8133 6.52 73.4C7.8 73.9867 9.42667 74.28 11.4 74.28C13.0533 74.28 14.9467 73.96 17.08 73.32C19.6933 72.5733 22.04 71.16 24.12 69.08C26.2 67 28.2 64.52 30.12 61.64C31.08 60.2 32.04 58.5733 33 56.76C33.96 55 34.84 53.2667 35.64 51.56C36.44 49.8533 37.1067 48.3333 37.64 47C38.2267 45.6133 38.6 44.6533 38.76 44.12C39.1333 43.0533 39.3733 42.2533 39.48 41.72C39.5867 41.1333 39.64 40.7067 39.64 40.44C39.64 40.0667 39.5067 39.88 39.24 39.88C39.0267 39.88 38.3867 40.3067 37.32 41.16C36.3067 41.96 35.2133 42.9733 34.04 44.2C32.92 45.3733 31.9067 46.68 31 48.12C30.0933 49.5067 29.64 50.8133 29.64 52.04C29.64 52.4667 29.6667 52.84 29.72 53.16C29.7733 53.48 29.8 53.6933 29.8 53.8C29.8 54.0667 29.4 54.3067 28.6 54.52C27.8533 54.7333 27.1067 55.0533 26.36 55.48C26.1467 55.48 26.04 55.2667 26.04 54.84C26.04 54.2 26.04 53.6933 26.04 53.32C26.04 52.8933 26.0933 52.4133 26.2 51.88C26.36 51.2933 26.6 50.6 26.92 49.8C27.2933 49 27.8533 47.9067 28.6 46.52C29.3467 45.08 30.3067 43.2667 31.48 41.08C32.6533 38.84 34.12 36.0933 35.88 32.84C33.6933 33.96 31.32 35 28.76 35.96C26.2 36.92 23.48 37.72 20.6 38.36C20.12 39.16 19.5333 40.1733 18.84 41.4C18.1467 42.5733 17.48 43.8267 16.84 45.16C16.2533 46.44 15.7467 47.72 15.32 49C14.8933 50.28 14.68 51.4 14.68 52.36C14.68 53.2667 14.7867 53.9333 15 54.36C15.2133 54.7867 15.6667 55 16.36 55C17.1067 55 17.8533 54.84 18.6 54.52C19.4 54.2 20.4133 53.6933 21.64 53C21.8 52.8933 21.9333 52.92 22.04 53.08C22.1467 53.1867 22.1467 53.32 22.04 53.48C18.52 55.6133 15.6933 56.68 13.56 56.68C12.92 56.68 12.36 56.52 11.88 56.2C11.4 55.88 11.16 55 11.16 53.56C11.16 52.92 11.3733 52.04 11.8 50.92C12.28 49.7467 12.84 48.4667 13.48 47.08C14.1733 45.6933 14.8933 44.28 15.64 42.84C16.3867 41.3467 17.0533 39.96 17.64 38.68C16.52 38.9467 15.1333 39.16 13.48 39.32C11.8267 39.4267 10.3333 39.5067 9 39.56C8.78667 39.56 8.68 39.48 8.68 39.32C8.68 39 9 38.84 9.64 38.84C10.2267 38.84 10.9467 38.84 11.8 38.84C12.6533 38.7867 13.48 38.7333 14.28 38.68C15.1333 38.5733 15.9067 38.4667 16.6 38.36C17.3467 38.2533 17.8267 38.1467 18.04 38.04C18.52 37.2933 19.0533 36.4667 19.64 35.56C20.2267 34.6533 20.8133 33.7733 21.4 32.92C21.9867 32.0133 22.52 31.2133 23 30.52C23.5333 29.8267 23.9333 29.3733 24.2 29.16C24.6267 28.8933 25.24 28.6533 26.04 28.44C26.8933 28.1733 27.6667 27.9333 28.36 27.72C28.6267 27.72 28.7333 27.8 28.68 27.96C28.6267 28.12 28.52 28.2533 28.36 28.36C27.9867 28.4667 27.56 28.68 27.08 29C26.6533 29.2667 26.3067 29.5867 26.04 29.96C25.4 30.76 24.6533 31.8 23.8 33.08C23 34.3067 22.0667 35.8267 21 37.64C23.24 37.2133 25.6667 36.52 28.28 35.56C30.9467 34.6 33.5867 33.4267 36.2 32.04C36.9467 30.7067 37.7733 29.1867 38.68 27.48C39.5867 25.7733 40.52 24.04 41.48 22.28C42.4933 20.52 43.4533 18.8133 44.36 17.16C45.32 15.5067 46.2 14.0933 47 12.92C48.12 11.2133 49.32 9.61333 50.6 8.12C51.88 6.62667 53.1867 5.34667 54.52 4.28C55.9067 3.16 57.2667 2.28 58.6 1.64C59.9867 1 61.32 0.68 62.6 0.68C63.2933 0.68 63.96 0.866667 64.6 1.24C65.24 1.56 65.56 2.52 65.56 4.12V4.2Z" fill="currentColor"/>
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
