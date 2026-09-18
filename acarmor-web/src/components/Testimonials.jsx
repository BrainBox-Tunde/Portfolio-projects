import React, { useEffect, useRef } from 'react';

const TESTIMONIALS = [
    {
        quote: "Acarmor transformed our home completely. The heat pump they installed is completely silent, looks beautiful, and our energy bills dropped by 45%. I cannot recommend them enough.",
        name: "Sarah Mitchell",
        loc: "Austin, TX",
        initials: "SM",
    },
    {
        quote: "Phenomenal workmanship from start to finish. The solar PV integration is seamless — you'd never know it was there. The team were professional, clean, and incredibly knowledgeable.",
        name: "James & Karen Patel",
        loc: "Denver, CO",
        initials: "JP",
    },
    {
        quote: "I've used many HVAC companies over the years. Acarmor is in a completely different league. The radiant floor heating they installed is the best decision I've ever made for my home.",
        name: "Robert Fontaine",
        loc: "Portland, OR",
        initials: "RF",
    },
];

const Testimonials = () => {
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
        <section className="section testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header reveal" ref={(el) => refs.current.push(el)}>
                    <p className="section-label">Customer Stories</p>
                    <h2 className="section-title">Trusted By Homeowners Across the USA</h2>
                </div>
                <div className="testimonials-grid">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={i}
                            className={`testimonial-card reveal reveal-delay-${i + 1}`}
                            ref={(el) => refs.current.push(el)}
                        >
                            <div className="star-row">{'★★★★★'}</div>
                            <blockquote>"{t.quote}"</blockquote>
                            <div className="reviewer">
                                <div className="reviewer-avatar">{t.initials}</div>
                                <div>
                                    <div className="reviewer-name">{t.name}</div>
                                    <div className="reviewer-loc">📍 {t.loc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
