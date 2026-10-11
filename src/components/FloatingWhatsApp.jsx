import React, { useState } from 'react';
import { X } from 'lucide-react';

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
        <svg viewBox="0 0 24 24" className="whatsapp-icon" aria-hidden="true">
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.09 0C5.51 0 .07 5.44.07 12.02c0 2.12.55 4.2 1.6 6.02L0 24l6.1-1.57c1.76.96 3.76 1.46 5.98 1.46h.01c6.58 0 11.93-5.44 11.93-12.12 0-3.24-1.27-6.3-3.5-8.6Zm-8.43 18.47h-.01c-1.79 0-3.55-.48-5.08-1.39l-.36-.22-3.62.94 1-3.52-.24-.36A9.7 9.7 0 0 1 2.1 12.02c0-5.37 4.37-9.73 9.76-9.73 2.6 0 5.04 1.01 6.87 2.85a9.63 9.63 0 0 1 2.84 6.88c0 5.37-4.37 9.74-9.74 9.74Zm5.36-7.3c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.45-.87-.77-1.46-1.72-1.63-2.01-.17-.3-.02-.46.13-.61.14-.14.29-.35.44-.52.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.49-.67-.5l-.57-.01c-.2 0-.52.07-.79.35-.27.28-1.03 1.01-1.03 2.47s1.05 2.86 1.2 3.06c.15.2 2.08 3.19 5.05 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.35Z"/>
        </svg>
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
          width: 26px;
          height: 26px;
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
