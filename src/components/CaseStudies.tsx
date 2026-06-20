import type { CaseStudy } from "../data/portfolio";

type CaseStudiesProps = {
  caseStudies: CaseStudy[];
};

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <section className="case-studies-section" id="case-studies" aria-labelledby="case-studies-title">
      <div className="section-label">Case studies</div>
      <div className="section-heading centered">
        <h2 id="case-studies-title">Automation wins you can turn into deeper case studies.</h2>
        <p>
          These are resume-backed starting points. Add screenshots, before-and-after process maps,
          client context, and richer metrics as each case study becomes publish-ready.
        </p>
      </div>
      <div className="case-study-grid">
        {caseStudies.map((study) => (
          <article className="case-card" key={study.title}>
            <div className="card-icon" aria-hidden="true">
              {study.title.slice(0, 2)}
            </div>
            <div>
              <span className="card-kicker">{study.industry}</span>
              <h3>{study.title}</h3>
            </div>
            <div className="case-copy">
              <h4>Challenge</h4>
              <p>{study.challenge}</p>
              <h4>Solution</h4>
              <p>{study.solution}</p>
            </div>
            <div className="case-impact">
              <strong>{study.impact}</strong>
              <span>{study.stack.join(" / ")}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
