import React from 'react';
import { Shield, Globe, Users, Target, CheckCircle2 } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Shield size={28} className="pillar-icon" />,
      title: "Quality Focus",
      text: "Prioritizing sourcing integrity, product standards, and consistency across every trade transaction."
    },
    {
      icon: <Globe size={28} className="pillar-icon" />,
      title: "Global Outlook",
      text: "Building international connections with a forward-looking vision for global market expansion."
    },
    {
      icon: <Users size={28} className="pillar-icon" />,
      title: "Reliable Partnerships",
      text: "Fostering transparent, long-term commercial relationships anchored in trust and operational dependability."
    },
    {
      icon: <Target size={28} className="pillar-icon" />,
      title: "Customer-Centric Approach",
      text: "Understanding unique client requirements to deliver responsive and effective trading solutions."
    }
  ];

  return (
    <section id="about" className="section-spacing about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Side Text Content */}
          <div className="about-text-content">
            <div className="section-badge">
              <span>About Pure Pack Global Trade</span>
            </div>

            <h2 className="section-title light">
              Building Reliable Bridges Between Quality Suppliers & International Markets
            </h2>

            <p className="about-lead-text">
              Pure Pack Global Trade is an emerging trading company focused on building reliable connections between quality suppliers and businesses across markets.
            </p>

            <p className="about-description">
              As a modern B2B trade facilitator, our objective is to streamline international product sourcing and trade logistics. We work diligently to understand client specifications, ensuring consistent quality, clear communication, and dependable execution at every stage of the trading process.
            </p>

            <div className="about-highlights-list">
              <div className="highlight-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Transparent & ethical business practices</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Customized B2B export & supply solutions</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>End-to-end communication & order integrity</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual & Pillar Cards */}
          <div className="about-visual-container">
            <div className="about-image-wrapper glass-panel">
              <img 
                src="/images/about/global-logistics.jpg" 
                alt="Pure Pack Global Trade Logistics & Executive Office" 
                className="about-image"
              />
              <div className="image-overlay-glow"></div>
            </div>
          </div>
        </div>

        {/* Safe 4-Pillar Grid (No Fake Statistics) */}
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card glass-card">
              <div className="pillar-icon-wrapper">
                {pillar.icon}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          background: #0B132B;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4.5rem;
        }

        .about-lead-text {
          font-size: 1.2rem;
          color: #00B4D8;
          font-weight: 600;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .about-description {
          font-size: 1.05rem;
          color: #94A3B8;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .about-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #F8FAFC;
          font-size: 0.95rem;
          font-weight: 500;
          transition: transform 0.25s ease;
        }

        .highlight-item:hover {
          transform: translateX(4px);
          color: #00B4D8;
        }

        .check-icon {
          color: #00B4D8;
          flex-shrink: 0;
        }

        .about-visual-container {
          position: relative;
        }

        .about-image-wrapper {
          position: relative;
          overflow: hidden;
          padding: 0.6rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .about-image {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.6s ease;
        }

        .about-image-wrapper:hover .about-image {
          transform: scale(1.04);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .pillar-card {
          padding: 2rem 1.5rem;
          text-align: left;
          position: relative;
        }

        .pillar-icon-wrapper {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          background: rgba(0, 180, 216, 0.12);
          border: 1px solid rgba(0, 180, 216, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
        }

        .pillar-card:hover .pillar-icon-wrapper {
          background: linear-gradient(135deg, #00B4D8 0%, #0A9396 100%);
          border-color: #00B4D8;
          transform: scale(1.1) rotate(4deg);
          box-shadow: 0 8px 20px rgba(0, 180, 216, 0.35);
        }

        .pillar-icon {
          color: #00B4D8;
          transition: color 0.3s ease;
        }

        .pillar-card:hover .pillar-icon {
          color: #FFFFFF;
        }

        .pillar-title {
          font-size: 1.2rem;
          color: #F8FAFC;
          margin-bottom: 0.6rem;
          transition: color 0.3s ease;
        }

        .pillar-card:hover .pillar-title {
          color: #00B4D8;
        }

        .pillar-text {
          font-size: 0.925rem;
          color: #94A3B8;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .about-image {
            height: 280px;
          }
          .about-text-content .section-title {
            font-size: clamp(1.2rem, 5vw, 1.4rem);
          }
          .about-lead-text {
            font-size: 1rem;
            line-height: 1.5;
          }
          .about-description {
            font-size: 0.9rem;
            line-height: 1.6;
          }
          .highlight-item {
            font-size: 0.85rem;
          }
          .pillar-title {
            font-size: 1.05rem;
          }
          .pillar-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
