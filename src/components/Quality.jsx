import React from 'react';
import { qualityCommitments } from '../data/products';
import { Award, ShieldCheck, FileCheck, CheckCircle2, Layers } from 'lucide-react';

const Quality = () => {
  return (
    <section id="quality" className="section-spacing quality-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <Award size={16} />
            <span>Standards & Operating Integrity</span>
          </div>
          <h2 className="section-title">
            Quality & Business Reliability
          </h2>
          <p className="section-subtitle">
            Our operational commitment is grounded in transparency, disciplined product sourcing, and consistent trade execution.
          </p>
        </div>

        <div className="quality-content-wrapper">
          {/* Quality Grid Cards */}
          <div className="quality-grid">
            {qualityCommitments.map((item, idx) => (
              <div key={idx} className="quality-card light-card">
                <div className="card-badge-num">0{idx + 1}</div>
                <div className="quality-card-content">
                  <h3 className="quality-card-title">{item.title}</h3>
                  <p className="quality-card-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Commitment Notice Panel */}
          <div className="quality-assurance-banner">
            <div className="assurance-icon-box">
              <ShieldCheck size={36} className="assurance-icon" />
            </div>
            <div className="assurance-text">
              <h3>Our Operational Promise</h3>
              <p>
                We do not make inflated claims or showcase unverified badges. Every product inquiry undergoes clear technical evaluation, transparent contract terms, and open communication from inquiry to final delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quality-section {
          background: #FFFFFF;
          border-top: 1px solid #E2E8F0;
        }

        .quality-content-wrapper {
          margin-top: 3.5rem;
        }

        .quality-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 3rem;
        }

        .quality-card {
          padding: 2rem 1.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .card-badge-num {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: #00B4D8;
          opacity: 0.35;
          margin-bottom: 0.75rem;
        }

        .quality-card-title {
          font-size: 1.25rem;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .quality-card-detail {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
        }

        .quality-assurance-banner {
          background: linear-gradient(135deg, #0B132B 0%, #1C2541 100%);
          border-radius: 16px;
          padding: 2.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          color: #FFFFFF;
          box-shadow: 0 10px 30px rgba(11, 19, 43, 0.15);
          border: 1px solid rgba(0, 180, 216, 0.2);
        }

        .assurance-icon-box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(0, 180, 216, 0.15);
          border: 1px solid rgba(0, 180, 216, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .assurance-icon {
          color: #00B4D8;
        }

        .assurance-text h3 {
          font-size: 1.35rem;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
        }

        .assurance-text p {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .quality-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .quality-assurance-banner {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .quality-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Quality;
