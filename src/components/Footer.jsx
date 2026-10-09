import React from 'react';
import { Mail, ArrowUp, MessageSquare } from 'lucide-react';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, href) => {
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
    <footer className="footer-container">
      <div className="container">
        {/* Main Footer 4-Column Grid */}
        <div className="footer-top-grid">
          {/* Column 1: Brand & Overview */}
          <div className="footer-col brand-col">
            <a href="#home" onClick={scrollToTop} className="footer-logo-link">
              <img 
                src="/images/logo/pure-pack-logo.svg" 
                alt="Pure Pack Global Trade" 
                className="footer-logo-img"
              />
            </a>
            <p className="footer-brand-text">
              An emerging B2B global trading enterprise exporting premium rice, grocery commodities, industrial packaging, and custom trade solutions to Dubai (UAE), Canada, the UK, and global markets.
            </p>
        </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home Overview</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Our Business</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Product Portfolio</a></li>
              <li><a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')}>Why Choose Us</a></li>
              <li><a href="#global-trade" onClick={(e) => handleNavClick(e, '#global-trade')}>Global Reach</a></li>
              <li><a href="#quote" onClick={(e) => handleNavClick(e, '#quote')}>Request a Quote</a></li>
            </ul>
          </div>

          {/* Column 3: Core Export Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">Export Categories</h4>
            <ul className="footer-links-list">
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Rice Exports (Basmati & Non-Basmati)</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Grocery & Agri Commodities</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Packaging Items & Master Cartons</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Other & Custom Sourcing</a></li>
            </ul>
          </div>

          {/* Column 4: Key Export Regions & Action */}
          <div className="footer-col">
            <h4 className="footer-col-title">Export Corridors</h4>
            <p className="footer-disclaimer">
              Active shipping routes serving <strong>Dubai (UAE)</strong>, <strong>United Kingdom (UK)</strong>, <strong>Canada</strong>, and international destinations.
            </p>
            <div className="footer-back-to-top">
              <button onClick={scrollToTop} className="btn-back-top">
                <span>Back to Top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Pure Pack Global Trade. All rights reserved.
          </p>
          <div className="legal-placeholders">
            <span>export@purepackglobal.com</span>
            <span className="dot-divider">•</span>
            <span>Terms of Trade</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #070D1D;
          color: #F8FAFC;
          padding-top: 5rem;
          padding-bottom: 2rem;
          border-top: 1px solid rgba(0, 180, 216, 0.15);
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 1.2fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-logo-img {
          height: 42px;
          width: auto;
          margin-bottom: 1.25rem;
        }

        .footer-brand-text {
          font-size: 0.925rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .footer-pills-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .footer-email-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(21, 30, 56, 0.8);
          border: 1px solid rgba(0, 180, 216, 0.25);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.875rem;
          color: #00B4D8;
        }

        .footer-email-pill a:hover {
          text-decoration: underline;
        }

        .footer-col-title {
          font-size: 1.1rem;
          color: #FFFFFF;
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: #00B4D8;
          border-radius: 2px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-list a {
          color: #94A3B8;
          font-size: 0.9rem;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links-list a:hover {
          color: #00B4D8;
          transform: translateX(4px);
        }

        .footer-disclaimer {
          font-size: 0.875rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .btn-back-top {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          color: #E2E8F0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.6rem 1.1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-back-top:hover {
          background: #00B4D8;
          color: #FFFFFF;
          border-color: #00B4D8;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.85rem;
          color: #64748B;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .legal-placeholders {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .dot-divider {
          color: #334155;
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
