import { useEffect, useState } from "react";
import type { CaseStudy } from "../data/portfolio";

type CaseStudiesProps = {
  caseStudies: CaseStudy[];
};

const platformOrder = ["Power Automate", "n8n", "Zapier", "GoHighLevel"];

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const groupedStudies = platformOrder
    .map((platform) => ({
      platform,
      studies: caseStudies.filter((study) => study.platform === platform),
    }))
    .filter((group) => group.studies.length > 0);

  useEffect(() => {
    if (!selectedStudy) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedStudy(null);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedStudy]);

  return (
    <>
      <section className="case-studies-section" id="case-studies" aria-labelledby="case-studies-title">
        <div className="section-label">Use cases</div>
        <div className="section-heading centered">
          <h2 id="case-studies-title">Real automation use cases grouped by platform.</h2>
          <p>
            A working index of the workflows Jonnel has built across Power Automate,
            n8n, Zapier, and GoHighLevel. Details stay practical and title-derived.
          </p>
        </div>
        <div className="use-case-groups">
          {groupedStudies.map((group) => (
            <div className="use-case-group" key={group.platform}>
              <div className="use-case-platform">
                <span>{group.platform}</span>
                <strong>{group.studies.length.toString().padStart(2, "0")}</strong>
              </div>
              <div className="case-study-grid">
                {group.studies.map((study) => {
                  const canOpenWorkflow = Boolean(study.hasWorkflowDetails && study.workflowImage);

                  return (
                    <article className="case-card" key={study.title}>
                      <div className="case-card-topline">
                        <div className="case-line-icon" aria-hidden="true" />
                        <span className="case-badge">{study.industry}</span>
                      </div>
                      <h3>{study.title}</h3>
                      <p className="case-summary">{study.summary ?? study.solution}</p>
                      {study.keyResults?.length ? (
                        <div className="case-results-block">
                          <h4>Key Results:</h4>
                          <ul className="case-results">
                            {study.keyResults.slice(0, 4).map((result) => (
                              <li key={result}>{result}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="case-results-block">
                          <h4>Challenge:</h4>
                          <p>{study.challenge}</p>
                        </div>
                      )}
                      <div className="case-tag-list">
                        {study.stack.slice(0, 3).map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      {canOpenWorkflow ? (
                        <button
                          className="learn-more-link"
                          onClick={() => setSelectedStudy(study)}
                          type="button"
                        >
                          Learn more ↗
                        </button>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedStudy ? (
        <div
          aria-labelledby="workflow-modal-title"
          aria-modal="true"
          className="workflow-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedStudy(null);
            }
          }}
          role="dialog"
        >
          <div className="workflow-modal">
            <div className="workflow-modal-header">
              <div>
                <span className="section-label">Workflow overview</span>
                <h2 id="workflow-modal-title">{selectedStudy.title}</h2>
              </div>
              <button
                aria-label="Close workflow overview"
                className="workflow-modal-close"
                onClick={() => setSelectedStudy(null)}
                type="button"
              >
                ×
              </button>
            </div>
            <p className="workflow-modal-summary">{selectedStudy.summary}</p>
            {selectedStudy.workflowImage ? (
              <div className="workflow-image-frame">
                <img
                  alt={selectedStudy.workflowAlt ?? `${selectedStudy.title} workflow screenshot`}
                  src={selectedStudy.workflowImage}
                />
              </div>
            ) : null}
            <div className="workflow-modal-grid">
              <div>
                <h3>Connected systems</h3>
                <div className="system-chip-list">
                  {selectedStudy.connectedSystems?.map((system) => (
                    <span key={system}>{system}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3>High-level flow</h3>
                <ol className="workflow-steps">
                  {selectedStudy.workflowSteps?.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
