import React, { useEffect, useRef } from 'react';

const AboutUs = () => {
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.15 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const points = [
        {
            icon: '🏆',
            bg: 'rgba(251,191,36,0.12)',
            title: 'Architect-Grade Aesthetics',
            desc: 'Our systems are designed to complement your home\'s architecture, not compete with it.',
        },
        {
            icon: '🌱',
            bg: 'rgba(52,211,153,0.12)',
            title: 'Zero-Emission Technology',
            desc: 'All-electric, carbon-free solutions that future-proof your home and reduce your footprint.',
        },
        {
            icon: '🔇',
            bg: 'rgba(56,189,248,0.12)',
            title: 'Ultra-Quiet Operation',
            desc: 'Our systems operate at near-silent levels, so you\'ll barely know they\'re there.',
        },
        {
            icon: '🛡️',
            bg: 'rgba(249,115,22,0.1)',
            title: 'Lifetime Workmanship Warranty',
            desc: 'We stand behind every installation with an industry-leading lifetime warranty.',
        },
    ];

    return (
        <section className="about-section section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-wrap reveal" ref={(el) => refs.current.push(el)}>
                        <img
                            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                            alt="Engineer doing installation"
                            className="about-main-img"
                            loading="lazy"
                        />
                        <div className="about-float-card">
                            <div>
                                <div className="float-num">1,400+</div>
                            </div>
                            <div className="float-desc">Happy<br />Homeowners<br />Served</div>
                        </div>
                    </div>

                    <div className="about-content reveal" ref={(el) => refs.current.push(el)}>
                        <div>
                            <p className="section-label">Why Acarmor</p>
                            <h2 className="section-title">Engineering <span style={{ color: 'var(--sky)' }}>Elegance</span> Since 2012</h2>
                            <p className="section-sub" style={{ marginBottom: 0 }}>
                                We believe your HVAC and solar systems should be invisible when you don't need them and perfect when you do. We bridge engineering precision with architectural beauty.
                            </p>
                        </div>

                        <div className="about-points">
                            {points.map((p, i) => (
                                <div key={i} className="about-point">
                                    <div className="point-icon" style={{ background: p.bg, fontSize: '1.4rem' }}>{p.icon}</div>
                                    <div className="point-text">
                                        <h4>{p.title}</h4>
                                        <p>{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                            Book a Consultation
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
