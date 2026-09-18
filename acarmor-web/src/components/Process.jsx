import React, { useEffect, useRef } from 'react';

const STEPS = [
    { num: '01', icon: '📞', title: 'Free Consultation', desc: 'Call or fill in our form. A senior engineer will contact you within 24 hours to understand your needs.' },
    { num: '02', icon: '📐', title: 'Site Survey & Design', desc: 'Our engineer visits your home, takes precise measurements, and designs the optimal system for your space.' },
    { num: '03', icon: '⚙️', title: 'Expert Installation', desc: 'Our certified team installs your system with surgical precision, minimizing disruption to your home.' },
    { num: '04', icon: '✅', title: 'Handover & Support', desc: 'We walk you through your new system and provide lifetime workmanship support for total peace of mind.' },
];

const Process = () => {
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="process-section" id="process">
            <div className="container">
                <div className="section-header reveal" ref={(el) => refs.current.push(el)}>
                    <p className="section-label">Our Process</p>
                    <h2 className="section-title">Simple. Seamless. Done Right.</h2>
                    <p className="section-sub">From first call to final handover, we make the entire experience completely stress-free.</p>
                </div>
                <div className="process-steps">
                    {STEPS.map((s, i) => (
                        <div
                            key={i}
                            className={`process-step reveal reveal-delay-${i + 1}`}
                            ref={(el) => refs.current.push(el)}
                        >
                            <div className="step-num">{s.num}</div>
                            <div className="step-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
