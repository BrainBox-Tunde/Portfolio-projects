import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSelector from './components/ProblemSelector';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import FeatureStory from './components/FeatureStory';
import ResidentialCommercialSplit from './components/ResidentialCommercialSplit';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import FAQSection from './components/FAQSection';
import ServiceRequestForm from './components/ServiceRequestForm';
import CTASection from './components/CTASection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import ScheduleModal from './components/ScheduleModal';
import InfoModal from './components/InfoModal';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  const [prefilledCategory, setPrefilledCategory] = useState('');
  const [prefilledUrgency, setPrefilledUrgency] = useState('');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [infoModalData, setInfoModalData] = useState({ isOpen: false, title: '', content: null });

  const handleOpenScheduleModal = () => {
    setIsScheduleModalOpen(true);
  };

  const handleCloseScheduleModal = () => {
    setIsScheduleModalOpen(false);
  };

  const handleScrollToForm = () => {
    const el = document.querySelector('#service-request-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProblemScenario = (scenario) => {
    setPrefilledCategory(scenario.serviceCategory);
    setPrefilledUrgency(scenario.urgencyDefault);
  };

  const handleSelectServiceCategory = (categoryTitle) => {
    setPrefilledCategory(categoryTitle);
  };

  const handleSelectResidential = () => {
    setPrefilledCategory('Residential Plumbing');
    handleScrollToForm();
  };

  const handleSelectCommercial = () => {
    setPrefilledCategory('Commercial Plumbing');
    handleScrollToForm();
  };

  const handleOpenPrivacy = () => {
    setInfoModalData({
      isOpen: true,
      title: 'Privacy Policy',
      content: (
        <div>
          <p style={{ marginBottom: '12px' }}>
            At Plumber Next Door of Sandy Springs, we respect the privacy of our customers and website visitors.
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Information Collection:</strong> We only collect contact details (such as your name, phone number, email address, property address, and plumbing problem photos) that you voluntarily submit to request service or schedule an appointment.
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Use of Information:</strong> The information provided is solely used by our local dispatch and licensed plumbing team to understand your plumbing request and coordinate service delivery. We do not sell, rent, or distribute personal data to third-party marketers.
          </p>
          <p>
            For questions or data updates, please contact service@plumbernextdoorsandysprings.com.
          </p>
        </div>
      )
    });
  };

  const handleOpenTerms = () => {
    setInfoModalData({
      isOpen: true,
      title: 'Terms of Service',
      content: (
        <div>
          <p style={{ marginBottom: '12px' }}>
            Welcome to Plumber Next Door of Sandy Springs. By using our website or submitting a service request, you agree to the following terms:
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Estimates & Diagnostics:</strong> Online inquiries and problem selector recommendations provide preliminary information only. Definite diagnoses, scope of work, and pricing agreements are confirmed in person by a licensed Georgia plumbing technician prior to beginning work.
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Safety & Emergency Disclaimer:</strong> In the event of catastrophic pipe breaks, natural gas odors, or severe flooding, immediately shut off main supplies and contact emergency authorities or our direct dispatch phone number.
          </p>
          <p>
            Plumbing work is performed by licensed, insured professionals compliant with local municipal and Georgia state building codes.
          </p>
        </div>
      )
    });
  };

  return (
    <div className="site-wrapper">
      {/* 1. Header & Navigation */}
      <Header
        onOpenSchedule={handleOpenScheduleModal}
        onNavigateToSection={handleScrollToForm}
      />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero onOpenSchedule={handleOpenScheduleModal} />

        {/* 3. Trust Strip */}
        <TrustBar />

        {/* 4. Interactive Plumbing Problem Selector (Signature UX) */}
        <ProblemSelector onSelectProblem={handleSelectProblemScenario} />

        {/* 5. Services Section (8 Categories + Expandable 50+ Item Catalog) */}
        <ServicesSection onSelectServiceCategory={handleSelectServiceCategory} />

        {/* 6. About / Local Neighbor Story */}
        <AboutSection onOpenSchedule={handleOpenScheduleModal} />

        {/* 7. Why Choose Us (Verified Characteristics) */}
        <WhyChooseUs />

        {/* 8. How It Works (3 Steps with Connector) */}
        <HowItWorks onOpenSchedule={handleOpenScheduleModal} />

        {/* 9. Visual Feature / Cinematic Story Break */}
        <FeatureStory onOpenSchedule={handleOpenScheduleModal} />

        {/* 10. Residential vs Commercial Split */}
        <ResidentialCommercialSplit
          onSelectResidential={handleSelectResidential}
          onSelectCommercial={handleSelectCommercial}
        />

        {/* 11. Project Showcase / Demonstration Gallery */}
        <ProjectGallery onSelectServiceCategory={handleSelectServiceCategory} />

        {/* 12. Testimonials (Design Placeholders) */}
        <Testimonials />

        {/* 13. Service Areas & Interactive ZIP Checker */}
        <ServiceAreas />

        {/* 14. High-Impact CTA Break */}
        <CTASection onOpenSchedule={handleOpenScheduleModal} />

        {/* 15. FAQ Section (Accessible Accordion) */}
        <FAQSection />

        {/* 16. Smart Service Request Form (Photo Upload & Confirmation) */}
        <ServiceRequestForm
          prefilledCategory={prefilledCategory}
          prefilledUrgency={prefilledUrgency}
        />

        {/* 17. Map & Sandy Springs Local Presence */}
        <MapSection />
      </main>

      {/* 18. Footer */}
      <Footer
        onOpenSchedule={handleOpenScheduleModal}
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
      />

      {/* 19. Persistent Mobile Bottom Conversion Bar */}
      <StickyMobileCTA onOpenSchedule={handleOpenScheduleModal} />

      {/* 20. Conversion & Policy Modals */}
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={handleCloseScheduleModal}
        onScrollToForm={handleScrollToForm}
      />

      <InfoModal
        isOpen={infoModalData.isOpen}
        onClose={() => setInfoModalData((prev) => ({ ...prev, isOpen: false }))}
        title={infoModalData.title}
        content={infoModalData.content}
      />

      <ScrollToTop />
    </div>
  );
}
