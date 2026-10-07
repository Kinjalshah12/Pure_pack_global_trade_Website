import React from 'react';
import { Mail, MapPin, Phone, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-spacing contact-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <Mail size={16} />
            <span>Corporate Contact</span>
          </div>
          <h2 className="section-title">
            Connect With Our Trade Desk
          </h2>
          <p className="section-subtitle">
            We welcome inquiries from buyers, suppliers, and commercial partners in Dubai, UK, Canada, and global markets.
          </p>
        </div>

        <div className="contact-cards-grid">
          {/* Card 1: Official Corporate Email */}
          <div className="contact-card light-card">
            <div className="contact-icon-box">
              <Mail size={26} className="contact-icon" />
            </div>
            <h3>Official Corporate Email</h3>
            <p className="contact-subtitle-text">Primary Channel for Trade Inquiries</p>
            <a 
              href="mailto:export@purepackglobal.com" 
              className="contact-link-highlight"
            >
              export@purepackglobal.com
            </a>
            <span className="contact-badge-status">Active Inbox</span>
          </div>

          {/* Card 2: Registered Headquarters Placeholder */}
          <div className="contact-card light-card">
            <div className="contact-icon-box">
              <MapPin size={26} className="contact-icon" />
            </div>
            <h3>Corporate Office</h3>
            <p className="contact-subtitle-text">Physical Address Confirmation</p>
            <div className="placeholder-tag-box">
              <code>[Company Address]</code>
            </div>
            <span className="contact-badge-info">Pending Final Confirmation</span>
          </div>

          {/* Card 3: Direct Phone Placeholder */}
          <div className="contact-card light-card">
            <div className="contact-icon-box">
              <Phone size={26} className="contact-icon" />
            </div>
            <h3>Phone Line</h3>
            <p className="contact-subtitle-text">Direct Trade Desk Numbers</p>
            <div className="placeholder-tag-box">
              <code>[Phone Number]</code>
              {/* <code>[WhatsApp Number]</code> */}
            </div>
            <span className="contact-badge-info">Pending Number Setup</span>
          </div>
        </div>

        {/* Operating Hours Note */}
        <div className="contact-footer-note light-card">
          <Clock size={20} className="clock-icon" />
          <span>
            Standard Business Operating Hours: <strong>Monday to Saturday (09:00 - 18:00 UTC)</strong>. Official inquiries sent to <strong>export@purepackglobal.com</strong> are monitored continuously.
          </span>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
          margin-bottom: 2.5rem;
        }

        .contact-card {
          padding: 2.25rem 1.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(0, 180, 216, 0.1);
          border: 1px solid rgba(0, 180, 216, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .contact-icon {
          color: #0A9396;
        }

        .contact-card h3 {
          font-size: 1.25rem;
          color: #0F172A;
          margin-bottom: 0.35rem;
        }

        .contact-subtitle-text {
          font-size: 0.875rem;
          color: #64748B;
          margin-bottom: 1rem;
        }

        .contact-link-highlight {
          font-size: 1.05rem;
          font-weight: 700;
          color: #00B4D8;
          margin-bottom: 1rem;
          transition: color 0.2s ease;
        }

        .contact-link-highlight:hover {
          color: #0B132B;
          text-decoration: underline;
        }

        .placeholder-tag-box {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .placeholder-tag-box code {
          background: #E2E8F0;
          color: #475569;
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .contact-badge-status {
          font-size: 0.775rem;
          font-weight: 700;
          color: #0A9396;
          background: rgba(10, 147, 150, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          margin-top: auto;
        }

        .contact-badge-info {
          font-size: 0.775rem;
          font-weight: 600;
          color: #64748B;
          background: #E2E8F0;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          margin-top: auto;
        }

        .contact-footer-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.25rem 2rem;
          font-size: 0.95rem;
          color: #334155;
          text-align: center;
        }

        .clock-icon {
          color: #00B4D8;
          flex-shrink: 0;
        }

        @media (max-width: 992px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
