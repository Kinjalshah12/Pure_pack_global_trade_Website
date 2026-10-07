import React, { useState, useEffect } from 'react';
import { Send, Mail, CheckCircle2, Globe, AlertCircle, Loader2 } from 'lucide-react';
import { productCategories } from '../data/products';

const QuoteForm = ({ selectedProduct }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneWhatsApp: '',
    country: 'Dubai (UAE)',
    productCategory: 'Premium Rice Portfolio',
    quantity: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendError, setSendError] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({ ...prev, productCategory: selectedProduct }));
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSendError(false);

    try {
      // Direct background email delivery via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/export@purepackglobal.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Export Inquiry: ${formData.productCategory} - ${formData.companyName}`,
          _template: 'table',
          _captcha: 'false',
          'Full Name': formData.fullName,
          'Company Name': formData.companyName,
          'Email Address': formData.email,
          'Phone Number': formData.phoneWhatsApp,
          'Destination Country': formData.country,
          'Product Category': formData.productCategory,
          'Estimated Quantity': formData.quantity || 'Not Specified',
          'Specification Details': formData.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setFormSubmitted(true);
      } else {
        triggerMailtoFallback();
      }
    } catch (err) {
      console.warn("Direct API send fallback triggered:", err);
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    setIsSubmitting(false);
    setFormSubmitted(true);
    setSendError(true);

    const emailSubject = encodeURIComponent(`B2B Trade Inquiry: ${formData.productCategory} - ${formData.companyName}`);
    const emailBody = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Company: ${formData.companyName}\n` +
      `Email: ${formData.email}\n` +
      `Phone Number: ${formData.phoneWhatsApp}\n` +
      `Destination: ${formData.country}\n` +
      `Product Category: ${formData.productCategory}\n` +
      `Estimated Quantity: ${formData.quantity}\n\n` +
      `Message Details:\n${formData.message}`
    );

    window.location.href = `mailto:export@purepackglobal.com?subject=${emailSubject}&body=${emailBody}`;
  };

  /* 
  WhatsApp direct launcher commented out for now
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Pure Pack Global Trade Team,\n\nI would like to inquire about ${formData.productCategory || 'Rice / Grocery / Packaging exports'}.\nFull Name: ${formData.fullName || 'N/A'}\nCompany: ${formData.companyName || 'N/A'}\nDestination: ${formData.country || 'N/A'}\nDetails: ${formData.message || 'N/A'}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };
  */

  return (
    <section id="quote" className="section-spacing quote-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge gold">
            <Send size={16} />
            <span>Direct B2B Quote Delivery</span>
          </div>
          <h2 className="section-title light">
            Let's Discuss Your Export Requirements
          </h2>
          <p className="section-subtitle light">
            Fill out the requirement form below to send an immediate inquiry directly to our trade desk at <strong>export@purepackglobal.com</strong>.
          </p>
        </div>

        <div className="quote-grid">
          {/* Form Container */}
          <div className="quote-form-card glass-panel">
            {formSubmitted ? (
              <div className="form-success-state">
                <CheckCircle2 size={64} className="success-icon" />
                <h3>Inquiry Sent Directly!</h3>
                <p className="success-main-desc">
                  Thank you, <strong>{formData.fullName}</strong>. Your export inquiry for <strong>{formData.productCategory}</strong> has been transmitted directly to <strong>export@purepackglobal.com</strong>.
                </p>
                <p className="success-subtext">
                  Our commercial team will review your specifications and contact you at <strong>{formData.email}</strong> within 24 business hours.
                </p>

                {sendError && (
                  <div className="fallback-notice">
                    <AlertCircle size={18} />
                    <span>Your local email client was opened as a backup confirmation.</span>
                  </div>
                )}

                <div className="success-actions">
                  <a 
                    href={`mailto:export@purepackglobal.com?subject=Inquiry Details: ${formData.companyName}`}
                    className="btn btn-primary"
                  >
                    <Mail size={18} />
                    <span>Send Follow-Up Email</span>
                  </a>

                  {/* 
                  WhatsApp button commented out for now
                  <button onClick={handleWhatsAppDirect} className="btn btn-gold">
                    <MessageSquare size={18} />
                    <span>Chat on WhatsApp</span>
                  </button> 
                  */}
                </div>

                <button 
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      email: '',
                      phoneWhatsApp: '',
                      country: 'Dubai (UAE)',
                      productCategory: 'Premium Rice Portfolio',
                      quantity: '',
                      message: ''
                    });
                  }}
                  className="btn btn-outline-light btn-reset"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label light">Full Name *</label>
                    <input 
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input dark-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label light">Company Name *</label>
                    <input 
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Global Foods Trading LLC"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="form-input dark-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label light">Email Address *</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      placeholder="buyer@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input dark-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label light">Phone Number *</label>
                    <input 
                      type="text"
                      name="phoneWhatsApp"
                      required
                      placeholder="+971 50 000 0000"
                      value={formData.phoneWhatsApp}
                      onChange={handleChange}
                      className="form-input dark-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label light">Target Destination *</label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="form-select dark-input"
                    >
                      <option value="Dubai (UAE)">Dubai (UAE)</option>
                      <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                      <option value="Canada">Canada</option>
                      <option value="Other International Region">Other Destination</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label light">Product Category *</label>
                    <select 
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      className="form-select dark-input"
                    >
                      {productCategories.map(cat => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label light">Estimated Order Quantity / Volume</label>
                  <input 
                    type="text"
                    name="quantity"
                    placeholder="e.g. 1 20ft Container (Rice) / 10,000 Master Cartons"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="form-input dark-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label light">Specification & Requirement Details *</label>
                  <textarea 
                    name="message"
                    required
                    placeholder="Specify target grain length, packaging size (5kg/10kg/50kg), box dimensions, destination port, or target delivery window..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea dark-input"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary btn-submit-quote"
                >
                  {isSubmitting ? (
                    <div className="btn-loading-state">
                      <Loader2 size={18} className="spinner-icon" />
                      <span>Transmitting Inquiry to export@purepackglobal.com...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Inquiry Directly</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Quick Direct Communication Panel */}
          <div className="quick-contact-panel glass-card">
            <h3 className="panel-title">Official Corporate Inbox</h3>
            <p className="panel-text">
              Directly connect with our export desk for urgent trade inquiries or bulk specifications.
            </p>

            <div className="direct-buttons">
              <a 
                href="mailto:export@purepackglobal.com"
                className="btn btn-secondary direct-btn"
              >
                <Mail size={20} className="btn-icon-gold" />
                <div className="btn-text-block">
                  <span className="btn-label">Email Us Directly</span>
                  <span className="btn-value">export@purepackglobal.com</span>
                </div>
              </a>

              {/* 
              WhatsApp desk button commented out for now
              <button onClick={handleWhatsAppDirect} className="btn btn-secondary direct-btn">
                <MessageSquare size={20} className="btn-icon-teal" />
                <div className="btn-text-block">
                  <span className="btn-label">WhatsApp Trade Desk</span>
                  <span className="btn-value">Launch Instant Chat</span>
                </div>
              </button>
              */}
            </div>

            <div className="inquiry-hours">
              <Globe size={18} className="hours-icon" />
              <span>Direct delivery to export@purepackglobal.com with 24-hour response window.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quote-section {
          background: #0B132B;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .quote-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 2.5rem;
          margin-top: 3.5rem;
          align-items: start;
        }

        .quote-form-card {
          padding: 2.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-label.light {
          color: #E2E8F0;
        }

        .dark-input {
          background: rgba(11, 19, 43, 0.7) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          color: #F8FAFC !important;
        }

        .dark-input:focus {
          border-color: #00B4D8 !important;
          box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2) !important;
        }

        .dark-input option {
          background: #0B132B;
          color: #F8FAFC;
        }

        .btn-submit-quote {
          width: 100%;
          padding: 1rem;
          font-size: 1.05rem;
          margin-top: 0.5rem;
        }

        .btn-loading-state {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .spinner-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .form-success-state {
          text-align: center;
          padding: 2rem 1rem;
        }

        .success-icon {
          color: #00B4D8;
          margin-bottom: 1.25rem;
        }

        .form-success-state h3 {
          font-size: 1.85rem;
          color: #F8FAFC;
          margin-bottom: 0.75rem;
        }

        .success-main-desc {
          color: #E2E8F0;
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .success-subtext {
          color: #94A3B8;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .fallback-notice {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #D4AF37;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .success-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 1.5rem 0;
          flex-wrap: wrap;
        }

        .btn-outline-light {
          background: transparent;
          color: #94A3B8;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .btn-outline-light:hover {
          color: #FFFFFF;
          border-color: #00B4D8;
        }

        .btn-reset {
          margin-top: 1rem;
          font-size: 0.875rem;
        }

        .quick-contact-panel {
          padding: 2.25rem;
        }

        .panel-title {
          font-size: 1.3rem;
          color: #F8FAFC;
          margin-bottom: 0.5rem;
        }

        .panel-text {
          font-size: 0.95rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .direct-buttons {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .direct-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem;
          justify-content: flex-start;
          text-align: left;
        }

        .btn-icon-gold {
          color: #D4AF37;
        }

        .btn-icon-teal {
          color: #00B4D8;
        }

        .btn-text-block {
          display: flex;
          flex-direction: column;
        }

        .btn-label {
          font-size: 0.775rem;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .btn-value {
          font-size: 0.95rem;
          color: #F8FAFC;
          font-weight: 600;
        }

        .inquiry-hours {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #64748B;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hours-icon {
          color: #00B4D8;
        }

        @media (max-width: 992px) {
          .quote-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default QuoteForm;
