import React, { useRef, useEffect } from 'react';

const Contact = () => {
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
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-grid">
                    {/* Left: Info */}
                    <div className="contact-info reveal" ref={(el) => refs.current.push(el)}>
                        <p className="section-label">Get Started Today</p>
                        <h2 className="section-title">Your Perfect Climate Awaits</h2>
                        <p className="section-sub">
                            Fill in the form and a senior engineer will call you back within 24 hours — no hard sells, just expert advice and a transparent estimate.
                        </p>

                        <div className="contact-detail-list">
                            <a href="tel:+18005550199" className="contact-detail">
                                <div className="cd-icon">📞</div>
                                <div className="cd-text">
                                    <span>Call Us Free</span>
                                    <strong>(800) 555-0199</strong>
                                </div>
                            </a>
                            <a href="mailto:hello@acarmor.com" className="contact-detail">
                                <div className="cd-icon">✉️</div>
                                <div className="cd-text">
                                    <span>Email Us</span>
                                    <strong>hello@acarmor.com</strong>
                                </div>
                            </a>
                            <div className="contact-detail" style={{ cursor: 'default' }}>
                                <div className="cd-icon">📍</div>
                                <div className="cd-text">
                                    <span>Service Area</span>
                                    <strong>Nationwide USA Coverage</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-form-wrap reveal reveal-delay-2" ref={(el) => refs.current.push(el)}>
                        <h3 className="form-title">Request a Free Estimate</h3>
                        <p className="form-sub">No obligation. Just expert, honest advice.</p>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fname">First Name</label>
                                    <input id="fname" type="text" placeholder="John" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name</label>
                                    <input id="lname" type="text" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" type="tel" placeholder="(555) 123-4567" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Required</label>
                                <select id="service">
                                    <option value="">Select a service...</option>
                                    <option>Air Conditioning</option>
                                    <option>Heat Pump Installation</option>
                                    <option>Solar PV &amp; Renewables</option>
                                    <option>Heating Engineering</option>
                                    <option>Not Sure — Need Advice</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="msg">Tell Us About Your Home</label>
                                <textarea id="msg" placeholder="Property type, current system, any specific requirements..."></textarea>
                            </div>

                            <button type="submit" className="btn-submit">
                                Send My Request
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
