import { useState, useEffect, useRef } from "react";

const LANG = {
  fr: {
    nav: { home: "Accueil", about: "À propos", services: "Nos Métiers", team: "Équipe", contact: "Contact" },
    hero: {
      tag: "Boutique panafricaine de Corporate Finance & Advisory",
      title1: "Structure.",
      title2: "Finance.",
      title3: "Impact.",
      sub: "Nous accompagnons les entreprises, institutions et gouvernements africains dans la structuration de leurs projets, le financement de leur croissance et la transformation de leur organisation.",
      cta1: "Découvrir nos métiers",
      cta2: "Nous contacter",
    },
    about: {
      tag: "QUI NOUS SOMMES",
      title: "Votre partenaire de confiance en Afrique",
      p1: "Myriad Capital Africa est un cabinet de conseil indépendant en corporate finance et advisory, fondé par des professionnels chevronnés de la finance africaine.",
      p2: "Forts de plus de 25 ans d'expérience cumulée dans la structuration financière, le conseil stratégique et l'accompagnement opérationnel, nous intervenons aux côtés des acteurs économiques du continent pour accélérer leur croissance et maximiser leur impact.",
      p3: "Notre positionnement unique, à la croisée du conseil stratégique, du corporate finance et du conseil opérationnel, nous permet d'offrir des solutions intégrées et sur mesure à nos clients.",
      stats: [
        { val: "25+", label: "Années d'expérience cumulée" },
        { val: "500M+", label: "USD de transactions" },
        { val: "10+", label: "Pays d'intervention" },
        { val: "3", label: "Métiers intégrés" },
      ],
    },
    services: {
      tag: "NOS MÉTIERS",
      title: "Trois expertises intégrées au service de votre croissance",
      items: [
        {
          icon: "📊",
          name: "Conseil Stratégique",
          desc: "Audits organisationnels et stratégiques, études sectorielles, plans directeurs, stratégie d'entreprise, business plans et modèles financiers.",
          details: ["Audits organisationnels & stratégiques", "Études sectorielles & plans directeurs", "Stratégie d'entreprise", "Business plans & modèles financiers"],
        },
        {
          icon: "💰",
          name: "Corporate Finance",
          desc: "Levées de fonds, structuration de dette, arrangement financier, project finance, PPP, M&A advisory et évaluation d'entreprises.",
          details: ["Levées de fonds & Debt Advisory", "Structuration & arrangement financier", "Project Finance & PPP", "M&A Advisory & Évaluation"],
        },
        {
          icon: "⚙️",
          name: "Conseil Opérationnel",
          desc: "Conduite du changement, transformation digitale, optimisation des process, accompagnement à la mise en œuvre et formation.",
          details: ["Conduite du changement", "Transformation digitale", "Optimisation des process", "Accompagnement opérationnel & Formation"],
        },
      ],
    },
    clients: {
      tag: "NOS CLIENTS",
      title: "Une clientèle diversifiée",
      items: [
        { icon: "🏛️", name: "Gouvernements & Agences publiques", desc: "Ministères, agences de développement, collectivités territoriales" },
        { icon: "🏦", name: "Institutions financières", desc: "Banques, fonds d'investissement, DFI, sociétés de gestion" },
        { icon: "🏢", name: "Grandes entreprises", desc: "Multinationales, groupes industriels, conglomérats africains" },
        { icon: "🚀", name: "PME & Start-ups", desc: "Entreprises en croissance, scale-ups, entrepreneurs" },
      ],
    },

    team: {
      tag: "L'ÉQUIPE",
      title: "Des professionnels engagés",
      members: [
        {
          name: "Armel Assanvoh",
          role: "Managing Partner",
          bio: "14 ans d'expérience en corporate finance, gestion d'entreprise et conseil stratégique. Parcours : PWIS Group (DGA), Emerald Corporate Group (Fondateur & DG), MTN, Rina Consulting. Formation : MBA Finance (Coventry University, UK), Master Administration des Entreprises.",
          highlights: ["14 ans d'expérience", "Fondateur Emerald Corporate Group", "MBA Finance — Coventry University"],
          email: "armel.assanvoh@myriadcapitalafrica.com",
          phone: "+225 07 07 XX XX XX",
        },
        {
          name: "Koffi N'Guessan Philippe",
          role: "Directeur, Structured Finance & Capital Solutions",
          bio: "11+ ans d'expérience en structuration financière, analyse de crédit et investment banking. Parcours : Ecobank CI (Senior Credit Analyst), EDC Investment Corp. (Investment Banking), Bridge Bank Group. Formation : MSc Finance EMLYON, Master CCA INTEC Paris.",
          highlights: ["11+ ans d'expérience", "165+ Mds FCFA de transactions", "MSc Finance — EMLYON"],
          email: "philippe.nguessan@myriadcapitalafrica.com",
          phone: "+225 07 07 XX XX XX",
        },
      ],
    },
    contact: {
      tag: "CONTACT",
      title: "Parlons de votre projet",
      subtitle: "Nous sommes à votre disposition pour discuter de vos besoins en conseil stratégique, corporate finance et accompagnement opérationnel.",
      address: "Abidjan, Côte d'Ivoire",
      email: "contact@myriadcapitalafrica.com",
      form: { name: "Nom complet", email: "Email", company: "Entreprise", message: "Votre message", send: "Envoyer" },
    },
    footer: {
      copy: "© 2025 Myriad Capital Africa. Tous droits réservés.",
      tagline: "Structure, Finance & Impact",
    },
  },
  en: {
    nav: { home: "Home", about: "About", services: "Services", team: "Team", contact: "Contact" },
    hero: {
      tag: "Pan-African Boutique Corporate Finance & Advisory",
      title1: "Structure.",
      title2: "Finance.",
      title3: "Impact.",
      sub: "We support African businesses, institutions and governments in structuring their projects, financing their growth and transforming their organizations.",
      cta1: "Discover our services",
      cta2: "Contact us",
    },
    about: {
      tag: "WHO WE ARE",
      title: "Your Trusted Partner in Africa",
      p1: "Myriad Capital Africa is an independent corporate finance and advisory firm, founded by seasoned African finance professionals.",
      p2: "With over 25 years of combined experience in financial structuring, strategic advisory and operational support, we work alongside the continent's economic actors to accelerate their growth and maximize their impact.",
      p3: "Our unique positioning, at the crossroads of strategic advisory, corporate finance and operational consulting, allows us to offer integrated and tailored solutions to our clients.",
      stats: [
        { val: "25+", label: "Years of combined experience" },
        { val: "500M+", label: "USD in transactions" },
        { val: "10+", label: "Countries of operation" },
        { val: "3", label: "Integrated practices" },
      ],
    },
    services: {
      tag: "OUR SERVICES",
      title: "Three integrated practices serving your growth",
      items: [
        {
          icon: "📊",
          name: "Strategic Advisory",
          desc: "Organizational & strategic audits, sector studies, master plans, corporate strategy, business plans & financial models.",
          details: ["Organizational & Strategic Audits", "Sector Studies & Master Plans", "Corporate Strategy", "Business Plans & Financial Models"],
        },
        {
          icon: "💰",
          name: "Corporate Finance",
          desc: "Fundraising, debt structuring, financial arrangement, project finance, PPP, M&A advisory and valuations.",
          details: ["Fundraising & Debt Advisory", "Structuring & Financial Arrangement", "Project Finance & PPP", "M&A Advisory & Valuation"],
        },
        {
          icon: "⚙️",
          name: "Operational Advisory",
          desc: "Change management, digital transformation, process optimization, implementation support and training.",
          details: ["Change Management", "Digital Transformation", "Process Optimization", "Operational Support & Training"],
        },
      ],
    },
    clients: {
      tag: "OUR CLIENTS",
      title: "A diversified client base",
      items: [
        { icon: "🏛️", name: "Governments & Public Agencies", desc: "Ministries, development agencies, local authorities" },
        { icon: "🏦", name: "Financial Institutions", desc: "Banks, investment funds, DFIs, asset managers" },
        { icon: "🏢", name: "Large Corporations", desc: "Multinationals, industrial groups, African conglomerates" },
        { icon: "🚀", name: "SMEs & Start-ups", desc: "Growing companies, scale-ups, entrepreneurs" },
      ],
    },

    team: {
      tag: "THE TEAM",
      title: "Committed professionals",
      members: [
        {
          name: "Armel Assanvoh",
          role: "Managing Partner",
          bio: "14 years of experience in corporate finance, business management and strategic advisory. Career: PWIS Group (Deputy CEO), Emerald Corporate Group (Founder & CEO), MTN, Rina Consulting. Education: MBA Finance (Coventry University, UK), Master in Business Administration.",
          highlights: ["14 years of experience", "Founded Emerald Corporate Group", "MBA Finance — Coventry University"],
          email: "armel.assanvoh@myriadcapitalafrica.com",
          phone: "+225 07 07 XX XX XX",
        },
        {
          name: "Koffi N'Guessan Philippe",
          role: "Director, Structured Finance & Capital Solutions",
          bio: "11+ years of experience in financial structuring, credit analysis and investment banking. Career: Ecobank CI (Senior Credit Analyst), EDC Investment Corp. (Investment Banking), Bridge Bank Group. Education: MSc Finance EMLYON, Master CCA INTEC Paris.",
          highlights: ["11+ years of experience", "165+ Bn FCFA in transactions", "MSc Finance — EMLYON"],
          email: "philippe.nguessan@myriadcapitalafrica.com",
          phone: "+225 07 07 XX XX XX",
        },
      ],
    },
    contact: {
      tag: "CONTACT",
      title: "Let's talk about your project",
      subtitle: "We are available to discuss your needs in strategic advisory, corporate finance and operational support.",
      address: "Abidjan, Côte d'Ivoire",
      email: "contact@myriadcapitalafrica.com",
      form: { name: "Full name", email: "Email", company: "Company", message: "Your message", send: "Send" },
    },
    footer: {
      copy: "© 2025 Myriad Capital Africa. All rights reserved.",
      tagline: "Structure, Finance & Impact",
    },
  },
};

