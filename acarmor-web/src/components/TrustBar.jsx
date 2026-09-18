import React from 'react';

const TrustBar = () => (
    <div className="trust-bar">
        <div className="container">
            <div className="trust-inner">
                <div className="trust-item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    Licensed &amp; Fully Insured
                </div>
                <span className="trust-sep">·</span>
                <div className="trust-item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                    Same-Week Scheduling
                </div>
                <span className="trust-sep">·</span>
                <div className="trust-item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    Lifetime Workmanship Warranty
                </div>
                <span className="trust-sep">·</span>
                <div className="trust-item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    4.9 ★ Rated on Google
                </div>
            </div>
        </div>
    </div>
);

export default TrustBar;
