import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Upload, 
  X, 
  CheckCircle, 
  AlertCircle, 
  Phone, 
  ShieldCheck, 
  MapPin, 
  Send 
} from 'lucide-react';
import { siteConfig } from '../config/siteData';

export default function ServiceRequestForm({ prefilledCategory, prefilledUrgency }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    zipCode: '',
    propertyType: 'Home',
    serviceCategory: 'Drain Cleaning & Clogs',
    urgency: 'Today',
    preferredDate: '',
    preferredTime: 'Morning',
    description: '',
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync pre-fills from problem selector or service cards
  useEffect(() => {
    if (prefilledCategory) {
      setFormData((prev) => ({ ...prev, serviceCategory: prefilledCategory }));
    }
  }, [prefilledCategory]);

  useEffect(() => {
    if (prefilledUrgency) {
      setFormData((prev) => ({ ...prev, urgency: prefilledUrgency }));
    }
  }, [prefilledUrgency]);

  const propertyTypes = ['Home', 'Apartment/Condo', 'Rental Property', 'Commercial', 'Other'];
  const urgencyOptions = ['As soon as possible', 'Today', 'This week', "I'm flexible", 'Planning ahead'];
  const timePreferences = ['Morning (8am–12pm)', 'Afternoon (12pm–4pm)', 'Evening (4pm–7pm)', 'Flexible'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setUploadError('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Validation: 10MB limit and image check
    if (!file.type.startsWith('image/')) {
      setUploadError('Please upload an image file (JPG, PNG, or WEBP).');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('Image size exceeds 10MB. Please select a smaller photo.');
      return;
    }

    setAttachedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    setFilePreview(null);
    setUploadError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  return (
    <section id="service-request-form" className="section" aria-labelledby="form-heading">
      <div className="container">
        <div className="form-section-container">
          {/* Left Contextual Info */}
          <div className="form-info-pane">
            <span className="eyebrow">Online Dispatch</span>
            <h2 id="form-heading">Request Plumbing Service in Sandy Springs</h2>
            <p>
              Fill out your details below and our team will follow up promptly to arrange your service visit. You can also upload a photo of the leak or fixture to help us arrive prepared.
            </p>

            <ul className="form-perks-list">
              <li className="form-perk-item">
                <div className="form-perk-icon">
                  <ShieldCheck size={18} />
                </div>
                <div className="form-perk-text">
                  <h4>No Pressure, Clear Pricing</h4>
                  <p>A licensed plumber reviews the issue and outlines solutions before beginning.</p>
                </div>
              </li>

              <li className="form-perk-item">
                <div className="form-perk-icon">
                  <Clock size={18} />
                </div>
                <div className="form-perk-text">
                  <h4>Convenient Arrival Windows</h4>
                  <p>We respect your busy schedule with focused morning or afternoon time slots.</p>
                </div>
              </li>

              <li className="form-perk-item">
                <div className="form-perk-icon">
                  <MapPin size={18} />
                </div>
                <div className="form-perk-text">
                  <h4>Sandy Springs Local Response</h4>
                  <p>Direct dispatch across Sandy Springs, Dunwoody, and surrounding North Atlanta.</p>
                </div>
              </li>
            </ul>

            {/* Direct Urgent Call Alternative */}
            <div className="form-call-alternative">
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--aqua-50)', color: 'var(--aqua-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy-900)' }}>
                  Have an urgent water emergency?
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', marginBottom: '4px' }}>
                  Skip the form and speak directly with our team:
                </div>
                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  style={{ color: 'var(--aqua-600)', fontWeight: 800, fontSize: '1rem' }}
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="form-card">
            {isSubmitted ? (
              <div className="form-success-banner" role="alert">
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <CheckCircle size={32} />
                </div>
                <h3>Service Request Received</h3>
                <p>
                  Thanks, {formData.fullName || 'Neighbor'}. We've received your request for <strong>{formData.serviceCategory}</strong> and will use these details to follow up regarding your plumbing service.
                </p>
                <div style={{ marginTop: '20px', padding: '14px', backgroundColor: '#ffffff', borderRadius: '8px', fontSize: '0.85rem', color: '#065f46', textAlign: 'left' }}>
                  <div><strong>Property:</strong> {formData.address || 'Sandy Springs, GA'} {formData.zipCode ? `(${formData.zipCode})` : ''}</div>
                  <div><strong>Urgency:</strong> {formData.urgency}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                </div>

                <div style={{ marginTop: '24px' }}>
                  <button
                    type="button"
                    className="btn btn-navy"
                    onClick={() => {
                      setIsSubmitted(false);
                      setAttachedFile(null);
                      setFilePreview(null);
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Contact Information */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="(404) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                {/* Property Details */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="address" className="form-label">
                      Street Address <span className="req">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      required
                      placeholder="123 Roswell Rd"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="zipCode" className="form-label">
                      ZIP Code <span className="req">*</span>
                    </label>
                    <input
                      id="zipCode"
                      type="text"
                      name="zipCode"
                      maxLength={5}
                      required
                      placeholder="30328"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Property Type Pills */}
                <div className="form-group">
                  <label className="form-label">Property Type</label>
                  <div className="pill-selector-row">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`pill-choice-btn ${formData.propertyType === type ? 'selected' : ''}`}
                        onClick={() => setFormData((prev) => ({ ...prev, propertyType: type }))}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Category & Urgency */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="serviceCategory" className="form-label">
                      Service Category
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="Drain Cleaning & Clogs">Drain Cleaning & Clogs</option>
                      <option value="Leak Detection & Pipe Repair">Leak Detection & Pipe Repair</option>
                      <option value="Water Heater Services">Water Heater Services</option>
                      <option value="Toilet Repair & Installation">Toilet Repair & Installation</option>
                      <option value="Fixtures & Faucets">Fixtures & Faucets</option>
                      <option value="Water Lines & Pressure">Water Lines & Pressure</option>
                      <option value="Sewer Line & Hydro Jetting">Sewer Line & Hydro Jetting</option>
                      <option value="Commercial Plumbing">Commercial Plumbing</option>
                      <option value="Plumbing Inspection & Troubleshooting">Plumbing Inspection & Troubleshooting</option>
                      <option value="Other Plumbing Need">Other Plumbing Need</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferredDate" className="form-label">
                      Preferred Service Date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Urgency Level */}
                <div className="form-group">
                  <label className="form-label">How urgent is this?</label>
                  <div className="pill-selector-row">
                    {urgencyOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className={`pill-choice-btn ${formData.urgency === opt ? 'selected' : ''}`}
                        onClick={() => setFormData((prev) => ({ ...prev, urgency: opt }))}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time of Day */}
                <div className="form-group">
                  <label className="form-label">Preferred Time Window</label>
                  <div className="pill-selector-row">
                    {timePreferences.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`pill-choice-btn ${formData.preferredTime === time ? 'selected' : ''}`}
                        onClick={() => setFormData((prev) => ({ ...prev, preferredTime: time }))}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="form-group">
                  <label htmlFor="description" className="form-label">
                    What seems to be going on?
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Briefly describe what you're noticing (e.g. water leaking under the bathroom vanity, water heater making humming noise, etc.)..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-textarea"
                  />
                </div>

                {/* Photo Upload Dropzone */}
                <div className="form-group">
                  <label className="form-label">
                    Attach Photo of Plumbing Issue (Optional)
                  </label>

                  {filePreview ? (
                    <div className="uploaded-preview-row">
                      <img
                        src={filePreview}
                        alt="Issue preview"
                        className="upload-thumbnail"
                      />
                      <div className="upload-file-info">
                        <div className="upload-file-name">{attachedFile?.name}</div>
                        <div className="upload-file-size">
                          {attachedFile ? (attachedFile.size / 1024 / 1024).toFixed(2) + ' MB' : ''}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn-remove-file"
                        onClick={handleRemoveFile}
                        aria-label="Remove uploaded image"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <label className="photo-upload-zone" htmlFor="photoUploadInput">
                      <input
                        id="photoUploadInput"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                      <div className="upload-prompt">
                        <Upload size={22} />
                        <span>Click to browse photo or drag & drop</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                          Supports JPG, PNG, WEBP up to 10MB
                        </span>
                      </div>
                    </label>
                  )}

                  {uploadError && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#dc2626', fontSize: '0.8rem', marginTop: '6px' }}>
                      <AlertCircle size={14} />
                      <span>{uploadError}</span>
                    </div>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: '12px' }}
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Sending Details...' : 'Request Service'}</span>
                </button>

                <div style={{ marginTop: '12px', fontSize: '0.775rem', color: 'var(--text-subtle)', textAlign: 'center' }}>
                  By submitting, you agree to have Plumber Next Door contact you regarding your plumbing request. We never share customer information.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
