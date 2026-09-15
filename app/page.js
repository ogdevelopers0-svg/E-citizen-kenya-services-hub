 "use client";

import { useMemo, useState } from "react";
import {
  Search, Globe2, Accessibility, Menu, X, Smartphone,
  IdCard, FileText, Users, Award, Home, BriefcaseBusiness, Heart
} from "lucide-react";

const ECITIZEN_URL = "https://accounts.ecitizen.go.ke/en";

const services = [
  { title: <>Apply for<br />a Passport</>, icon: Smartphone, keywords: "passport travel immigration" },
  { title: <>Apply for a<br />Driving License</>, icon: IdCard, keywords: "driving license ntsa" },
  { title: <>KRA<br />Services</>, icon: FileText, keywords: "kra tax revenue" },
  { title: <>Apply for a<br />Birth Certificate</>, icon: Users, keywords: "birth certificate civil registration" },
  { title: <>Apply for<br />Certificate<br />of Good Conduct</>, icon: Award, keywords: "good conduct police certificate" },
  { title: <>Save for<br />Affordable<br />Housing</>, icon: Home, keywords: "affordable housing boma yangu" },
  { title: <>Register a<br />Business</>, icon: BriefcaseBusiness, keywords: "business registration company" },
  { title: <>Apply for a<br />Marriage Certificate</>, icon: Heart, keywords: "marriage certificate" }
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
    return services.filter(s =>
      `${s.keywords} ${s.title.props?.children ?? ""}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main>
      <div className="independent-notice">
        <strong>Independent service hub:</strong> this website is not the official eCitizen portal.
        Selecting a service takes you to the official eCitizen platform.
      </div>

      <header className="topbar">
        <a className="brand-link" href="/" aria-label="E-CITIZEN Kenya Services Hub">
          <KenyaMark />
        </a>

        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#national" onClick={goToOfficial}>National</a>
          <a href="#counties" onClick={goToOfficial}>Counties</a>
          <a href="#support" onClick={goToOfficial}>Help &amp; Support</a>
        </nav>

        <div className="actions">
          <button className="icon-button" aria-label="Search" onClick={() => document.getElementById("service-search")?.focus()}>
            <Search size={21} strokeWidth={1.7} />
          </button>
          <button className="sign-in" onClick={goToOfficial}>Sign in</button>
          <button className="register" onClick={goToOfficial}>Register</button>
          <button className="round-action" aria-label="Language" onClick={goToOfficial}><Globe2 size={18} /></button>
          <button className="round-action" aria-label="Accessibility" onClick={goToOfficial}><Accessibility size={18} /></button>
          <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>
            Government services simplified<br />
            All your government records unified
          </h1>
        </div>

        <div className="service-panel">
          <div className="search-wrap">
            <Search className="search-icon" size={25} />
            <input
              id="service-search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === "Enter" && goToOfficial()}
              placeholder="Type name of service, ministry, department, agency etc..."
              aria-label="Search government services"
            />
          </div>

          <div className="services-grid">
            {filtered.map(({ title, icon: Icon, keywords }) => (
              <button key={keywords} className="service-card" onClick={goToOfficial}>
                <span className="service-icon"><Icon size={39} strokeWidth={1.7} /></span>
                <span className="service-title">{title}</span>
              </button>
            ))}
          </div>

          {query && filtered.length === 0 && (
            <button className="no-results" onClick={goToOfficial}>
              No matching service found here. Continue to official eCitizen services →
            </button>
          )}
        </div>
      </section>

      <section className="below-fold">
        <h2>Access official government services</h2>
        <p>
          Search above or select a service. You will be redirected to the official
          eCitizen platform to continue.
        </p>
        <button className="official-button" onClick={goToOfficial}>
          Go to official eCitizen
        </button>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} E-CITIZEN Kenya Services Hub</span>
        <button onClick={goToOfficial}>Official eCitizen portal</button>
      </footer>
    </main>
  );
}
