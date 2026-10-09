import React from 'react';
import { ArrowRight, ShieldCheck, Globe2, Sparkles, Box } from 'lucide-react';

const Hero = () => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Visual Container */}
      <div className="hero-bg-container">
        <img 
          src="/images/hero/hero-trade.jpg" 
          alt="International Trade Logistics and Port Container Operations" 
          className="hero-bg-img"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-ambient-glow"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Company Badge */}
          <div className="section-badge gold animate-fade-in">
            <Sparkles size={15} />
            <span>Emerging B2B Global Trade Partner</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Pure Pack Global Trade
            <span className="hero-title-highlight">
              Connecting Quality Products with Global Markets
            </span>
          </h1>

          {/* Supporting Subtext */}
          <p className="hero-subtitle">
            Exporting premium Rice, Grocery Commodities & Packaging Solutions to Dubai (UAE), United Kingdom (UK), Canada, and international destinations.
          </p>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <a 
              href="#products" 
              onClick={(e) => handleScroll(e, '#products')} 
              className="btn btn-primary btn-hero"
            >
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href="#quote" 
              onClick={(e) => handleScroll(e, '#quote')} 
              className="btn btn-gold btn-hero"
            >
              <span>Request a Quote</span>
            </a>
          </div>

          {/* Trust Value Feature Chips */}
          <div className="hero-feature-chips">
            <div className="feature-chip">
              <ShieldCheck size={18} className="chip-icon" />
              <span>Direct Sourcing & Quality Sorting</span>
            </div>
            <div className="feature-chip">
              <Globe2 size={18} className="chip-icon" />
              <span>Dubai, UK, Canada & Global Reach</span>
            </div>
            <div className="feature-chip">
              <Box size={18} className="chip-icon" />
              <span>Packaging & Container Logistics</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 7.5rem;
          padding-bottom: 5rem;
          overflow: hidden;
          background: #0B132B;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.65) contrast(1.1);
          transform: scale(1.03);
          transition: transform 10s ease;
        }

        .hero-section:hover .hero-bg-img {
          transform: scale(1);
        }

        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 19, 43, 0.85) 0%,
            rgba(11, 19, 43, 0.7) 40%,
            rgba(11, 19, 43, 0.95) 100%
          );
        }

        .hero-ambient-glow {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 180, 216, 0.18) 0%, rgba(0, 0, 0, 0) 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 860px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.12;
          margin-bottom: 1.25rem;
          letter-spacing: -0.025em;
        }

        .hero-title-highlight {
          display: block;
          margin-top: 0.4rem;
          background: linear-gradient(135deg, #00B4D8 0%, #FFFFFF 60%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          color: rgba(248, 250, 252, 0.85);
          margin-bottom: 2.25rem;
          max-width: 760px;
          font-weight: 400;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .btn-hero {
          padding: 1rem 2.2rem;
          font-size: 1.05rem;
        }

        .hero-feature-chips {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-chip {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(21, 30, 56, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.6rem 1.1rem;
          border-radius: 50px;
          color: #F8FAFC;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .chip-icon {
          color: #00B4D8;
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.75rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.1rem;
          }
          .btn-hero {
            width: 100%;
          }
          .hero-feature-chips {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .feature-chip {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
