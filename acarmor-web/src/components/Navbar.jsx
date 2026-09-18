import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <div className="nav-inner">
                    <a href="#home" className="logo">
                        <div className="logo-mark">A</div>
                        <span className="logo-text">Acar<span>mor</span></span>
                    </a>

                    <ul className="nav-links">
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#process">How It Works</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <div className="nav-actions">
                        <a href="tel:+18005550199" className="nav-tel">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                            (800) 555-0199
                        </a>
                        <a href="#contact" className="btn-cta">
                            Get a Free Estimate
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </div>

                    <button className="hamburger" aria-label="Menu">
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
