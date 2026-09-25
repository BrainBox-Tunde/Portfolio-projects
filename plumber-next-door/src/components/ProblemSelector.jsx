import React, { useState } from 'react';
import { 
  Droplets, 
  AlertTriangle, 
  Wrench, 
  Flame, 
  ShieldAlert, 
  Gauge, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  Building2, 
  HelpCircle,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { siteConfig } from '../config/siteData';

const problemIconMap = {
  Droplets,
  AlertTriangle,
  Wrench,
  Flame,
  ShieldAlert,
  Gauge,
  Sparkles,
  Activity,
  CheckCircle2,
  Building2,
  HelpCircle
};

export default function ProblemSelector({ onSelectProblem }) {
  const [selectedScenarioId, setSelectedScenarioId] = useState(siteConfig.problemScenarios[0].id);

  const activeScenario = siteConfig.problemScenarios.find((s) => s.id === selectedScenarioId) || siteConfig.problemScenarios[0];

  const handleSelect = (id) => {
    setSelectedScenarioId(id);
  };

  const handleCtaClick = () => {
    if (onSelectProblem) {
      onSelectProblem(activeScenario);
    }
    const formElem = document.querySelector('#service-request-form');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="problem-selector" className="section problem-selector-section" aria-labelledby="problem-selector-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="eyebrow">Interactive Troubleshooting</span>
          <h2 id="problem-selector-title">What’s going on with your plumbing?</h2>
          <p>
            Tell us what you're dealing with and we'll point you toward the right solution. Select your situation below for straightforward guidance.
          </p>
        </div>

        {/* Interactive Problem Buttons Grid */}
        <div className="problem-grid" role="tablist" aria-label="Plumbing problem scenarios">
          {siteConfig.problemScenarios.map((scenario) => {
            const Icon = problemIconMap[scenario.icon] || Droplets;
            const isSelected = scenario.id === selectedScenarioId;

            return (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`problem-card ${isSelected ? 'active' : ''}`}
                onClick={() => handleSelect(scenario.id)}
              >
                <div className="problem-card-icon">
                  <Icon size={20} />
                </div>
                <div className="problem-card-content">
                  <h3>{scenario.title}</h3>
                  <p>{scenario.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Contextual Diagnosis Response Callout */}
        <div className="problem-diagnosis-box" role="region" aria-live="polite">
          <div className="diagnosis-header">
            <div>
              <span style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--aqua-400)', display: 'block', marginBottom: '4px' }}>
                Recommended Care Path
              </span>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem' }}>{activeScenario.title}</h3>
            </div>
            <div className="diagnosis-service-badge">
              <span>{activeScenario.serviceCategory}</span>
            </div>
          </div>

          <div className="diagnosis-body">
            <div className="diagnosis-text">
              <p>{activeScenario.diagnosis}</p>
              <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
                * Preliminary guidance only. A licensed Sandy Springs plumber inspects on-site to verify pipe safety and accurate resolution.
              </div>
            </div>

            <div className="diagnosis-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCtaClick}
              >
                <span>{activeScenario.recommendedCta}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="btn btn-outline-white"
              >
                <PhoneCall size={16} />
                <span>Call {siteConfig.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
