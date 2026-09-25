import React from 'react';
import { Home, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function ResidentialCommercialSplit({ onSelectResidential, onSelectCommercial }) {
  return (
    <section id="residential-commercial" className="section" aria-labelledby="split-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Dual Capabilities</span>
          <h2 id="split-heading">Residential Living & Commercial Business</h2>
          <p>
            From single-family neighborhoods to high-traffic commercial storefronts across Sandy Springs, we have the specialized equipment and licensed expertise to keep water flowing smoothly.
          </p>
        </div>

        <div className="split-grid">
          {/* Residential Card */}
          <div className="split-card">
            <div className="split-card-media">
              <img
                src="/images/residential.jpg"
                alt="Plumber carefully testing under-sink water filtration and shutoff valves in a luxury residential home"
                loading="lazy"
              />
              <span className="split-card-badge">Residential Focus</span>
            </div>

            <div className="split-card-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--aqua-600)' }}>
                <Home size={20} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Homes & Families</span>
              </div>

              <h3>Residential Plumbing</h3>
              <p>
                Caring for the fixtures and pipes your family relies on daily. We arrive cleanly, treat your residence with absolute care, and diagnose clogs, hot water issues, and leaks with no unnecessary upsells.
              </p>

              <div className="split-card-tags">
                <span className="badge-tag">Kitchens & Bathrooms</span>
                <span className="badge-tag">Clogged Drains</span>
                <span className="badge-tag">Water Heaters</span>
                <span className="badge-tag">Whole-Home Repiping</span>
                <span className="badge-tag">Garbage Disposals</span>
              </div>

              <div className="split-card-actions">
                <button
                  type="button"
                  className="btn btn-navy"
                  style={{ width: '100%' }}
                  onClick={onSelectResidential}
                >
                  <span>Request Residential Service</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Commercial Card */}
          <div className="split-card">
            <div className="split-card-media">
              <img
                src="/images/commercial.jpg"
                alt="Clean modern commercial building mechanical room with stainless steel and copper water pipelines"
                loading="lazy"
              />
              <span className="split-card-badge" style={{ backgroundColor: 'var(--navy-950)' }}>Commercial & Retail</span>
            </div>

            <div className="split-card-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--navy-700)' }}>
                <Building2 size={20} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Offices & Dining</span>
              </div>

              <h3>Commercial Plumbing</h3>
              <p>
                Plumbing disruptions can halt business operations. We provide responsive service for restaurants, offices, retail suites, and property management portfolios with commercial-grade fixtures and rapid turnarounds.
              </p>

              <div className="split-card-tags">
                <span className="badge-tag">Grease Trap Plumbing</span>
                <span className="badge-tag">Commercial Restrooms</span>
                <span className="badge-tag">Backflow Testing</span>
                <span className="badge-tag">Flushometer Valves</span>
                <span className="badge-tag">Preventative Plans</span>
              </div>

              <div className="split-card-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={onSelectCommercial}
                >
                  <span>Discuss Commercial Plumbing</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
