import React from 'react';
import { ShieldCheck, Award, MapPin, UserCheck, Building2 } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function WhyChooseUs() {
  const verifiedPillars = [
    {
      icon: ShieldCheck,
      title: "Licensed Professionals",
      desc: "Every repair, fixture replacement, and line diagnostic is performed to strict Georgia building codes."
    },
    {
      icon: Award,
      title: "Fully Insured",
      desc: "Full comprehensive liability coverage means you are thoroughly protected while work takes place inside your home."
    },
    {
      icon: MapPin,
      title: "Locally Owned",
      desc: "We live, work, and serve in Sandy Springs and North Atlanta. Our reputation with our neighbors is our most prized asset."
    },
    {
      icon: UserCheck,
      title: "Background-Checked",
      desc: "Our technicians undergo background vetting and continuous training so you feel 100% safe welcoming us through your front door."
    },
    {
      icon: Building2,
      title: "Residential + Commercial",
      desc: "Single-family homes, townhouses, restaurants, and retail spaces receive dedicated, purpose-built plumbing solutions."
    }
  ];

  return (
    <section id="why-us" className="section section-alt" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Verified Standards</span>
          <h2 id="why-heading">Why Sandy Springs Neighbors Trust Us</h2>
          <p>
            Plumbing peace of mind comes from simple, reliable standards—not inflated sales pitches. Here is what you can count on with every call.
          </p>
        </div>

        <div className="why-grid">
          {verifiedPillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="why-card">
                <div className="why-icon">
                  <Icon size={22} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
