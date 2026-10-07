import React from 'react';
import { exportDestinations } from '../data/products';
import { Globe, Compass, RefreshCw, Anchor, Plane, MapPin } from 'lucide-react';

const GlobalTrade = () => {
  return (
    <section id="global-trade" className="section-spacing global-trade-section">
      <div className="container">
        <div className="global-trade-header text-center">
          <div className="section-badge">
            <Globe size={16} />
            <span>Global Trade Corridors & Reach</span>
          </div>
          <h2 className="section-title light">
            Connecting Businesses Across Key Export Markets
          </h2>
          <p className="section-subtitle light">
            Pure Pack Global Trade facilitates reliable trade routes connecting Indian supply networks with commercial hubs in Dubai, Canada, the United Kingdom, and global destinations.
          </p>
        </div>

        {/* Export Destinations Grid */}
        <div className="destinations-grid">
          {exportDestinations.map((dest, idx) => (
            <div key={idx} className="dest-card glass-card">
              <div className="dest-header">
                <span className="dest-code">{dest.code}</span>
                <span className="dest-badge">{dest.highlight}</span>
              </div>
              <h3 className="dest-title">
                <MapPin size={18} className="map-pin-icon" />
                {dest.region}
              </h3>
              <p className="dest-desc">{dest.description}</p>
            </div>
          ))}
        </div>

        {/* Global Trade Hologram Vector Diagram */}
        <div className="global-visual-wrapper">
          <div className="trade-map-card glass-panel">
            <svg viewBox="0 0 800 420" className="trade-map-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0B132B" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B4D8" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>

              <rect width="800" height="420" fill="#151E38" rx="16" />
              <circle cx="400" cy="210" r="260" fill="url(#mapGlow)" />
              
              {/* World Rings */}
              <ellipse cx="400" cy="210" rx="340" ry="140" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
              <line x1="60" y1="210" x2="740" y2="210" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
              
              {/* Trade Route Lines */}
              <path d="M 440 220 Q 320 100 180 180" stroke="url(#lineGrad1)" strokeWidth="2.5" fill="none" strokeDasharray="5 5" className="animated-route" />
              <path d="M 440 220 Q 420 80 380 140" stroke="url(#lineGrad1)" strokeWidth="2.5" fill="none" strokeDasharray="5 5" className="animated-route-reverse" />
              <path d="M 440 220 Q 520 120 620 190" stroke="url(#lineGrad1)" strokeWidth="2.5" fill="none" strokeDasharray="5 5" className="animated-route" />

              {/* India Origin Hub */}
              <g transform="translate(450, 220)">
                <circle r="16" fill="rgba(0,180,216,0.3)" />
                <circle r="7" fill="#00B4D8" />
                <text x="14" y="5" fill="#00B4D8" fontSize="13" fontFamily="sans-serif" fontWeight="800">India (Origin Hub)</text>
              </g>

              {/* Dubai Node */}
              <g transform="translate(560, 200)">
                <circle r="12" fill="rgba(212,175,55,0.3)" />
                <circle r="5" fill="#D4AF37" />
                <text x="12" y="4" fill="#E2E8F0" fontSize="12" fontFamily="sans-serif" fontWeight="700">Dubai (UAE)</text>
              </g>

              {/* UK Node */}
              <g transform="translate(380, 130)">
                <circle r="12" fill="rgba(0,180,216,0.3)" />
                <circle r="5" fill="#00B4D8" />
                <text x="12" y="4" fill="#E2E8F0" fontSize="12" fontFamily="sans-serif" fontWeight="700">United Kingdom (UK)</text>
              </g>

              {/* Canada Node */}
              <g transform="translate(180, 170)">
                <circle r="12" fill="rgba(10,147,150,0.3)" />
                <circle r="5" fill="#0A9396" />
                <text x="12" y="4" fill="#E2E8F0" fontSize="12" fontFamily="sans-serif" fontWeight="700">Canada</text>
              </g>
            </svg>

            <div className="trade-map-caption">
              <Anchor size={18} className="caption-icon" />
              <span>Dedicated export trade lines serving Dubai, UK, Canada, and expanding international destinations.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .global-trade-section {
          background: #151E38;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
          margin-bottom: 3.5rem;
        }

        .dest-card {
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
        }

        .dest-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .dest-code {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          color: #00B4D8;
          background: rgba(0, 180, 216, 0.12);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .dest-badge {
          font-size: 0.725rem;
          color: #D4AF37;
          font-weight: 600;
        }

        .dest-title {
          font-size: 1.15rem;
          color: #F8FAFC;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }

        .map-pin-icon {
          color: #00B4D8;
          flex-shrink: 0;
        }

        .dest-desc {
          font-size: 0.875rem;
          color: #94A3B8;
          line-height: 1.55;
        }

        .global-visual-wrapper {
          position: relative;
        }

        .trade-map-card {
          padding: 1.25rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .trade-map-svg {
          width: 100%;
          height: auto;
          border-radius: 10px;
          display: block;
        }

        .trade-map-caption {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(11, 19, 43, 0.6);
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.875rem;
          font-style: italic;
        }

        .caption-icon {
          color: #00B4D8;
        }

        .animated-route {
          animation: strokeDash 20s linear infinite;
        }

        .animated-route-reverse {
          animation: strokeDash 15s linear infinite reverse;
        }

        @keyframes strokeDash {
          to {
            stroke-dashoffset: -200;
          }
        }

        @media (max-width: 992px) {
          .destinations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .destinations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalTrade;
