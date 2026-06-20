import { useState } from "react";
import type { Role } from "../data/portfolio";

type ExperienceTimelineProps = {
  roles: Role[];
};

export default function ExperienceTimeline({ roles }: ExperienceTimelineProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedRole = roles[selectedIndex];

  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-label">Experience</div>
      <div className="split-heading">
        <h2 id="experience-title">From production IT to automation ownership.</h2>
        <p>
          A timeline of practical software, manufacturing systems, and workflow
          automation work.
        </p>
      </div>

      <div className="timeline-grid">
        <div className="timeline-list" role="list">
          {roles.map((role, index) => (
            <button
              className={index === selectedIndex ? "timeline-row is-active" : "timeline-row"}
              key={`${role.title}-${role.period}`}
              onClick={() => setSelectedIndex(index)}
              type="button"
              role="listitem"
            >
              <span className="timeline-period">{role.period}</span>
              <span className="timeline-title">{role.title}</span>
              <span className="timeline-company">{role.company}</span>
            </button>
          ))}
        </div>

        <article className="timeline-detail">
          <div className="detail-meta">{selectedRole.period}</div>
          <h3>{selectedRole.title}</h3>
          <p className="company-line">{selectedRole.company}</p>
          <p>{selectedRole.summary}</p>
          <ul>
            {selectedRole.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
