import React from 'react';
import { X, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function ScheduleModal({ isOpen, onClose, onScrollToForm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <span className="eyebrow" style={{ marginBottom: '6px' }}>Direct Scheduling</span>
        <h3 id="modal-title" style={{ fontSize: '1.45rem', marginBottom: '8px' }}>
          Schedule Service in Sandy Springs
        </h3>
        <p style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
          How would you prefer to get your plumbing service arranged?
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Option 1: Urgent Call */}
          <div style={{ padding: '20px', borderRadius: '12px', border: '1.5px solid var(--border-light)', backgroundColor: 'var(--bg-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--aqua-50)', color: 'var(--aqua-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={18} />
              </div>
              <h4 style={{ fontSize: '1.05rem', margin: 0 }}>Call Dispatch Directly</h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Best for active water leaks, sewer backups, or urgent same-day needs. Speak directly with our dispatch team.
            </p>
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="btn btn-navy"
              style={{ width: '100%' }}
            >
              <Phone size={16} />
              <span>Call {siteConfig.phone.display}</span>
            </a>
          </div>

          {/* Option 2: Online Request Form */}
          <div style={{ padding: '20px', borderRadius: '12px', border: '1.5px solid var(--border-light)', backgroundColor: 'var(--bg-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--cta-warm-subtle)', color: 'var(--cta-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Calendar size={18} />
              </div>
              <h4 style={{ fontSize: '1.05rem', margin: 0 }}>Submit Online Details</h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Enter property address, select service type, choose your preferred date, and optionally attach photos of the problem.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                onClose();
                onScrollToForm();
              }}
            >
              <span>Go to Request Form</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
