# Plumber Next Door of Sandy Springs

A custom-designed, high-conversion single-page web platform built for **Plumber Next Door of Sandy Springs**.

Designed to blend **Friendly Local Neighbor + Modern Professional Service + Premium Web Design**, avoiding the generic look of contractor templates or industrial franchises.

---

## 🌟 Key Highlights & Architecture

- **Custom Typography-based Identity**: Clean wordmark (`PLUMBER NEXT DOOR / SANDY SPRINGS`) with subtle flow/water motif.
- **Conversion-Focused Architecture**: Dual paths for urgent calling (`Call Now` with phone links) and planned service (`Schedule Service` online dispatch).
- **Interactive Problem Selector**: 13 structured plumbing scenarios with dynamic preliminary diagnosis guidance and 1-click pre-fill into the service request form.
- **Comprehensive Service Catalog**: 8 primary service cards + an expandable accordion covering 50+ specialized residential and commercial plumbing services.
- **Verified Credibility System**: Focuses strictly on verified characteristics: *Licensed Plumber, Fully Insured, Locally Owned, Background-Checked Technicians, and Residential & Commercial capability*.
- **Authentic Documentary Photography**: High-resolution, realistic imagery capturing authentic plumbing craftsmanship, neat copper pipe manifolds, tankless water heater installations, luxury faucets, and sewer camera inspection equipment.
- **Residential vs. Commercial Split**: Distinct presentation of home plumbing vs. commercial facility/office/restaurant needs with tailored CTAs.
- **Interactive Service Area Checker**: Immediate local ZIP code lookup for Sandy Springs and surrounding North Atlanta communities.
- **Smart Service Request Form**: Multi-field request workflow with contact details, property type pills, urgency levels, date/time pickers, problem description, interactive photo upload dropzone with preview/remove, and a clean confirmation state.
- **Persistent Mobile Bottom Bar**: Seamless conversion access for mobile visitors needing immediate emergency phone or scheduling access.
- **Local SEO & Schema Markup**: Pre-configured JSON-LD structured data (`PlumbingService` + `FAQPage`), semantic HTML5, and Open Graph meta tags.
- **Centralized Data Configuration**: All business details, contact information, hours, service lists, and FAQs are managed in [`src/config/siteData.js`](./src/config/siteData.js) for effortless client handover.

---

## 🎨 Design Tokens & Palette

| Token | Value | Purpose |
| :--- | :--- | :--- |
| **Deep Navy** | `#07101b` / `#0c1a2d` | Primary brand authority & visual break sections |
| **Clean Aqua** | `#0284c7` / `#38bdf8` | Secondary clean water accent & active badges |
| **Warm CTA Accent** | `#f97316` / `#ea580c` | High-visibility conversion buttons |
| **Warm Whites & Neutrals** | `#f8fafc` / `#ffffff` / `#f1f5f9` | Spacious, clean residential backgrounds |
| **Slate Neutrals** | `#334155` / `#64748b` | Highly readable body and caption typography |
| **Fonts** | `Manrope` (Headings) + `Plus Jakarta Sans` (Body) | Contemporary, friendly, premium geometry |

---

## 📁 Project Structure

```text
plumber-next-door/
├── public/
│   └── images/                     # 9 high-res documentary photography assets
│       ├── hero.jpg                # Plumber consulting with Sandy Springs homeowner
│       ├── about.jpg               # Plumber in clean workshop with inspection gear
│       ├── feature.jpg             # Cinematic master bathroom fixture craftsmanship
│       ├── residential.jpg         # Under-sink filtration and shutoff valve inspection
│       ├── commercial.jpg          # Commercial mechanical room and boiler manifolds
│       ├── project-tankless.jpg    # Tankless water heater installation
│       ├── project-faucet.jpg      # Designer faucet and undermount sink upgrade
│       ├── project-pipes.jpg       # Clean copper pipe manifold and ball valves
│       └── project-drain.jpg       # Digital sewer camera reel inspection
├── src/
│   ├── config/
│   │   └── siteData.js             # Centralized business, services, FAQs, and phone config
│   ├── components/
│   │   ├── Header.jsx              # Sticky navbar with wordmark & dynamic scroll blur
│   │   ├── StickyMobileCTA.jsx     # Mobile persistent bottom conversion bar
│   │   ├── Hero.jsx                # Split-layout hero with dual CTAs & trust signals
│   │   ├── TrustBar.jsx            # 5 verified trust indicators with custom line icons
│   │   ├── ProblemSelector.jsx     # Signature interactive troubleshooting selector
│   │   ├── ServicesSection.jsx     # 8 category cards + expandable 50+ item catalog
│   │   ├── AboutSection.jsx        # Neighborly local trust storytelling
│   │   ├── WhyChooseUs.jsx         # Verified characteristics breakdown
│   │   ├── HowItWorks.jsx          # 3-step process with connected flow line motif
│   │   ├── FeatureStory.jsx        # Cinematic visual break section
│   │   ├── ResidentialCommercialSplit.jsx # Dual residential & commercial cards
│   │   ├── ProjectGallery.jsx      # Filterable craftsmanship showcase
│   │   ├── Testimonials.jsx        # Neighbor feedback with development prototype attribution
│   │   ├── ServiceAreas.jsx        # Sandy Springs focus & interactive ZIP checker
│   │   ├── FAQSection.jsx          # 8 accessible accordion questions & answers
│   │   ├── ServiceRequestForm.jsx  # Smart booking form with photo upload & validation
│   │   ├── CTASection.jsx          # Dark navy high-impact conversion break
│   │   ├── MapSection.jsx          # Sandy Springs map visual & corridor coverage
│   │   ├── Footer.jsx              # Wordmark, links, contact details, & disclaimers
│   │   ├── ScheduleModal.jsx       # Direct conversion modal
│   │   └── InfoModal.jsx           # Accessible dialog for Privacy & Terms
│   ├── App.jsx                     # Master application assembly
│   ├── index.css                   # Bespoke Vanilla CSS design system & tokens
│   └── main.jsx
├── index.html                      # SEO metadata, Google Fonts, JSON-LD Schema
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the live local server
```bash
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser.

### 3. Production build
```bash
npm run build
```
The optimized static build will be generated in `dist/`.
