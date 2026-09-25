import React from 'react';
import { Droplets, Phone, Mail, MapPin, ShieldCheck, Award, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Footer({ onOpenSchedule, onOpenPrivacy, onOpenTerms }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div className="brand-icon-wrapper" style={{ width: '34px', height: '34px' }}>
                <Droplets size={18} />
              </div>
              <div>
                <div className="footer-brand-title">{siteConfig.businessName}</div>
                <div className="footer-brand-sub">{siteConfig.subTitle}</div>
              </div>
            </div>

            <p className="footer-about-text">
              Professional residential and commercial plumbing services with neighborly care. Proudly serving Sandy Springs, GA and surrounding North Atlanta communities.
            </p>

            <div className="footer-badges-row">
              <span className="badge-tag badge-tag-dark">Licensed Plumber</span>
              <span className="badge-tag badge-tag-dark">Fully Insured</span>
              <span className="badge-tag badge-tag-dark">Locally Owned</span>
            </div>
          </div>

          {/* Quick Services Links */}
          <div className="footer-column">
            <h4>Plumbing Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Drain Cleaning & Clogs</a></li>
              <li><a href="#services">Water Heater Services</a></li>
              <li><a href="#services">Leak Detection & Pipe Repair</a></li>
              <li><a href="#services">Toilet & Faucet Installation</a></li>
              <li><a href="#services">Whole-Home Repiping</a></li>
              <li><a href="#residential-commercial">Commercial Plumbing</a></li>
            </ul>
          </div>

          {/* Service Areas Links */}
          <div className="footer-column">
            <h4>Service Areas</h4>
            <ul className="footer-links-list">
              <li><a href="#service-areas">Sandy Springs, GA</a></li>
              <li><a href="#service-areas">Dunwoody</a></li>
              <li><a href="#service-areas">Roswell</a></li>
              <li><a href="#service-areas">Brookhaven</a></li>
              <li><a href="#service-areas">Buckhead</a></li>
              <li><a href="#service-areas">Alpharetta & East Cobb</a></li>
            </ul>
          </div>

          {/* Dispatch & Contact */}
          <div className="footer-column">
            <h4>Contact & Dispatch</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <Phone size={16} />
                <div>
                  <a href={`tel:${siteConfig.phone.tel}`} style={{ fontWeight: 700, color: '#ffffff' }}>
                    {siteConfig.phone.display}
                  </a>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                    {siteConfig.phone.note}
                  </div>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={16} />
                <div>
                  <a href={siteConfig.email.href}>
                    {siteConfig.email.display}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} />
                <div>
                  <span>Sandy Springs, GA</span>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                    Serving Fulton & DeKalb County Border
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '8px' }}>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={onOpenSchedule}
                  style={{ width: '100%' }}
                >
                  Schedule Service Online
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} {siteConfig.fullDisplayName}. All rights reserved.
          </div>

          <div className="footer-bottom-links">
            <button
              type="button"
              onClick={onOpenPrivacy}
              style={{ color: 'inherit', fontSize: 'inherit' }}
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenTerms}
              style={{ color: 'inherit', fontSize: 'inherit' }}
            >
              Terms of Service
            </button>
            <span>•</span>
            <a href="#service-areas">Service Area Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
