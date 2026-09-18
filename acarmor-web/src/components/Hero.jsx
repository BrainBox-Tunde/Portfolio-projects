import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Modern luxury home exterior"
                />
                <div className="hero-gradient" />
            </div>

            <div className="hero-blob-1" />
            <div className="hero-blob-2" />

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">Premier HVAC &amp; Renewables · USA</div>

                    <h1>
                        Perfect Climate.<br />
                        <span className="gradient-text">Effortless Living.</span>
                    </h1>

                    <p className="hero-sub">
                        From whisper-quiet heat pumps to solar-powered air conditioning, Acarmor engineers the most beautiful, intelligent and energy-efficient climate systems for discerning homes across America.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn-primary">
                            Get a Free Estimate
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        <a href="#services" className="btn-ghost">
                            Explore Services
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">1,400+</span>
                            <span className="stat-label">Homes Served</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">12+</span>
                            <span className="stat-label">Years of Expertise</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">4.9★</span>
                            <span className="stat-label">Average Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
