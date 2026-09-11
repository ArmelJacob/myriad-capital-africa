import React from "react";
import { CONTENT } from "../content.js";
import { PageHero, Reveal, Em } from "../ui.jsx";

export default function About({ lang }) {
  const t = CONTENT[lang].about;

  return (
    <>
      <PageHero kicker={t.heroKicker} titleParts={t.heroTitle} lead={t.heroLead} />

      <section className="section bg-white">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)", gap: "clamp(32px,6vw,96px)" }}>
          <div>
            <Reveal>
              <span className="kicker">{t.whoKicker}</span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="display-l" style={{ marginTop: 18 }}>
                <Em parts={t.whoTitle} />
              </h2>
            </Reveal>
          </div>
          <div>
            <Reveal delay={1}>
              <p className="lead">{t.whoBody1}</p>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead" style={{ marginTop: 24 }}>{t.whoBody2}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="pull-quote">{t.quote}</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <Reveal>
            <span className="kicker">{t.valuesKicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-l" style={{ marginTop: 18, marginBottom: 56 }}>
              <Em parts={t.valuesTitle} />
            </h2>
          </Reveal>
          <div className="values-grid" style={{ rowGap: 56 }}>
            {t.values.map((v, i) => (
              <Reveal key={i} delay={i % 3} className="value-item">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="wrap">
          <Reveal>
            <span className="kicker">{t.sectorsKicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-l" style={{ marginTop: 18, marginBottom: 56 }}>
              <Em parts={t.sectorsTitle} />
            </h2>
          </Reveal>
          <div className="sector-grid">
            {t.sectors.map((s, i) => (
              <Reveal key={s} delay={i % 4} className="sector">
                <span className="sector-n">{String(i + 1).padStart(2, "0")}</span>
                <h4>{s}</h4>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
