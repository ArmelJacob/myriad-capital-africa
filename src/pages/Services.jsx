import React from "react";
import { Link } from "react-router-dom";
import { CONTENT } from "../content.js";
import { PageHero, Reveal, Em } from "../ui.jsx";

export default function Services({ lang }) {
  const t = CONTENT[lang].services;

  return (
    <>
      <PageHero kicker={t.heroKicker} titleParts={t.heroTitle} lead={t.heroLead} />

      <section className="bg-white" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="wrap">
          {t.blocks.map((b, i) => (
            <div key={i} className="metier-block">
              <div className="metier-side">
                <Reveal>
                  <span className="metier-num">{b.num}</span>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="display-m">{b.title}</h2>
                </Reveal>
                <Reveal delay={2}>
                  <p className="lead">{b.lead}</p>
                </Reveal>
              </div>
              <div className="activity-list">
                {b.activities.map((a, j) => (
                  <Reveal key={j} delay={j % 3} className="activity">
                    <span className="activity-marker" />
                    <div>
                      <h4>{a.title}</h4>
                      <p>{a.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-navy">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="display-l" style={{ margin: "0 auto" }}>
              <Em parts={t.ctaTitle} />
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ marginTop: 40 }}>
              <Link to="/contact" className="btn btn-light">
                {t.ctaBtn} <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
