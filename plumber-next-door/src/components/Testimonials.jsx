import React from 'react';
import { Quote, MessageSquareQuote } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Testimonials() {
  return (
    <section id="reviews" className="section" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Neighbor Feedback</span>
          <h2 id="reviews-heading">What Our Neighbors Are Saying</h2>
          <p>
            We take pride in building long-term relationships across Sandy Springs, one honest repair at a time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {siteConfig.testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <Quote size={28} className="testimonial-quote-icon" />
              <p className="testimonial-text">“{t.quote}”</p>
              
              <div className="testimonial-author-meta">
                <div>
                  <span className="author-name">{t.author}</span>
                  <div className="author-area">{t.neighborhood}</div>
                </div>
                <span className="badge-tag" style={{ fontSize: '0.725rem' }}>
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Development Placeholder Notice */}
        <div className="dev-placeholder-banner">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <MessageSquareQuote size={14} style={{ color: 'var(--aqua-600)' }} />
            {siteConfig.testimonialsNotice}
          </span>
        </div>
      </div>
    </section>
  );
}
