import React, { useState } from 'react';
import { 
  Waves, 
  ShieldCheck, 
  Flame, 
  Home, 
  Wrench, 
  Gauge, 
  Building2, 
  ClipboardCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../config/siteData';

const serviceIcons = {
  Waves,
  ShieldCheck,
  Flame,
  Home,
  Wrench,
  Gauge,
  Building2,
  ClipboardCheck
};

export default function ServicesSection({ onSelectServiceCategory }) {
  const [catalogOpen, setCatalogOpen] = useState(false);

  const handleRequestCategory = (categoryTitle) => {
    if (onSelectServiceCategory) {
      onSelectServiceCategory(categoryTitle);
    }
    const formElem = document.querySelector('#service-request-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section section-alt" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="eyebrow">Comprehensive Capabilities</span>
          <h2 id="services-heading">Professional Plumbing for Homes & Businesses</h2>
          <p>
            Whether it's a slow kitchen sink or a full commercial boiler maintenance cycle, our licensed Sandy Springs plumbing team handles every job with precision and respect.
          </p>
        </div>

        {/* Primary 8 Category Cards */}
        <div className="services-grid">
          {siteConfig.primaryServices.map((service) => {
            const Icon = serviceIcons[service.icon] || Wrench;
            return (
              <article key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <Icon size={24} />
                  </div>
                  {service.popularBadge && (
                    <span className="badge-tag">
                      {service.popularBadge}
                    </span>
                  )}
                </div>

                <h3>{service.title}</h3>
                <span className="service-tagline">{service.tagline}</span>
                <p>{service.description}</p>

                <ul className="service-feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature-item">
                      <CheckCircle2 size={15} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <button
                    type="button"
                    onClick={() => handleRequestCategory(service.title)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--navy-900)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>Request Service</span>
                    <ArrowRight size={15} />
                  </button>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>Sandy Springs, GA</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Expandable Comprehensive 50+ Item Catalog Drawer */}
        <div className="catalog-drawer">
          <div 
            className="catalog-drawer-header"
            onClick={() => setCatalogOpen(!catalogOpen)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setCatalogOpen(!catalogOpen); }}
            aria-expanded={catalogOpen}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: '4px' }}>Full Service Directory</span>
              <h3 style={{ fontSize: '1.25rem' }}>Looking for a specific plumbing repair or installation?</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                Explore our full catalog covering over 50 specific residential and commercial plumbing specialties.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              style={{ pointerEvents: 'none' }}
            >
              <span>{catalogOpen ? 'Collapse Catalog' : 'View All Plumbing Services'}</span>
              {catalogOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {catalogOpen && (
            <div className="catalog-drawer-content">
              <div className="catalog-columns">
                {siteConfig.fullServiceCatalog.map((group, idx) => (
                  <div key={idx} className="catalog-group">
                    <h4>
                      <Wrench size={16} />
                      <span>{group.category}</span>
                    </h4>
                    <ul className="catalog-items-list">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href="#service-request-form"
                            onClick={(e) => {
                              e.preventDefault();
                              handleRequestCategory(item);
                            }}
                            className="catalog-item-link"
                          >
                            <span>{item}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
