import React, { useState } from 'react';
import { productCategories } from '../data/products';
import { CheckCircle2, PackageCheck } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'rice', label: 'Rice Exports' },
    { id: 'grocery', label: 'Grocery Items' },
    { id: 'packaging', label: 'Packaging Items' },
    { id: 'other', label: 'Other & Custom' }
  ];

  const filteredProducts = activeTab === 'all'
    ? productCategories
    : productCategories.filter(p => p.id === activeTab);

  return (
    <section id="products" className="section-spacing products-section">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <PackageCheck size={16} />
            <span>Product & Export Portfolio</span>
          </div>
          <h2 className="section-title">
            Our Core B2B Product Categories
          </h2>
          <p className="section-subtitle">
            We specialize in high-demand global export products including premium rice, grocery staples, industrial packaging, and tailored B2B sourcing solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="products-filter-wrapper">
          <div className="filter-tabs">
            {categories.map((tab) => (
              <button
                key={tab.id}
                className={`filter-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card light-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                />
                <span className="product-category-tag">{product.category}</span>
              </div>

              <div className="product-card-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
                <p className="product-description">{product.description}</p>

                {/* Compact Spec Highlights */}
                <div className="product-specs">
                  {product.specifications.slice(0, 3).map((spec, idx) => (
                    <div key={idx} className="spec-item">
                      <CheckCircle2 size={13} className="spec-icon" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Pills */}
                <div className="product-tags">
                  {product.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="product-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .products-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
          padding: 4.5rem 0;
        }

        .products-filter-wrapper {
          display: flex;
          justify-content: center;
          margin: 2rem 0 2.5rem 0;
        }

        .filter-tabs {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #E2E8F0;
          padding: 0.3rem;
          border-radius: 50px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .filter-tab-btn {
          padding: 0.5rem 1.1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filter-tab-btn:hover {
          color: #0F172A;
        }

        .filter-tab-btn.active {
          background: #0B132B;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(11, 19, 43, 0.25);
        }

        /* 4 Column Compact Grid Layout */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .product-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 12px;
          background: #FFFFFF;
        }

        .product-image-container {
          position: relative;
          height: 160px;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.06);
        }

        .product-category-tag {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: rgba(11, 19, 43, 0.88);
          backdrop-filter: blur(6px);
          color: #00B4D8;
          font-size: 0.725rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
          border: 1px solid rgba(0, 180, 216, 0.3);
          letter-spacing: 0.02em;
        }

        .product-card-body {
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .product-name {
          font-size: 1.15rem;
          color: #0F172A;
          margin-bottom: 0.2rem;
          line-height: 1.3;
        }

        .product-tagline {
          font-size: 0.8rem;
          color: #0A9396;
          font-weight: 600;
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }

        .product-description {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-specs {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: #F1F5F9;
          border-radius: 8px;
          border: 1px solid #E2E8F0;
        }

        .spec-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.775rem;
          color: #334155;
          font-weight: 500;
          line-height: 1.35;
        }

        .spec-icon {
          color: #0A9396;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .product-tags {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-top: auto;
        }

        .product-pill {
          background: #E2E8F0;
          color: #475569;
          font-size: 0.725rem;
          font-weight: 600;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .product-image-container {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
