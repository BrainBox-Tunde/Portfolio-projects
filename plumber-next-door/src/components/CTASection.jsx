import React from 'react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function CTASection({ onOpenSchedule }) {
  return (
    <section className="cta-break-section" aria-labelledby="cta-break-heading">
      <div className="container">
        <div className="cta-break-inner">
          <span className="eyebrow eyebrow-dark">Next Steps</span>
          <h2 id="cta-break-heading">Plumbing problem? Start here.</h2>
          <p>
            Tell us what’s happening in your Sandy Springs home or business, and we’ll help you take the next step with straightforward, neighborly care.
          </p>

          <div className="cta-break-buttons">
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
              <span>Call: {siteConfig.phone.display}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
