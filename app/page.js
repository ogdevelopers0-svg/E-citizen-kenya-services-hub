"use client";

import { useMemo, useState } from "react";

import {
  Search,
  Globe2,
  Accessibility,
  Menu,
  X,
  Smartphone,
  IdCard,
  FileText,
  Users,
  Award,
  Home,
  BriefcaseBusiness,
  Heart,
  ArrowRight,
  ShieldCheck,
  Info,
  CheckCircle2
} from "lucide-react";

const ECITIZEN_URL = "https://accounts.ecitizen.go.ke/en";

const services = [
  {
    title: <>Apply for<br />a Passport</>,
    name: "Passport",
    icon: Smartphone,
    keywords: "passport travel immigration",
    description:
      "A passport is an official travel document used by Kenyan citizens when travelling internationally."
  },
  {
    title: <>Apply for a<br />Driving License</>,
    name: "Driving Licence",
    icon: IdCard,
    keywords: "driving license ntsa",
    description:
      "A driving licence allows an eligible driver to legally operate a motor vehicle according to the applicable requirements."
  },
  {
    title: <>KRA<br />Services</>,
    name: "KRA Services",
    icon: FileText,
    keywords: "kra tax revenue pin",
    description:
      "KRA services cover a range of tax-related services, taxpayer information and related online services."
  },
  {
    title: <>Apply for a<br />Birth Certificate</>,
    name: "Birth Certificate",
    icon: Users,
    keywords: "birth certificate civil registration",
    description:
      "A birth certificate is an important civil registration document commonly required for identification and other official processes."
  },
  {
    title: <>Apply for<br />Certificate<br />of Good Conduct</>,
    name: "Certificate of Good Conduct",
    icon: Award,
    keywords: "good conduct police certificate",
    description:
      "A Certificate of Good Conduct is commonly requested for employment, immigration and other formal purposes."
  },
  {
    title: <>Save for<br />Affordable<br />Housing</>,
    name: "Affordable Housing",
    icon: Home,
    keywords: "affordable housing boma yangu",
    description:
      "The affordable housing programme provides information and application pathways for eligible applicants."
  },
  {
    title: <>Register a<br />Business</>,
    name: "Business Registration",
    icon: BriefcaseBusiness,
    keywords: "business registration company",
    description:
      "Business registration services help entrepreneurs and organisations complete applicable registration processes."
  },
  {
    title: <>Apply for a<br />Marriage Certificate</>,
    name: "Marriage Certificate",
    icon: Heart,
    keywords: "marriage certificate",
    description:
      "Marriage certificate services provide information about official marriage documentation and related processes."
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

      <footer>
        <span>
          © {new Date().getFullYear()} E-CITIZEN Kenya Services Hub
        </span>

        <button onClick={goToOfficial}>
          Official eCitizen portal
        </button>
      </footer>
    </main>
  );
}
