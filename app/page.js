"use client";

import { useMemo, useState } from "react";

import {
  Search,
  Globe2,
  Accessibility,
  Menu,
  X,
  ArrowRight,
  Smartphone,
  IdCard,
  FileText,
  Users,
  Award,
  Home,
  BriefcaseBusiness,
  Heart,
  ShieldCheck,
  Info,
  CheckCircle2
} from "lucide-react";

const ECITIZEN_URL = "https://accounts.ecitizen.go.ke/en";

const services = [
  {
  title: <>Apply for a<br />Passport</>,
  name: "Passport",
  icon: Smartphone,
  keywords: "passport travel immigration",
  description:
    "A Kenyan passport is an official travel document issued to Kenyan citizens for international travel. This guide provides general information about passport applications, the purpose of a passport, and the online service process. Applicants should review the current requirements and instructions provided through the official eCitizen platform before starting an application. The official service may provide information about application details, supporting documents, fees, appointments, and collection procedures.",
  },
  {      
    title: <>Apply for a<br />Driving License</>,
    name: "Driving Licence",
    icon: IdCard,
    keywords: "driving license ntsa",
    description:
  "A Kenyan driving licence is an official document authorizing a person to drive a motor vehicle of a specified class on public roads. Driving-licence services available through the government platform include licensing, provisional driving licences, driving-test booking, renewal, class endorsement and replacement of duplicate licences. Applicants should check the current requirements, applicable fees and instructions provided by the National Transport and Safety Authority through the official eCitizen platform before starting an application.",
  },
  {
    title: <>KRA<br />Services</>,
    name: "KRA Services",
    icon: FileText,
    keywords: "kra tax revenue pin",
    description:
  "Kenya Revenue Authority (KRA) provides online tax services for individuals and businesses. These services include KRA PIN registration, filing tax returns, checking PIN details, applying for or checking a Tax Compliance Certificate, and accessing other tax-related services. The iTax system provides online self-service options, while KRA also publishes guides to help taxpayers complete different processes. Applicants and taxpayers should check the latest requirements, applicable obligations and instructions from KRA before proceeding through the official government service platform.",
  },
  {
    title: <>Apply for a<br />Birth Certificate</>,
    name: "Birth Certificate",
    icon: Users,
    keywords: "birth certificate civil registration",
    description:
  "A Kenyan birth certificate is an official civil-registration document that records a person's birth and helps establish legal identity. The Civil Registration Services provides online birth-registration services through eCitizen, including applications for birth certificates and late birth certificates. For births reported more than six months after the date of occurrence, the late birth-registration process applies. Applicants should check the current requirements, supporting information, fees and instructions from Civil Registration Services before submitting an application.",
  },
  {
    title: <>Apply for<br />Certificate<br />of Good Conduct</>,
    name: "Certificate of Good Conduct",
    icon: Award,
    keywords: "good conduct police certificate",
   description:
  "A Certificate of Good Conduct, also known as a Police Clearance Certificate, is issued to applicants following a background check by the Directorate of Criminal Investigations (DCI). It is commonly required for purposes such as employment, immigration, licensing and other official processes. Applications and related instructions are available through the official eCitizen platform. Applicants should check the latest requirements, applicable fees and collection instructions before submitting an application.", description:
      "A Certificate of Good Conduct is commonly requested for employment, immigration and other formal purposes."
  },
  {
    title: <>Save for<br />Affordable<br />Housing</>,
    name: "Affordable Housing",
    icon: Home,
    keywords: "affordable housing boma yangu",
    description:
  "Kenya's affordable housing services provide information and access to government housing programmes and related services. Depending on the programme, applicants may be able to register, check eligibility or access information about available housing opportunities through official government platforms. Requirements and procedures can vary by programme and may change over time, so applicants should review the latest information and instructions provided through the official eCitizen platform before proceeding.",
  },
  {
    title: <>Register a<br />Business</>,
    name: "Business Registration",
    icon: BriefcaseBusiness,
    keywords: "business registration company",
    description:
  "Government business services help individuals and organizations complete business-related registrations and access official services online. Depending on the service, users may be able to register a business, obtain or manage business records, and access other government requirements through the eCitizen platform. Procedures, supporting documents and applicable fees can vary depending on the type of business and service, so applicants should check the latest official requirements before proceeding.",
  },
  {
    title: <>Apply for a<br />Marriage Certificate</>,
    name: "Marriage Certificate",
    icon: Heart,
    keywords: "marriage certificate",
    description:
  "A Kenyan marriage certificate is an official document that records a legally registered marriage. Marriage registration services allow eligible couples to access information and apply for relevant marriage-related services through official government channels. The applicable process can depend on the type of marriage and the circumstances of the applicants. Users should check the latest requirements, supporting documents, fees and instructions provided through the official eCitizen platform before submitting an application.",
  }
];

function goToOfficial() {
  window.location.href = ECITIZEN_URL;
}

