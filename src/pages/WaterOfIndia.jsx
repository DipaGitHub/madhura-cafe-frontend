import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DarkHeader from '../components/common/DarkHeader';
import DarkFooter from '../components/common/DarkFooter';
import '../styles/dark.css';
import '../styles/water-of-india.css';

export default function WaterOfIndia() {
  const baseUrl = import.meta.env.BASE_URL;
  const storyRef = useRef(null);
  const [storyParallax, setStoryParallax] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Water of India | Madhura's Cafe";

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (storyRef.current) {
            const rect = storyRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top <= windowHeight && rect.bottom >= 0) {
              const center = rect.top + rect.height / 2;
              const offset = center - windowHeight / 2;
              // Smooth parallax translation bounded between -50px and 50px
              const moveY = Math.min(Math.max(offset * 0.12, -50), 50);
              setStoryParallax(moveY);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for all reveal animations matching the rest of the site
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
      '.ak-reveal, .ak-reveal-left, .ak-reveal-right, .ak-reveal-scale, .ak-reveal-fade'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dark-page-wrapper woi-page-wrapper">
      <DarkHeader />

      <main>
        {/* SECTION 1: Hero Banner */}
        <section className="woi-hero-section">
          <div
            className="woi-hero-bg"
            style={{ backgroundImage: `url(${baseUrl}water-of-india/hero-bg.webp)` }}
          />
          <div className="woi-hero-overlay" />

          <div className="woi-hero-content">
            <div className="woi-emblem-wrap ak-reveal-scale">
              <img
                src={`${baseUrl}water-of-india/brand-emblem.png`}
                alt="Water of India Emblem"
              />
            </div>

            <div className="woi-brand-badge ak-reveal delay-1">
              <span>Fresh Elixirs</span>
              <span>•</span>
              <span>The Customer Collection</span>
            </div>

            <h1 className="woi-hero-title ak-reveal delay-2">Water of India</h1>

            <p className="woi-hero-main-tagline ak-reveal delay-3">
              A journey in every glass.
            </p>

            <p className="woi-hero-sub-tagline ak-reveal delay-3">
              Rooted in Tradition. Crafted for Tomorrow.
            </p>

            <div className="woi-hero-divider ak-reveal-scale delay-4" />
          </div>
        </section>

        {/* SECTION 2: Welcome (Image Left, Text Right) */}
        <section className="woi-editorial-section woi-bg-espresso">
          <div className="container">
            <div className="woi-editorial-grid">
              <div className="woi-editorial-image-col ak-reveal-left">
                <div className="woi-image-frame" style={{ height: '560px' }}>
                  <img
                    src={`${baseUrl}water-of-india/welcome.webp`}
                    alt="Welcome to Water of India"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="woi-editorial-text-col ak-reveal-right">
                <span className="woi-section-label">Welcome</span>
                <h2 className="woi-heading-large">
                  Come for a drink. Stay for the discovery.
                </h2>
                <p className="woi-body-text">
                  Welcome to Water of India, a unit of Madhura's Cafe in Siliguri. Our collection brings traditional Indian beverages into a contemporary café experience, inviting you to explore beyond the familiar.
                </p>
                <p className="woi-body-text">
                  Begin with a bright citrus cooler, linger over a creamy classic, or settle into the warmth of a spiced tea. Each choice offers a different mood, texture and way to enjoy your visit.
                </p>
                <p className="woi-body-text">
                  This book is your companion to the collection: a little context, a few tasting cues, and an invitation to find a new favourite.
                </p>

                {/* Narrative callout from PDF page 2 */}
                <div className="woi-ritual-box ak-reveal delay-2">
                  <h3 className="woi-ritual-title">A Welcome, In Every Glass</h3>
                  <p className="woi-ritual-desc">
                    Across India, the act of offering a drink is an invitation to pause. A courtyard sharbat, a coastal cooler or a comforting cup of chai can carry the memory of a place. Water of India brings these familiar rituals into a contemporary café experience, where regional character and thoughtful presentation meet.
                  </p>
                </div>

                <span className="woi-closing-accent ak-reveal delay-3">
                  India’s Heritage in Every Glass.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Our Story (Text Left, Parallax Image Right) */}
        <section ref={storyRef} className="woi-editorial-section woi-bg-charcoal">
          <div className="container">
            <div className="woi-editorial-grid">
              <div className="woi-editorial-text-col ak-reveal-left">
                <span className="woi-section-label">Our Story</span>
                <h2 className="woi-heading-large">
                  Familiar roots. Fresh encounters.
                </h2>
                <p className="woi-body-text">
                  Water of India celebrates the place of drinks in everyday Indian life: a welcome offered to a guest, an afternoon pause, a conversation that lasts a little longer.
                </p>
                <p className="woi-body-text">
                  The idea is simple: make room for the flavours that deserve to be remembered, shared and discovered again. Our menu brings cooling sharbat, comforting dairy drinks, grain-based preparations and aromatic teas into one collection.
                </p>

                {/* Narrative callout from PDF page 3 */}
                <div className="woi-ritual-box ak-reveal delay-2">
                  <h3 className="woi-ritual-title">The Ritual of a Welcome</h3>
                  <p className="woi-ritual-desc">
                    A glass offered to a guest is a small gesture with a generous spirit. Across homes, cafés and gathering places, drinks invite us to pause. From a cooling sharbat to a steaming cup of chai, this collection celebrates the pleasure of that invitation.
                  </p>
                </div>

                <p className="woi-body-text" style={{ fontStyle: 'italic', color: '#DFBE86', marginTop: '1.25rem' }}>
                  You do not need to know every name before you order. Curiosity is a perfectly good place to begin.
                </p>

                <span className="woi-closing-accent ak-reveal delay-3">
                  A welcome. A conversation. A glass shared.
                </span>
              </div>

              <div className="woi-editorial-image-col ak-reveal-right">
                <div className="woi-image-frame woi-parallax-img-wrap" style={{ height: '580px' }}>
                  <img
                    src={`${baseUrl}water-of-india/story-ritual.webp?v=3`}
                    alt="Our Story - Sharing Indian Beverage Traditions"
                    loading="lazy"
                    style={{
                      transform: `scale(1.15) translateY(${storyParallax}px)`,
                      transition: 'transform 0.08s ease-out',
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Our Philosophy (Text Left, Image Right) */}
        <section className="woi-editorial-section woi-bg-espresso">
          <div className="container">
            <div className="woi-editorial-grid reversed">
              <div className="woi-editorial-text-col ak-reveal-left">
                <span className="woi-section-label">Our Philosophy</span>
                <h2 className="woi-heading-large">
                  Rooted in Tradition. Crafted for Tomorrow.
                </h2>
                <p className="woi-body-text">
                  Tradition gives us a language of flavour. Contemporary hospitality gives it a welcoming setting.
                </p>
                <p className="woi-body-text">
                  At Water of India, the experience is built around discovery: a familiar ingredient in a different expression, a new contrast of sweet and tangy, or the gentle comfort of a warm cup.
                </p>

                {/* 3 Philosophy Pillars from PDF page 4 */}
                <div className="woi-pillars-list">
                  <div className="woi-pillar-item ak-reveal delay-1">
                    <h3 className="woi-pillar-title">Flavour with Character</h3>
                    <p className="woi-pillar-desc">
                      Bright citrus, mellow grains, fragrant spices and comforting dairy: each style offers a different way to explore the collection.
                    </p>
                  </div>
                  <div className="woi-pillar-item ak-reveal delay-2">
                    <h3 className="woi-pillar-title">Craft in the Details</h3>
                    <p className="woi-pillar-desc">
                      Thoughtful presentation brings familiar Indian drinking traditions into a contemporary café setting.
                    </p>
                  </div>
                  <div className="woi-pillar-item ak-reveal delay-3">
                    <h3 className="woi-pillar-title">A Moment to Savour</h3>
                    <p className="woi-pillar-desc">
                      Choose a favourite, discover something unfamiliar, and make time for a good conversation.
                    </p>
                  </div>
                </div>

                <p className="woi-body-text">
                  Our invitation is to slow down, notice the aroma, enjoy the texture and make the moment your own. A drink can be an everyday pleasure and a small journey at the same time.
                </p>
                <span className="woi-closing-accent ak-reveal delay-4">
                  A thoughtful pause, beautifully served.
                </span>
              </div>

              <div className="woi-editorial-image-col ak-reveal-right">
                <div className="woi-image-frame" style={{ height: '620px' }}>
                  <img
                    src={`${baseUrl}water-of-india/philosophy.webp`}
                    alt="Our Philosophy"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Drinking Culture (Image Left, Text Right) */}
        <section className="woi-editorial-section woi-bg-charcoal">
          <div className="container">
            <div className="woi-editorial-grid">
              <div className="woi-editorial-image-col ak-reveal-left">
                <div className="woi-image-frame" style={{ height: '620px' }}>
                  <img
                    src={`${baseUrl}water-of-india/culture.webp`}
                    alt="Drinking Culture"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="woi-editorial-text-col ak-reveal-right">
                <span className="woi-section-label">Drinking Culture</span>
                <h2 className="woi-heading-large">
                  India, one glass at a time.
                </h2>
                <p className="woi-body-text">
                  Indian drinking culture is wonderfully varied. Some drinks are bright and fruit-led; others savoury, creamy, earthy or fragrant with spice. There is no single flavour that tells the whole story.
                </p>

                {/* 4 Landscape Flavor Pillars from PDF page 5 */}
                <div className="woi-landscape-grid">
                  <div className="woi-landscape-card ak-reveal delay-1">
                    <h3 className="woi-landscape-title">Coastal Notes</h3>
                    <p className="woi-landscape-desc">
                      Coconut and kokum bring contrasting textures and tang to the collection.
                    </p>
                  </div>
                  <div className="woi-landscape-card ak-reveal delay-2">
                    <h3 className="woi-landscape-title">Orchard Notes</h3>
                    <p className="woi-landscape-desc">
                      Mango, bael, citrus and melon offer distinctive fruit-led expressions.
                    </p>
                  </div>
                  <div className="woi-landscape-card ak-reveal delay-3">
                    <h3 className="woi-landscape-title">Grain & Dairy</h3>
                    <p className="woi-landscape-desc">
                      Sattu, ragi, curd and milk introduce earthy, savoury and creamy possibilities.
                    </p>
                  </div>
                  <div className="woi-landscape-card ak-reveal delay-4">
                    <h3 className="woi-landscape-title">Tea & Spice</h3>
                    <p className="woi-landscape-desc">
                      Tea, ginger and aromatic spices create a comforting closing note.
                    </p>
                  </div>
                </div>

                <p className="woi-body-text">
                  Names, ingredients and serving customs can change between regions and households. That variety is part of the pleasure: the collection is an invitation to explore, rather than a claim that there is only one authentic version.
                </p>
                <p className="woi-body-text">
                  Follow a flavour you already love, then try something just beyond it. A taste of the unfamiliar is often where a new ritual begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: The Collection (Text Left, Image Right) */}
        <section className="woi-editorial-section woi-bg-espresso">
          <div className="container">
            <div className="woi-editorial-grid">
              <div className="woi-editorial-text-col ak-reveal-left">
                <span className="woi-section-label">The Collection</span>
                <h2 className="woi-heading-large">
                  Choose your starting point.
                </h2>

                <div className="woi-collection-categories">
                  <div className="woi-category-card ak-reveal delay-1">
                    <span className="woi-cat-num">01</span>
                    <h3 className="woi-cat-title">Signature & Grain Classics</h3>
                    <p className="woi-cat-desc">
                      Panakam, Solkadhi, Aam Panna, Jaljeera, Jigarthanda, Thandai and Sattu Sharbat.
                    </p>
                  </div>

                  <div className="woi-category-card ak-reveal delay-2">
                    <span className="woi-cat-num">02</span>
                    <h3 className="woi-cat-title">Coolers & Regional Discoveries</h3>
                    <p className="woi-cat-desc">
                      Fruit, citrus and aromatic sharbat, from Nimbu Pani and Kokum to Variyali, Buransh and Nannari.
                    </p>
                  </div>

                  <div className="woi-category-card ak-reveal delay-3">
                    <span className="woi-cat-num">03</span>
                    <h3 className="woi-cat-title">Creamy, Savoury & Fermented</h3>
                    <p className="woi-cat-desc">
                      Lassi, Chaas, Ghol, Sambharam and grain-based drinks offer a different kind of refreshment.
                    </p>
                  </div>

                  <div className="woi-category-card ak-reveal delay-4">
                    <span className="woi-cat-num">04</span>
                    <h3 className="woi-cat-title">A Warmer Pause</h3>
                    <p className="woi-cat-desc">
                      Kahwa, Noon Chai and Masala Chai complete the collection.
                    </p>
                  </div>
                </div>

                <Link
                  to="/menu"
                  className="woi-menu-cta-btn ak-reveal delay-5"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="woi-editorial-image-col ak-reveal-right">
                <div className="woi-image-frame" style={{ height: '620px' }}>
                  <img
                    src={`${baseUrl}water-of-india/collection.webp`}
                    alt="The Water of India Collection"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DarkFooter />
    </div>
  );
}
