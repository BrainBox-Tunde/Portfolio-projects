import React from 'react';
import { Phone, Calendar, ShieldCheck, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Hero({ onOpenSchedule }) {
  const handleScrollToProblems = (e) => {
    e.preventDefault();
    const el = document.querySelector('#problem-selector');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Story */}
          <div className="hero-content">


            <h1 id="hero-heading" className="hero-title">
              Plumbing help that’s <br />
              <span className="accent-text">right around the corner.</span>
            </h1>

            <p className="hero-lead">
              When something leaks, backs up, or stops heating, you want an experienced plumber who genuinely treats you like a neighbor. Professional residential and commercial plumbing assistance throughout Sandy Springs and North Atlanta.
            </p>

            {/* Conversion CTA Group */}
            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={onOpenSchedule}
              >
                <Calendar size={18} />
                <span>Schedule Service</span>
              </button>

              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="btn btn-navy btn-lg"
              >
                <Phone size={18} />
                <span>Call Now: {siteConfig.phone.display}</span>
              </a>
            </div>

            {/* Contextual Secondary Prompt */}
            <div style={{ marginBottom: '24px' }}>
              <a
                href="#problem-selector"
                onClick={handleScrollToProblems}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--aqua-600)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px'
                }}
              >
                <Sparkles size={15} />
                Dealing with a specific leak, clog, or water heater? Tell us what's wrong →
              </a>
            </div>

            {/* Verified Compact Trust Signals */}
            <div className="hero-trust-row">
              <div className="hero-trust-item">
                <ShieldCheck size={18} />
                <span>Licensed Plumbers</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>Fully Insured</span>
              </div>
              <div className="hero-trust-item">
                <MapPin size={18} />
                <span>Locally Owned</span>
              </div>
            </div>
          </div>

          {/* Right Visual Storytelling */}
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/images/hero.jpg"
                alt="Plumber Next Door technician consulting calmly with Sandy Springs homeowner in an open modern kitchen"
                loading="eager"
              />
            </div>

            {/* Floating Information Card */}
            <div className="hero-floating-card">
              <div className="hero-floating-icon">
                <ShieldCheck size={24} />
              </div>
              <div className="hero-floating-text">
                <h4>Neighborly Service</h4>
                <p>Clean shoe covers, clear upfront estimates, and respect for your home.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
