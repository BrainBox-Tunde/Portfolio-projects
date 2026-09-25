import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function StickyMobileCTA({ onOpenSchedule }) {
  return (
    <div className="mobile-bottom-bar" aria-label="Quick Actions">
      <div className="mobile-bottom-bar-inner">
        <a
          href={`tel:${siteConfig.phone.tel}`}
          className="btn btn-navy btn-sm"
          style={{ padding: '12px 14px', fontSize: '0.9rem', width: '100%' }}
        >
          <Phone size={16} />
          <span>Call Now</span>
        </a>

        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{ padding: '12px 14px', fontSize: '0.9rem', width: '100%' }}
          onClick={onOpenSchedule}
        >
          <Calendar size={16} />
          <span>Schedule</span>
        </button>
      </div>
    </div>
  );
}
