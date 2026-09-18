import React, { useEffect, useRef } from 'react';

const SERVICES = [
    {
        title: 'Air Conditioning',
        desc: 'Whisper-quiet, architecturally flush cooling systems engineered for supreme summer comfort and visual elegance.',
        icon: '🌬️',
        iconBg: 'rgba(56,189,248,0.12)',
        image: '/images/heat-pump.jpg',
    },
    {
        title: 'Heat Pump Installation',
        desc: 'All-electric, next-gen heat pumps offering both powerful heating and efficient cooling in one sleek, modern unit.',
        icon: '⚡',
        iconBg: 'rgba(52,211,153,0.12)',
        image: '/images/air-conditioning.jpg',
    },
    {
        title: 'Solar PV & Renewables',
        desc: 'Architecturally flush, premium solar panels that power your home\'s climate systems and dramatically cut your energy bills.',
        icon: '☀️',
        iconBg: 'rgba(251,191,36,0.15)',
        image: '/images/solar-pv.jpg',
    },
    {
        title: 'Heating Engineering',
        desc: 'Precision radiant floors and smart furnace solutions. Expertly engineered for ultimate winter warmth and efficiency.',
        icon: '🔥',
        iconBg: 'rgba(249,115,22,0.1)',
        image: '/images/heating-engineering.jpg',
    },
];

const Services = () => {
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.15 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section services-bg" id="services">
            <div className="container">
                <div className="section-header reveal" ref={(el) => refs.current.push(el)}>
                    <p className="section-label">What We Do</p>
                    <h2 className="section-title">Mastery of the Elements</h2>
                    <p className="section-sub">Every system we install is engineered for performance, designed for beauty, and built to last a lifetime.</p>
                </div>

                <div className="services-grid">
                    {SERVICES.map((s, i) => (
                        <div
                            key={i}
                            className={`service-card reveal reveal-delay-${i + 1}`}
                            ref={(el) => refs.current.push(el)}
                        >
                            <div className="card-img">
                                <img src={s.image} alt={s.title} loading="lazy" />
                                <div className="card-img-overlay" />
                                <div className="card-icon" style={{ background: s.iconBg }}>{s.icon}</div>
                            </div>
                            <div className="card-body">
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <a href="#contact" className="card-link">Get a quote →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
