import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Clock, Globe, ShieldCheck } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "919316587746";
  const whatsappDisplay = "+91 93165 87746";

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hello Pure Pack Global Trade Team,\nI am contacting you from your website for a B2B export inquiry."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="section-spacing contact-section">
      <div className="container">

        {/* Operating Hours Note */}
        <div className="contact-footer-note light-card">
          <Clock size={20} className="clock-icon" />
          <span>
            Standard Business Operating Hours: <strong>Monday to Saturday (09:00 - 18:00 UTC)</strong>. WhatsApp inquiries to <strong>{whatsappDisplay}</strong> and emails to <strong>export@purepackglobal.com</strong> are monitored continuously.
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

        .highlight-card {
          border-color: rgba(37, 211, 102, 0.4);
          background: linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 100%);
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

        .wa-icon-box {
          background: rgba(37, 211, 102, 0.12);
          border-color: rgba(37, 211, 102, 0.3);
        }

        .contact-icon {
          color: #0A9396;
        }

        .wa-contact-icon {
          color: #25D366;
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
          background: none;
          border: none;
          cursor: pointer;
        }

        .wa-link-highlight {
          color: #128C7E;
        }

        .contact-link-highlight:hover {
          color: #0B132B;
          text-decoration: underline;
        }

        .btn-wa-action {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #FFFFFF;
          font-size: 0.875rem;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
          margin-top: auto;
        }

        .btn-wa-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.45);
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
