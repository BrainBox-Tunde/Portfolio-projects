import React from 'react';
import { ShieldCheck, Award, MapPin, UserCheck, Building2 } from 'lucide-react';
import { siteConfig } from '../config/siteData';

const iconMap = {
  licensed: ShieldCheck,
  insured: Award,
  local: MapPin,
  'background-checked': UserCheck,
  'dual-capability': Building2
};

export default function TrustBar() {
  return (
    <section className="trust-strip" aria-label="Our Trust Standards">
      <div className="container">
        <div className="trust-grid">
          {siteConfig.trustPillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || ShieldCheck;
            return (
              <div key={pillar.id} className="trust-card">
                <div className="trust-card-icon">
                  <Icon size={18} />
                </div>
                <div className="trust-card-body">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