// ─── Decorative SVG icons ─────────────────────────────
const ChevronSVG = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ opacity: 0.1 }}>
    <path d="M12 8L28 24L12 40" stroke="#795C20" strokeWidth="3" />
    <path d="M20 8L36 24L20 40" stroke="#795C20" strokeWidth="3" />
  </svg>
);

const LOGO_SRC = "/logo.png";

export default function MyriadSite() {
  const [lang, setLang] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [expandedService, setExpandedService] = useState(null);
  const t = LANG[lang];

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["home", "about", "services", "team", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navBg = scrollY > 60;

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#121F30", background: "#F5F3EF", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        :root {
          --navy: #121F30;
          --navy2: #1A2D42;
          --gold: #795C20;
          --gold-light: #A68A3E;
          --white: #FFFFFF;
          --light-bg: #F5F3EF;
          --gray: #6B7280;
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Outfit', sans-serif;
        }

        .nav-link {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--white);
          text-decoration: none;
          cursor: pointer;
          padding: 6px 0;
          position: relative;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--gold);
          transition: width 0.3s;
        }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link:hover, .nav-link.active { color: var(--gold-light); }

        .tag {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: block;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 500;
          line-height: 1.15;
          color: var(--navy);
          margin-bottom: 24px;
        }

        .gold-line {
          width: 60px;
          height: 2px;
          background: var(--gold);
          margin-bottom: 32px;
        }

        .service-card {
          background: var(--white);
          padding: 40px 32px;
          border: 1px solid rgba(121,92,32,0.12);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform 0.4s;
        }
        .service-card:hover::after { transform: scaleX(1); }
        .service-card:hover {
          box-shadow: 0 12px 32px rgba(18,31,48,0.08);
        }

        .stat-box {
          text-align: center;
          padding: 24px 16px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 16px 36px;
          background: var(--gold);
          color: var(--white);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 16px 36px;
          background: transparent;
          color: var(--white);
          border: 1.5px solid rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); }

        .form-input {
          width: 100%;
          padding: 14px 18px;
          font-family: var(--font-body);
          font-size: 14px;
          border: 1px solid rgba(121,92,32,0.2);
          background: var(--white);
          color: var(--navy);
          outline: none;
          transition: border-color 0.3s;
        }
        .form-input:focus { border-color: var(--gold); }
        .form-input::placeholder { color: #999; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fadeInUp 0.7s ease forwards;
        }

        .hamburger { display: none; }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100vh;
            background: var(--navy);
            z-index: 999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 32px;
          }
          .mobile-menu .nav-link { font-size: 18px; }
        }
      `}</style>

      {/* ═══════ NAVBAR ═══════ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100,
        background: navBg ? "rgba(18,31,48,0.97)" : "transparent",
        backdropFilter: navBg ? "blur(12px)" : "none",
        borderBottom: navBg ? "1px solid rgba(121,92,32,0.15)" : "none",
        transition: "all 0.4s", padding: navBg ? "14px 0" : "22px 0",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ cursor: "pointer" }} onClick={() => scrollTo("home")}>
            <img src={LOGO_SRC} alt="Myriad Capital Africa" style={{ height: 40, filter: "brightness(0) invert(1)" }} />
          </div>
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {["home", "about", "services", "team", "contact"].map(s => (
              <span key={s} className={`nav-link ${activeSection === s ? "active" : ""}`} onClick={() => scrollTo(s)}>
                {t.nav[s] || s}
              </span>
            ))}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              style={{
                fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
                letterSpacing: 2, padding: "6px 14px", marginLeft: 8,
                background: "transparent", border: "1.5px solid var(--gold)",
                color: "var(--gold)", cursor: "pointer", textTransform: "uppercase",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.target.style.background = "var(--gold)"; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "var(--gold)"; }}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "none", border: "none", cursor: "pointer", display: "none",
            flexDirection: "column", gap: 5, padding: 8,
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{ width: 24, height: 2, background: "#fff", borderRadius: 1, transition: "all 0.3s",
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translateY(7px)" : i === 2 ? "rotate(-45deg) translateY(-7px)" : "scaleX(0)") : "none"
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}>✕</button>
          {["home", "about", "services", "team", "contact"].map(s => (
            <span key={s} className="nav-link" onClick={() => scrollTo(s)}>{t.nav[s] || s}</span>
          ))}
          <button onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setMenuOpen(false); }}
            style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, padding: "10px 24px",
              background: "var(--gold)", border: "none", color: "#fff", cursor: "pointer", letterSpacing: 2 }}>
            {lang === "fr" ? "ENGLISH" : "FRANÇAIS"}
          </button>
        </div>
      )}

      {/* ═══════ HERO ═══════ */}
      <section id="home" style={{
        minHeight: "100vh", background: "var(--navy)", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center",
      }}>
        {/* Background decorative elements */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
          {[300, 500, 700, 900].map((size, i) => (
            <div key={i} style={{
              position: "absolute", right: -size * 0.25, top: "50%", transform: "translateY(-50%)",
              width: size, height: size, borderRadius: "50%",
              border: "1px solid var(--gold)",
            }} />
          ))}
        </div>
        {/* Gold diagonal accent */}
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "40%", height: "100%",
          background: "linear-gradient(135deg, transparent 50%, rgba(121,92,32,0.04) 50%)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "140px 32px 100px", position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: 720 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500, letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", display: "block", marginBottom: 32 }}>
              {t.hero.tag}
            </span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 400, lineHeight: 1.05, color: "#fff", marginBottom: 32 }}>
              <span style={{ display: "block" }}>{t.hero.title1}</span>
              <span style={{ display: "block", color: "var(--gold)", fontStyle: "italic" }}>{t.hero.title2}</span>
              <span style={{ display: "block" }}>{t.hero.title3}</span>
            </h1>
            <div style={{ width: 60, height: 2, background: "var(--gold)", marginBottom: 28 }} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 540, marginBottom: 48 }}>
              {t.hero.sub}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("services")}>{t.hero.cta1} →</button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>{t.hero.cta2}</button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="about" style={{ padding: "120px 32px", maxWidth: 1200, margin: "0 auto" }}>
        <span className="tag">{t.about.tag}</span>
        <h2 className="section-title">{t.about.title}</h2>
        <div className="gold-line" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "var(--gray)", marginBottom: 20 }}>{t.about.p1}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "var(--gray)", marginBottom: 20 }}>{t.about.p2}</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.8, color: "var(--gray)" }}>{t.about.p3}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(121,92,32,0.12)" }}>
            {t.about.stats.map((s, i) => (
              <div key={i} className="stat-box" style={{ background: "var(--light-bg)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 600, color: "var(--gold)", marginBottom: 8 }}>{s.val}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500, color: "var(--gray)", letterSpacing: 0.5, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="services" style={{ padding: "120px 32px", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="tag">{t.services.tag}</span>
          <h2 className="section-title">{t.services.title}</h2>
          <div className="gold-line" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginTop: 48 }}>
            {t.services.items.map((svc, i) => (
              <div key={i} className="service-card" onClick={() => setExpandedService(expandedService === i ? null : i)}>
                <div style={{ fontSize: 36, marginBottom: 20 }}>{svc.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "var(--navy)", marginBottom: 16 }}>{svc.name}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.7, color: "var(--gray)", marginBottom: expandedService === i ? 20 : 0 }}>{svc.desc}</p>
                {expandedService === i && (
                  <ul style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy)", listStyle: "none", padding: 0 }}>
                    {svc.details.map((d, j) => (
                      <li key={j} style={{ padding: "8px 0", borderTop: "1px solid rgba(121,92,32,0.1)", display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: "var(--gold)", fontSize: 14 }}>→</span> {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CLIENTS ═══════ */}
      <section style={{ padding: "100px 32px", background: "var(--navy)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="tag">{t.clients.tag}</span>
          <h2 className="section-title" style={{ color: "#fff" }}>{t.clients.title}</h2>
          <div className="gold-line" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginTop: 48 }}>
            {t.clients.items.map((c, i) => (
              <div key={i} style={{ padding: "32px 24px", border: "1px solid rgba(121,92,32,0.2)", transition: "border-color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(121,92,32,0.2)"}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{c.icon}</div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 10 }}>{c.name}</h4>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TEAM ═══════ */}
      <section id="team" style={{ padding: "120px 32px", background: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span className="tag">{t.team.tag}</span>
          <h2 className="section-title">{t.team.title}</h2>
          <div className="gold-line" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 48, marginTop: 48 }}>
            {t.team.members.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: "100%", height: 320, background: "var(--navy)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
                    {[200, 320].map((s, j) => (
                      <div key={j} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                        width: s, height: s, borderRadius: "50%", border: "1px solid var(--gold)" }} />
                    ))}
                  </div>
                  <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "32px 0" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: "var(--navy)", marginBottom: 4 }}>{m.name}</h3>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", display: "block", marginBottom: 20 }}>{m.role}</span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.7, color: "var(--gray)", marginBottom: 20 }}>{m.bio}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {m.highlights.map((h, j) => (
                      <span key={j} style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--navy)", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: "var(--gold)" }}>◆</span> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section id="contact" style={{ padding: "120px 32px", background: "var(--navy)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03 }}>
          {[400, 600, 800].map((s, i) => (
            <div key={i} style={{ position: "absolute", left: -s * 0.3, bottom: -s * 0.3,
              width: s, height: s, borderRadius: "50%", border: "1px solid var(--gold)" }} />
          ))}
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span className="tag">{t.contact.tag}</span>
          <h2 className="section-title" style={{ color: "#fff" }}>{t.contact.title}</h2>
          <div className="gold-line" />
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: 560, marginBottom: 48, lineHeight: 1.7 }}>
            {t.contact.subtitle}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <input className="form-input" placeholder={t.contact.form.name} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(121,92,32,0.3)", color: "#fff" }} />
              <input className="form-input" placeholder={t.contact.form.email} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(121,92,32,0.3)", color: "#fff" }} />
              <input className="form-input" placeholder={t.contact.form.company} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(121,92,32,0.3)", color: "#fff" }} />
              <textarea className="form-input" placeholder={t.contact.form.message} rows={5} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(121,92,32,0.3)", color: "#fff", resize: "vertical" }} />
              <button className="btn-primary" style={{ alignSelf: "flex-start" }}>{t.contact.form.send} →</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 32, paddingLeft: 32 }}>
              <div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  {lang === "fr" ? "Adresse" : "Address"}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>{t.contact.address}</span>
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Email</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>{t.contact.email}</span>
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--gold)", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  {lang === "fr" ? "Site web" : "Website"}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)" }}>www.myriadcapitalafrica.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer style={{ padding: "40px 32px", background: "#0B1520", borderTop: "1px solid rgba(121,92,32,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={LOGO_SRC} alt="Myriad Capital Africa" style={{ height: 32, filter: "brightness(0) invert(1)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gold)", letterSpacing: 2, fontStyle: "italic" }}>{t.footer.tagline}</span>
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{t.footer.copy}</span>
        </div>
      </footer>
    </div>
  );
}
