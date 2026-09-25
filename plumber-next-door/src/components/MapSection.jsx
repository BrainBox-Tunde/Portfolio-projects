import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function MapSection() {
  const localHubs = [
    'City Springs / Sandy Springs Performing Arts Center',
    'Roswell Road Commercial & Dining Corridor',
    'Riverside & Chattahoochee River Estates',
    'High Point & North End Residential Enclaves',
    'Perimeter Center North / Medical District'
  ];

  return (
    <section className="section section-alt" aria-labelledby="map-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Local Presence</span>
          <h2 id="map-heading">Rooted in Sandy Springs, Georgia</h2>
          <p>
            Serving Sandy Springs, GA and surrounding North Atlanta communities with prompt dispatch and local familiarity.
          </p>
        </div>

        <div className="map-card-wrapper">
          {/* Map Visual Pane */}
          <div className="map-visual-pane">
            <svg
              className="map-svg-grid"
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Map illustration of Sandy Springs service perimeter"
            >
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                </pattern>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="600" height="400" fill="url(#grid)" />

              {/* River curvature (representing Chattahoochee) */}
              <path
                d="M 50 20 Q 180 120 220 240 T 420 380"
                stroke="rgba(56, 189, 248, 0.35)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />

              {/* Service Radius Rings */}
              <circle cx="300" cy="200" r="140" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="300" cy="200" r="85" fill="none" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
              <circle cx="300" cy="200" r="50" fill="url(#hubGlow)" />

              {/* Central Hub Marker (Sandy Springs) */}
              <circle cx="300" cy="200" r="9" fill="#f97316" stroke="#ffffff" strokeWidth="2.5" />
              <text x="315" y="205" fill="#ffffff" fontFamily="Manrope" fontWeight="700" fontSize="13">
                Sandy Springs Hub
              </text>
              <text x="315" y="222" fill="#94a3b8" fontFamily="Plus Jakarta Sans" fontSize="10">
                Primary Dispatch Zone
              </text>

              {/* Surrounding community satellite pins */}
              <circle cx="430" cy="140" r="5" fill="#38bdf8" />
              <text x="442" y="144" fill="#cbd5e1" fontFamily="Plus Jakarta Sans" fontSize="10">Dunwoody</text>

              <circle cx="210" cy="90" r="5" fill="#38bdf8" />
              <text x="160" y="85" fill="#cbd5e1" fontFamily="Plus Jakarta Sans" fontSize="10">Roswell</text>

              <circle cx="370" cy="290" r="5" fill="#38bdf8" />
              <text x="385" y="294" fill="#cbd5e1" fontFamily="Plus Jakarta Sans" fontSize="10">Brookhaven</text>

              <circle cx="260" cy="320" r="5" fill="#38bdf8" />
              <text x="205" y="324" fill="#cbd5e1" fontFamily="Plus Jakarta Sans" fontSize="10">Buckhead</text>
            </svg>
          </div>

          {/* Map Info Pane */}
          <div className="map-info-pane">
            <span className="eyebrow" style={{ marginBottom: '6px' }}>Neighborhood Coverage</span>
            <h3>Active in Sandy Springs Everyday</h3>
            <p>
              Our plumbing service vans are routinely on the road across Fulton County, ensuring swift travel times and rapid response when urgent plumbing issues strike.
            </p>

            <ul className="map-landmark-list">
              {localHubs.map((hub, idx) => (
                <li key={idx} className="map-landmark-item">
                  <CheckCircle2 size={16} />
                  <span>{hub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
