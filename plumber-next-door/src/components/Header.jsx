import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Droplets, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function Header({ onOpenSchedule, onNavigateToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Problem Selector', href: '#problem-selector' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Residential & Commercial', href: '#residential-commercial' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top Local Micro Bar */}
        <div className="header-top-bar">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={13} style={{ color: 'var(--aqua-400)' }} />
                Sandy Springs, GA & North Atlanta
              </span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={13} style={{ color: 'var(--aqua-400)' }} />
                Licensed & Insured Local Plumbers
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span className="hide-on-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={13} style={{ color: 'var(--aqua-400)' }} />
                Mon–Sat: 7am–7pm
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="btn btn-call btn-sm"
                  aria-label={`Call ${siteConfig.phone.display}`}
                  style={{ padding: '4px 12px', fontSize: '0.8rem', backgroundColor: 'transparent', border: '1px solid var(--aqua-400)', color: 'var(--aqua-100)' }}
                >
                  <Phone size={12} />
                  <span className="hide-on-mobile">{siteConfig.phone.display}</span>
                </a>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={onOpenSchedule}
                  style={{ padding: '4px 12px', fontSize: '0.8rem' }}
                >
                  <Calendar size={12} />
                  <span>Schedule</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container">
          <div className="header-inner">
            {/* Wordmark Logo */}
            <a href="#" className="brand-wordmark" aria-label="Plumber Next Door Home">
              <div className="brand-icon-wrapper">
                <Droplets size={22} />
              </div>
              <div className="brand-text">
                <span className="brand-title">{siteConfig.businessName}</span>
                <span className="brand-location">{siteConfig.subTitle}</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main Navigation">
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="nav-link"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTAs Moved to Top Bar */}
            <div className="header-actions">
              {/* Mobile Menu Trigger */}
              <button
                type="button"
                className="nav-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 16, 27, 0.98)',
            zIndex: 98,
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backdropFilter: 'blur(10px)',
            animation: 'fadeIn 200ms ease-out'
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  style={{
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    display: 'block',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            <a
              href={`tel:${siteConfig.phone.tel}`}
              className="btn btn-call"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <Phone size={18} />
              <span>Call {siteConfig.phone.display}</span>
            </a>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
            >
              <Calendar size={18} />
              <span>Schedule Plumbing Service</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
