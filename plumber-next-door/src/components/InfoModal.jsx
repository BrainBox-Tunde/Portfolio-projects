import React from 'react';
import { X, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function InfoModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="info-modal-title">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--aqua-600)' }}>
          <Shield size={20} />
          <span className="eyebrow" style={{ margin: 0 }}>Customer Protection</span>
        </div>

        <h3 id="info-modal-title" style={{ fontSize: '1.4rem', marginBottom: '16px' }}>
          {title}
        </h3>

        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.65', maxHeight: '60vh', overflowY: 'auto' }}>
          {content}
        </div>

        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <button type="button" className="btn btn-navy btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
