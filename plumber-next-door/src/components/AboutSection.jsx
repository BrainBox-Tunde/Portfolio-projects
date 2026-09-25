import React from 'react';
import { Calendar, Phone, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function AboutSection({ onOpenSchedule }) {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Visual Side */}
          <div className="about-image-wrapper">
            <img
              src="/images/about.jpg"
              alt="Plumber Next Door technician organizing diagnostic equipment and plumbing tools in a Sandy Springs workshop"
              loading="lazy"
            />
            <div className="about-quote-card">
              <p>“We believe inviting a plumber into your home shouldn't cause stress. You deserve calm explanations, clean work, and honest respect for your property.”</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="about-text-content">
            <span className="eyebrow">Local Neighbor Philosophy</span>
            <h2 id="about-heading">The plumber you want to know before you need one.</h2>
            
            <p>
              When a water heater fails or a drain backs up, the last thing you need is high-pressure sales talk from a massive out-of-town franchise. Plumber Next Door was built on a simpler, more neighborly standard: providing Sandy Springs with dependable, licensed plumbing help that genuinely feels close to home.
            </p>

            <p>
              Whether we're tightening a kitchen fixture in a Riverside neighborhood home or resolving a grease trap line for a Roswell Road restaurant, our technicians arrive on time, explain the diagnosis in plain English, and leave your property as spotless as when we walked in.
            </p>

            {/* Neighborhood Values Grid */}
            <div className="about-highlights">
              <div className="about-highlight-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: 'var(--aqua-600)' }}>
                  <Shield size={18} />
                  <h4>Respect Inside Your Home</h4>
                </div>
                <p>Protective drop cloths, clean shoe covers, and meticulous work areas on every visit.</p>
              </div>

              <div className="about-highlight-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: 'var(--aqua-600)' }}>
                  <HeartHandshake size={18} />
                  <h4>Clear Communication</h4>
                </div>
                <p>Straightforward options and honest pricing before any wrench turns.</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenSchedule}
              >
                <Calendar size={17} />
                <span>Schedule a Service Visit</span>
              </button>

              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="btn btn-navy"
              >
                <Phone size={17} />
                <span>Speak with Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
