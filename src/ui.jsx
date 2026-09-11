import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, Outlet } from "react-router-dom";
import { CONTENT } from "./content.js";

/* ── Motif signature : cercles concentriques (identité brochure) ── */
export function Rings({ className, stroke = "rgba(168,136,58,0.35)", count = 9 }) {
  const circles = [];
  for (let i = 1; i <= count; i++) {
    circles.push(
      <circle
        key={i}
        cx="400"
        cy="400"
        r={(i * 380) / count}
        fill="none"
        stroke={stroke}
        strokeWidth="0.8"
        opacity={1 - i / (count + 3)}
      />
    );
  }
  return (
    <svg className={className} viewBox="0 0 800 800" aria-hidden="true">
      <g>
        {circles}
        <circle cx="400" cy="400" r="3.5" fill="rgba(168,136,58,0.8)" />
      </g>
    </svg>
  );
}

/* ── Révélation au scroll ── */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delayClass = delay === 1 ? "reveal-d1" : delay === 2 ? "reveal-d2" : delay === 3 ? "reveal-d3" : "";
  return (
    <Tag ref={ref} className={`reveal ${visible ? "visible" : ""} ${delayClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* ── Titre avec emphase or en italique : ["avant ", "mot", " après"] ── */
export function Em({ parts }) {
  return (
    <>
      {parts[0]}
      <em>{parts[1]}</em>
      {parts[2]}
    </>
  );
}

/* ── Navigation ── */
export function Nav({ lang, setLang }) {
  const t = CONTENT[lang].nav;
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const links = [
    { to: "/", label: t.home, end: true },
    { to: "/a-propos", label: t.about },
    { to: "/metiers", label: t.services },
    { to: "/partenaires", label: t.partners },
    { to: "/equipe", label: t.team },
    { to: "/contact", label: t.contact },
  ];

  return (
    <>
      <header className={`nav ${solid || open ? "solid" : ""}`}>
        <div className="wrap nav-inner">
          <Link to="/" className="nav-logo" aria-label="Myriad Capital Africa — Accueil">
            <img
              src="/logo.png"
              alt=""
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span className="nav-wordmark">
              Myriad Capital Africa
              <span>Structure · Finance · Impact</span>
            </span>
          </Link>
          <nav className="nav-links" aria-label="Navigation principale">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </nav>
          <button
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            {l.label}
          </NavLink>
        ))}
        <button className="lang-toggle" onClick={() => setLang(lang === "fr" ? "en" : "fr")}>
          {lang === "fr" ? "English" : "Français"}
        </button>
      </div>
    </>
  );
}

/* ── Hero des pages intérieures ── */
export function PageHero({ kicker, titleParts, lead }) {
  return (
    <section className="page-hero">
      <Rings className="page-hero-rings" />
      <div className="wrap">
        <Reveal>
          <span className="kicker">{kicker}</span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="display-xl" style={{ marginTop: 22 }}>
            <Em parts={titleParts} />
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={2}>
            <p className="lead">{lead}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ── Footer ── */
export function Footer({ lang }) {
  const t = CONTENT[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <span className="nav-wordmark" style={{ fontSize: 22 }}>
              Myriad Capital Africa
            </span>
            <p className="footer-baseline">{t.footer.baseline}</p>
          </div>
          <div>
            <h5>{t.footer.nav}</h5>
            <div className="footer-links">
              <Link to="/a-propos">{t.nav.about}</Link>
              <Link to="/metiers">{t.nav.services}</Link>
              <Link to="/partenaires">{t.nav.partners}</Link>
              <Link to="/equipe">{t.nav.team}</Link>
              <Link to="/contact">{t.nav.contact}</Link>
            </div>
          </div>
          <div>
            <h5>{t.footer.contact}</h5>
            <div className="footer-links">
              <a href="mailto:contact@myriadcapitalafrica.com">contact@myriadcapitalafrica.com</a>
              <span>Abidjan, Côte d'Ivoire</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} {t.footer.legal}</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Remonter en haut à chaque navigation ── */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/* ── Layout global ── */
export function Layout({ lang, setLang }) {
  return (
    <>
      <ScrollToTop />
      <Nav lang={lang} setLang={setLang} />
      <main>
        <Outlet />
      </main>
      <Footer lang={lang} />
    </>
  );
}

