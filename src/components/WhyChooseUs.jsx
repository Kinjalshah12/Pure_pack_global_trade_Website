import React from 'react';
import { ShieldCheck, Handshake, UserCheck, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} className="feature-icon" />,
      title: "Quality Focus",
      text: "We prioritize consistency and quality across our sourcing and trading process, adhering to rigorous inspection benchmarks.",
      points: ["Vetted supplier network", "Strict batch consistency", "Inspection compliance"]
    },
    {
      icon: <Handshake size={32} className="feature-icon" />,
      title: "Reliable Partnerships",
      text: "We aim to build long-term relationships with suppliers and buyers through ethical commercial practices and transparent contracts.",
      points: ["Ethical business terms", "Long-term commitment", "Mutual growth strategy"]
    },
    {
      icon: <UserCheck size={32} className="feature-icon" />,
      title: "Customer Focus",
      text: "We focus on understanding distinct business requirements and providing suitable, cost-effective B2B sourcing solutions.",
      points: ["Tailored specifications", "Responsive communication", "Dedicated trade desk"]
    },
    {
      icon: <Globe2 size={32} className="feature-icon" />,
      title: "Global Perspective",
      text: "We are building our business with international markets and opportunities in mind, facilitating smooth cross-border trade flow.",
      points: ["Cross-border awareness", "Export compliance", "Adaptive market vision"]
    }
  ];

  return (
    <section id="why-us" className="section-spacing why-us-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge gold">
            <Sparkles size={16} />
            <span>Why Business Partners Choose Us</span>
          </div>
          <h2 className="section-title light">
            Built for Commercial Trust & Long-Term Value
          </h2>
          <p className="section-subtitle light">
            Our operational framework centers on reliability, proactive communication, and disciplined trade management.
          </p>
        </div>

        <div className="why-us-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="why-card glass-card">
              <div className="why-card-header">
                <div className="icon-box">
                  {feature.icon}
                </div>
                <h3 className="why-card-title">{feature.title}</h3>
              </div>

              <p className="why-card-text">{feature.text}</p>

              <div className="why-card-points">
                {feature.points.map((pt, pIdx) => (
                  <div key={pIdx} className="point-row">
                    <CheckCircle2 size={16} className="point-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-us-section {
          background: #0B132B;
          position: relative;
        }

        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        .why-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(21, 30, 56, 0.7);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .why-card:hover {
          border-color: #00B4D8;
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0, 180, 216, 0.2);
          background: rgba(21, 30, 56, 0.9);
        }

        .why-card-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .icon-box {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%);
          border: 1px solid rgba(0, 180, 216, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.35s ease;
        }

        .why-card:hover .icon-box {
          background: linear-gradient(135deg, #00B4D8 0%, #D4AF37 100%);
          transform: scale(1.08) rotate(3deg);
          box-shadow: 0 8px 20px rgba(0, 180, 216, 0.35);
        }

        .feature-icon {
          color: #00B4D8;
          transition: color 0.35s ease;
        }

        .why-card:hover .feature-icon {
          color: #0B132B;
        }

        .why-card-title {
          font-size: 1.35rem;
          color: #F8FAFC;
          transition: color 0.3s ease;
        }

        .why-card:hover .why-card-title {
          color: #00B4D8;
        }

        .why-card-text {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .why-card-points {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: auto;
        }

        .point-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.875rem;
          color: #E2E8F0;
          font-weight: 500;
          transition: transform 0.25s ease;
        }

        .why-card:hover .point-row {
          transform: translateX(3px);
        }

        .point-icon {
          color: #D4AF37;
        }

        @media (max-width: 992px) {
          .why-us-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
