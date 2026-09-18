import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="logo-mark">A</div>
                            <span className="footer-logo-text">Acarmor</span>
                        </div>
                        <p>
                            Pioneering premium, ultra-aesthetic, and highly intelligent climate engineering for discerning homes across the USA.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Heat Pump Installation</a></li>
                            <li><a href="#services">Air Conditioning</a></li>
                            <li><a href="#services">Solar PV &amp; Renewables</a></li>
                            <li><a href="#services">Heating Engineering</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#process">How It Works</a></li>
                            <li><a href="#testimonials">Case Studies</a></li>
                            <li><a href="#contact">Careers</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="tel:+18005550199">(800) 555-0199</a></li>
                            <li><a href="mailto:hello@acarmor.com">hello@acarmor.com</a></li>
                            <li><a href="#contact">Get an Estimate</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {year} Acarmor HVAC &amp; Renewables. All rights reserved. | Company Registered (RC) 40408747212</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Licensing</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
