import React from "react";
import { CONTENT } from "../content.js";
import { PageHero, Reveal } from "../ui.jsx";

export default function Contact({ lang }) {
  const t = CONTENT[lang].contact;
  const mail = t.lines.find((l) => l.href)?.href || "mailto:contact@myriadcapitalafrica.com";

  return (
    <>
      <PageHero kicker={t.heroKicker} titleParts={t.heroTitle} lead={t.heroLead} />

      <section className="section bg-navy" style={{ paddingTop: "clamp(56px,8vw,96px)" }}>
        <div className="wrap contact-grid">
          <div>
            <Reveal>
              <h2 className="display-m" style={{ marginBottom: 24 }}>{t.infoTitle}</h2>
            </Reveal>
            <div>
              {t.lines.map((l, i) => (
                <Reveal key={i} delay={i} className="contact-line">
                  <span className="contact-label">{l.label}</span>
                  {l.href ? (
                    <a href={l.href} className="contact-value">{l.value}</a>
                  ) : (
                    <span className="contact-value">{l.value}</span>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal delay={1}>
              <h2 className="display-m" style={{ marginBottom: 24 }}>{t.formTitle}</h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead" style={{ fontSize: 16 }}>{t.formLead}</p>
            </Reveal>
            <Reveal delay={3}>
              <div style={{ marginTop: 36 }}>
                <a href={mail} className="btn btn-gold" style={{ borderColor: "var(--gold-light)", color: "var(--gold-light)" }}>
                  {t.formBtn} <span className="arrow">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
