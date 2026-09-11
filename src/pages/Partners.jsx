import React from "react";
import { CONTENT } from "../content.js";
import { PageHero, Reveal } from "../ui.jsx";

export default function Partners({ lang }) {
  const t = CONTENT[lang].partners;

  return (
    <>
      <PageHero kicker={t.heroKicker} titleParts={t.heroTitle} lead={t.heroLead} />

      <section className="bg-white" style={{ paddingTop: 24, paddingBottom: "var(--pad-section)" }}>
        <div className="wrap">
          {t.cats.map((c, i) => (
            <Reveal key={i} className="partner-cat" style={i === 0 ? { borderTop: "none" } : undefined}>
              <div>
                <h3>{c.title}</h3>
                <p className="cat-desc">{c.desc}</p>
              </div>
              <div className="partner-tags">
                {c.items.map((item) => (
                  <span key={item} className="partner-tag">{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p style={{ marginTop: 48, fontSize: 13, fontStyle: "italic", color: "var(--muted)" }}>
              {t.note}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
