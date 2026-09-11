import React from "react";
import { Link } from "react-router-dom";
import { CONTENT } from "../content.js";
import { Rings, Reveal, Em } from "../ui.jsx";

export default function Home({ lang }) {
  const t = CONTENT[lang].home;
  const pillars = CONTENT[lang].pillars;
  const about = CONTENT[lang].about;

  return (
    <>
      {/* ═══ HERO plein écran — déclaration de mission ═══ */}
      <section className="hero">
        <Rings className="hero-rings" />
        <div className="wrap hero-content">
          <Reveal>
            <span className="kicker">{t.heroKicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display-xl" style={{ marginTop: 26 }}>
              <Em parts={t.heroTitle} />
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t.heroLead}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-cta">
              <Link to="/metiers" className="btn btn-light">
                {t.heroCta1} <span className="arrow">→</span>
              </Link>
              <Link to="/contact" className="btn btn-gold">
                {t.heroCta2} <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="scroll-cue">{t.scroll}</div>
      </section>

      {/* ═══ Bandeau chiffres clés ═══ */}
      <section className="kpi-band bg-white">
        <div className="wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="kpi-grid">
            {t.kpis.map((k, i) => (
              <Reveal key={i} delay={i} className="kpi">
                <div className="kpi-value">
                  {k.value}
                  {k.sup && <sup>{k.sup}</sup>}
                </div>
                <div className="kpi-label">{k.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Trois métiers ═══ */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="kicker">{t.pillarsKicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-l" style={{ marginTop: 18, marginBottom: 56 }}>
              <Em parts={t.pillarsTitle} />
            </h2>
          </Reveal>
          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={i} delay={i} className="pillar" as={Link} to="/metiers">
                <span className="pillar-roman">{p.roman}</span>
                <h3>{p.title}</h3>
                <p>{p.teaser}</p>
                <span className="pillar-link">
                  {t.pillarsCta} <span className="arrow">→</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Citation conviction ═══ */}
      <section className="section bg-navy" style={{ position: "relative", overflow: "hidden" }}>
        <Rings className="cta-rings" stroke="rgba(168,136,58,0.28)" />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <span className="kicker">{t.missionKicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <p className="pull-quote" style={{ marginTop: 28 }}>{t.missionQuote}</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Approche (3 premiers engagements) ═══ */}
      <section className="section bg-white">
        <div className="wrap">
          <Reveal>
            <span className="kicker">{t.approachKicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-l" style={{ marginTop: 18, marginBottom: 56 }}>
              <Em parts={t.approachTitle} />
            </h2>
          </Reveal>
          <div className="values-grid">
            {about.values.slice(0, 3).map((v, i) => (
              <Reveal key={i} delay={i} className="value-item">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Partenaires (teaser) ═══ */}
      <section className="section bg-navy">
        <div className="wrap">
          <Reveal>
            <span className="kicker">{t.partnersKicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-l" style={{ marginTop: 18 }}>
              <Em parts={t.partnersTitle} />
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead" style={{ marginTop: 24, marginBottom: 48 }}>{t.partnersLead}</p>
          </Reveal>
          <Reveal delay={2}>
            <div className="logo-strip">
              {CONTENT[lang].partners.cats[0].items.map((p) => (
                <span key={p} className="partner-tag">{p}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div style={{ marginTop: 56, textAlign: "center" }}>
              <Link to="/partenaires" className="btn btn-light">
                {t.partnersCta} <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA final ═══ */}
      <section className="section cta-band">
        <div className="wrap">
          <Reveal>
            <h2 className="display-l">
              <Em parts={t.ctaTitle} />
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="lead" style={{ marginTop: 20 }}>{t.ctaLead}</p>
          </Reveal>
          <Reveal delay={2}>
            <div style={{ marginTop: 40 }}>
              <Link to="/contact" className="btn btn-gold">
                {t.ctaBtn} <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
