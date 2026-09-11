import React from "react";
import { CONTENT } from "../content.js";
import { PageHero, Reveal, Rings } from "../ui.jsx";

export default function Team({ lang }) {
  const t = CONTENT[lang].team;

  return (
    <>
      <PageHero kicker={t.heroKicker} titleParts={t.heroTitle} lead={t.heroLead} />

      <section className="section bg-white">
        <div className="wrap">
          <div className="team-grid">
            {t.members.map((m, i) => (
              <Reveal key={i} delay={i} className="member">
                <div className="member-visual">
                  <Rings stroke="rgba(168,136,58,0.25)" count={7} />
                  <span className="member-initials">{m.initials}</span>
                </div>
                <div className="member-body">
                  <h3>{m.name}</h3>
                  <div className="member-role">{m.role}</div>
                  <p className="member-bio">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
