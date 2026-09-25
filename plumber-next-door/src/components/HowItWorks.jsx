import React from 'react';
import { PhoneCall, CalendarCheck, Wrench } from 'lucide-react';

export default function HowItWorks({ onOpenSchedule }) {
  const steps = [
    {
      num: "01",
      title: "Tell Us What's Wrong",
      description: "Give us a call or submit your service request online with notes and optional photos of the leak, clog, or fixture.",
      icon: PhoneCall
    },
    {
      num: "02",
      title: "We'll Arrange Your Service",
      description: "We review the details, answer your questions, and lock in an arrival window that fits your schedule.",
      icon: CalendarCheck
    },
    {
      num: "03",
      title: "Get Professional Help",
      description: "A licensed, background-checked Sandy Springs technician inspects the issue on-site and gets it resolved cleanly.",
      icon: Wrench
    }
  ];

  return (
    <section className="section" aria-labelledby="how-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Straightforward Process</span>
          <h2 id="how-heading">Getting Plumbing Help is Simple</h2>
          <p>
            No complex phone trees or confusing runarounds. Three clear steps to restore your plumbing.
          </p>
        </div>

        <div className="how-steps-row">
          <div className="how-connector-line" aria-hidden="true" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="how-step-card">
                <div className="step-num-badge">
                  <span>{step.num}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
                  <Icon size={20} style={{ color: 'var(--aqua-500)', opacity: 0.7 }} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '44px' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenSchedule}
          >
            <span>Start With Step 01 — Request Service</span>
          </button>
        </div>
      </div>
    </section>
  );
}
