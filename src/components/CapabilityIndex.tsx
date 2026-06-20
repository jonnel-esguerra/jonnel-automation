import type { Category, CategoryId, Project, Skill } from "../data/portfolio";

type CapabilityIndexProps = {
  categories: Category[];
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
  skills: Skill[];
  projects: Project[];
};

export default function CapabilityIndex({
  categories,
  activeCategory,
  onCategoryChange,
  skills,
  projects,
}: CapabilityIndexProps) {
  const active = categories.find((category) => category.id === activeCategory) ?? categories[0];
  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);
  const filteredProjects = projects.filter((project) => project.category === activeCategory);

  return (
    <section className="capability-index" id="automation" aria-labelledby="capability-title">
      <div className="section-label">Capability index</div>
      <div className="split-heading">
        <h2 id="capability-title">A directory of the systems Jonnel builds.</h2>
        <p>
          Filter the portfolio by the kind of work you need: workflow automation, AI,
          data, tooling, or ownership.
        </p>
      </div>

      <div className="index-layout">
        <div className="category-rail" aria-label="Capability categories">
          {categories.map((category) => (
            <button
              className={category.id === activeCategory ? "category-button is-active" : "category-button"}
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              type="button"
            >
              <span>{category.index}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="capability-detail">
          <div className="detail-head">
            <span>{active.index}</span>
            <h3>{active.label}</h3>
            <p>{active.summary}</p>
          </div>

          <div className="skill-list">
            {filteredSkills.map((skill) => (
              <article className="skill-row" key={skill.name}>
                <h4>{skill.name}</h4>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>

          <div className="project-list">
            {filteredProjects.map((project) => (
              <article className="project-row" key={project.name}>
                <div>
                  <h4>{project.name}</h4>
                  <p>{project.outcome}</p>
                </div>
                <div className="stack-line">{project.stack.join(" / ")}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
