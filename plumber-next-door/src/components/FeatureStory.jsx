import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function FeatureStory({ onOpenSchedule }) {
  return (
    <section className="cinematic-feature" aria-labelledby="feature-story-title">
      <img
        src="/images/feature.jpg"
        alt="Pristine residential plumbing craftsmanship in a luxury Sandy Springs home"
        className="cinematic-bg-image"
        loading="lazy"
      />
      <div className="cinematic-overlay" />

      <div className="container">
        <div className="cinematic-content">
          <span className="eyebrow eyebrow-dark">Precision & Craftsmanship</span>
          <h2 id="feature-story-title">From small faucet drips to complex whole-home repiping.</h2>
          <p>
            Plumbing isn’t just about fixing what’s broken today—it’s about protecting your home’s foundations, clean water lines, and peace of mind for years to come. Whether you need a quick cartridge replacement in your kitchen or a modern tankless water heater installation, we bring the same meticulous care to every connection.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
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
              className="btn btn-outline-white btn-lg"
            >
              <Phone size={18} />
              <span>Call Dispatch: {siteConfig.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
