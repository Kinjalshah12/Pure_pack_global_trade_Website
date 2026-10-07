import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll spy for active section highlight
      const sections = ['home', 'about', 'products', 'why-us', 'global-trade', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Global Trade', href: '#global-trade', id: 'global-trade' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="navbar-brand">
          <img 
            src="/images/logo/pure-pack-logo.svg" 
            alt="Pure Pack Global Trade Logo" 
            className="brand-logo-img"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <a 
            href="#quote" 
            onClick={(e) => handleNavClick(e, '#quote')} 
            className="btn btn-primary btn-nav-quote"
          >
            <span>Request a Quote</span>
            <ArrowRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <a 
              href="#quote" 
              onClick={(e) => handleNavClick(e, '#quote')} 
              className="btn btn-primary btn-full-width"
            >
              <span>Request a Quote</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.35s ease;
          background: rgba(11, 19, 43, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .navbar-scrolled {
          padding: 0.75rem 0;
          background: rgba(11, 19, 43, 0.92);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          border-bottom: 1px solid rgba(0, 180, 216, 0.2);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
        }

        .brand-logo-img {
          height: 44px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .brand-logo-img:hover {
          transform: scale(1.02);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          color: rgba(248, 250, 252, 0.8);
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          padding: 0.4rem 0;
          transition: color 0.25s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: #00B4D8;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00B4D8, #D4AF37);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: #F8FAFC;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: 6px;
          transition: color 0.2s ease;
        }

        .mobile-toggle-btn:hover {
          color: #00B4D8;
        }

        .mobile-menu-drawer {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(11, 19, 43, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 180, 216, 0.2);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-drawer.open {
          max-height: 400px;
        }

        .mobile-menu-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          color: #F8FAFC;
          font-size: 1.1rem;
          font-weight: 500;
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link.active {
          color: #00B4D8;
          font-weight: 600;
        }

        .btn-full-width {
          width: 100%;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .mobile-menu-drawer {
            display: block;
          }
          .btn-nav-quote {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
