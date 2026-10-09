import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappNumber = "919316587746";
  const defaultMessage = encodeURIComponent(
    "Hello Pure Pack Global Trade Team,\nI am visiting your website and would like to inquire about B2B exports (Rice, Grocery, Packaging)."
  );

  const handleLaunchWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <div className="floating-whatsapp-wrapper">
      {showTooltip && (
        <div className="whatsapp-tooltip animate-fade-in">
          <div className="tooltip-text">
            <strong>WhatsApp Trade Desk</strong>
            <span>Instant Response • Direct Chat</span>
          </div>
          <button 
            className="tooltip-close"
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <button 
        onClick={handleLaunchWhatsApp}
        className="floating-whatsapp-btn"
        aria-label="Contact on WhatsApp"
        title="Chat on WhatsApp"
      >
        <div className="btn-pulse-glow"></div>
        <MessageSquare size={26} className="whatsapp-icon" />
      </button>

      <style>{`
        .floating-whatsapp-wrapper {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .whatsapp-tooltip {
          background: #0B132B;
          color: #FFFFFF;
          border: 1px solid rgba(0, 180, 216, 0.4);
          padding: 10px 14px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 240px;
          backdrop-filter: blur(10px);
        }

        .tooltip-text {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
        }

        .tooltip-text strong {
          color: #25D366;
          font-size: 0.9rem;
        }

        .tooltip-text span {
          color: #94A3B8;
          font-size: 0.775rem;
        }

        .tooltip-close {
          background: none;
          border: none;
          color: #64748B;
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: color 0.2s ease;
        }

        .tooltip-close:hover {
          color: #FFFFFF;
        }

        .floating-whatsapp-btn {
          position: relative;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #FFFFFF;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
        }

        .floating-whatsapp-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
        }

        .btn-pulse-glow {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #25D366;
          animation: pulseBorder 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          pointer-events: none;
        }

        @keyframes pulseBorder {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.25); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }

        .whatsapp-icon {
          fill: currentColor;
        }

        @media (max-width: 768px) {
          .floating-whatsapp-wrapper {
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;
