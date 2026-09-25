import React, { useState } from 'react';
import { MapPin, Info, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function ProjectGallery({ onSelectServiceCategory }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Water Heaters', 'Fixtures', 'Pipes & Water Lines', 'Drains & Sewers'];

  const filteredProjects = activeFilter === 'All'
    ? siteConfig.projectGallery
    : siteConfig.projectGallery.filter((p) => p.category === activeFilter);

  return (
    <section className="section section-alt" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Workmanship Showcase</span>
          <h2 id="gallery-heading">Craftsmanship in Action</h2>
          <p>
            Take a look at the level of precision, clean piping runs, and fixture alignments we bring to Sandy Springs homes and properties.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`pill-choice-btn ${activeFilter === cat ? 'selected' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="gallery-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="gallery-card">
              <div className="gallery-card-img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="gallery-card-body">
                <span className="gallery-location-tag">
                  <MapPin size={12} />
                  {project.location}
                </span>

                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div style={{ marginTop: 'auto', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectServiceCategory) {
                        onSelectServiceCategory(project.category);
                      }
                      const el = document.querySelector('#service-request-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--aqua-600)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>Request Similar Project</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="demo-notice-chip">
                  <Info size={12} />
                  <span>Demonstration Project Prototype</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-subtle)', fontStyle: 'italic' }}>
            * Demonstration photography showcasing our standards of craftsmanship. Replaceable with client portfolio imagery upon delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
