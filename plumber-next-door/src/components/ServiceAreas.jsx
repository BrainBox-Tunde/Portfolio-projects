import React, { useState } from 'react';
import { MapPin, Search, CheckCircle, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function ServiceAreas() {
  const [zipInput, setZipInput] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  const handleCheckZip = (e) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    // Check if zip belongs to known primary or secondary areas
    const match = siteConfig.serviceAreas.communities.find((c) =>
      c.zipCodes.includes(cleanZip)
    );

    if (match) {
      setCheckResult({
        type: 'success',
        message: `Great news! We regularly serve ${match.name} (${cleanZip}). Submit your service request or give us a call for fast scheduling.`
      });
    } else {
      setCheckResult({
        type: 'info',
        message: `Thanks! ZIP code ${cleanZip} is near our North Atlanta service boundary. Send us your request with your address and we'll confirm rapid availability.`
      });
    }
  };

  return (
    <section id="service-areas" className="section section-alt" aria-labelledby="areas-heading">
      <div className="container">
        <div className="areas-container">
          {/* Left: Community Chips */}
          <div>
            <span className="eyebrow">Local Coverage</span>
            <h2 id="areas-heading">Proudly Serving Sandy Springs & North Atlanta</h2>
            <p>
              Sandy Springs is our home turf. Whether you live near City Springs, along Roswell Road, or in peaceful neighborhoods bordering the Chattahoochee, you can count on responsive service from plumbers who know the local area.
            </p>

            <div className="communities-chips-grid">
              {siteConfig.serviceAreas.communities.map((c) => (
                <div
                  key={c.name}
                  className={`community-chip ${c.tag === 'Primary Focus' ? 'primary-chip' : ''}`}
                >
                  <MapPin size={15} style={{ color: c.tag === 'Primary Focus' ? 'var(--aqua-600)' : 'var(--navy-700)' }} />
                  <span>{c.name}</span>
                  {c.tag === 'Primary Focus' && (
                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--aqua-700)', fontWeight: 800 }}>
                      • Home Base
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-subtle)' }}>
              {siteConfig.serviceAreas.primaryNote}
            </p>
          </div>

          {/* Right: Interactive Area Checker */}
          <div className="area-checker-box">
            <span className="eyebrow" style={{ marginBottom: '6px' }}>Service Area Checker</span>
            <h3>Not sure if we serve your neighborhood?</h3>
            <p>
              Enter your 5-digit ZIP code below to check immediate dispatch availability in Sandy Springs and surrounding areas.
            </p>

            <form onSubmit={handleCheckZip} className="checker-form">
              <input
                type="text"
                maxLength={5}
                pattern="[0-9]{5}"
                placeholder="e.g. 30328"
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
                className="checker-input"
                aria-label="Enter 5-digit ZIP Code"
                required
              />
              <button type="submit" className="btn btn-navy">
                <Search size={16} />
                <span>Check Area</span>
              </button>
            </form>

            {checkResult && (
              <div className={`checker-result ${checkResult.type}`}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  {checkResult.type === 'success' ? (
                    <CheckCircle size={18} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
                  ) : (
                    <HelpCircle size={18} style={{ color: 'var(--aqua-600)', flexShrink: 0, marginTop: '2px' }} />
                  )}
                  <span>{checkResult.message}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