function KenyaMark() {
  return (
    <div className="brand-mark" aria-label="Kenya Services Hub">
      <div className="crest-placeholder">
        <span>KENYA</span>
        <small>SERVICES</small>
      </div>

      <div className="brand-divider" />

      <div className="hub-logo">
        <span className="hub-ring">●</span>
        <span className="hub-name">E-CITIZEN</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return services;

    return services.filter((service) =>
      `${service.keywords} ${service.name}`
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <main>
      <div className="independent-notice">
        <strong>Independent service hub:</strong>{" "}
        this website is not the official eCitizen portal. Selecting a
        service takes you to the official eCitizen platform.
      </div>

      <header className="topbar">
        <a
          className="brand-link"
          href="/"
          aria-label="E-CITIZEN Kenya Services Hub"
        >
          <KenyaMark />
        </a>

        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMobileOpen(false)}>
            Home
          </a>

          <a href="#guides" onClick={() => setMobileOpen(false)}>
            Service Guides
          </a>

          <a href="#about" onClick={() => setMobileOpen(false)}>
            About
          </a>

          <a href="#support" onClick={() => setMobileOpen(false)}>
            Help &amp; Support
          </a>
        </nav>

        <div className="actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() =>
              document.getElementById("service-search")?.focus()
            }
          >
            <Search size={21} strokeWidth={1.7} />
          </button>

          <button className="sign-in" onClick={goToOfficial}>
            Sign in
          </button>

          <button className="register" onClick={goToOfficial}>
            Register
          </button>

          <button
            className="round-action"
            aria-label="Language"
            onClick={goToOfficial}
          >
            <Globe2 size={18} />
          </button>

          <button
            className="round-action"
            aria-label="Accessibility"
            onClick={goToOfficial}
          >
            <Accessibility size={18} />
          </button>

          <button
            className="mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>
            Government services simplified
            <br />
            All your government records unified
          </h1>
        </div>

        <div className="service-panel">
          <div className="search-wrap">
            <Search className="search-icon" size={25} />

            <input
              id="service-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && goToOfficial()
              }
              placeholder="Type name of service, ministry, department, agency etc..."
              aria-label="Search government services"
            />
          </div>

          <div className="services-grid">
            {filtered.map(
              ({ title, icon: Icon, keywords }) => (
                <button
                  key={keywords}
                  className="service-card"
                  onClick={goToOfficial}
                >
                  <span className="service-icon">
                    <Icon size={39} strokeWidth={1.7} />
                  </span>

                  <span className="service-title">
                    {title}
                  </span>
                </button>
              )
            )}
          </div>

          {query && filtered.length === 0 && (
            <button
              className="no-results"
              onClick={goToOfficial}
            >
              No matching service found here. Continue to official
              eCitizen services →
            </button>
          )}
        </div>
      </section>

      {/* ORIGINAL INFORMATION SECTION */}
      <section className="intro-section" id="about">
        <div className="content-container">
          <div className="section-label">
            <Info size={17} />
            Kenya Government Services Information
          </div>

          <h2>
            Understand the service before you apply
          </h2>

          <p className="intro-text">
            E-CITIZEN Kenya Services Hub is an independent information
            resource designed to help visitors understand common
            government services before continuing to the official
            government platform.
          </p>

          <p className="intro-text">
            We provide simple explanations of what different services
            are for, the type of information applicants may need and
            what to expect when continuing to the official service
            platform. Service requirements can change, so applicants
            should always confirm the latest requirements with the
            relevant government agency.
          </p>
        </div>
      </section>

      {/* SERVICE GUIDE CARDS */}
      <section className="guides-section" id="guides">
        <div className="content-container">
          <div className="section-heading">
            <div>
              <div className="section-label">
                <ShieldCheck size={17} />
                Service Guides
              </div>

              <h2>Popular government services</h2>
            </div>

            <p>
              Use these guides to understand the purpose of each
              service before visiting the official platform.
            </p>
          </div>

          <div className="guide-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="guide-card"
                  key={service.name}
                >
                  <div className="guide-icon">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3>{service.name}</h3>

                  <p>{service.description}</p>

                  <button
                    className="guide-link"
                    onClick={goToOfficial}
                  >
                    Continue to official service
                    <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="content-container">
          <div className="section-heading centered">
            <div>
              <div className="section-label">
                <CheckCircle2 size={17} />
                How it works
              </div>

              <h2>Find information, then continue officially</h2>
            </div>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">1</span>
              <h3>Choose a service</h3>
              <p>
                Search for a government service or select one of the
                service categories on this website.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">2</span>
              <h3>Read the guide</h3>
              <p>
                Review the basic information provided to understand
                what the service is intended for.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">3</span>
              <h3>Continue to eCitizen</h3>
              <p>
                Use the official eCitizen platform to begin or
                complete the applicable government service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="notice-section" id="support">
        <div className="content-container">
          <div className="notice-box">
            <Info size={25} />

            <div>
              <h3>Important information</h3>

              <p>
                E-CITIZEN Kenya Services Hub is an independent website
                and is not operated by the Government of Kenya or
                the official eCitizen platform. We do not process
                government applications, issue certificates or collect
                government service fees.
              </p>

              <p>
                Government service requirements, fees and procedures
                may change. Always confirm current information on the
                relevant official government platform before submitting
                an application or making a payment.
              </p>

              <button
                className="official-button"
                onClick={goToOfficial}
              >
                Visit official eCitizen
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

     <footer className="site-footer">
  <div className="footer-inner">
    <div className="footer-brand">
      <strong>E-CITIZEN Kenya Services Hub</strong>

      <p>
        An independent information and service-discovery hub
        for Kenyan government services.
      </p>
    </div>

    <div className="footer-links">
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Use</a>
      <a href="/disclaimer">Disclaimer</a>
    </div>

    <div className="footer-official">
      <p>
        Need to complete a government service?
      </p>

      <a
        href="https://accounts.ecitizen.go.ke/en"
        className="official-footer-link"
      >
        Visit Official eCitizen
        <ArrowRight size={16} />
      </a>
    </div>
  </div>

    <div className="footer-bottom">
    <span>
      © {new Date().getFullYear()} E-CITIZEN Kenya Services Hub
    </span>

    <span>
      Independent website · Not the official eCitizen portal
    </span>
    </div>
</footer>
    </main>
  );
}
