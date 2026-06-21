import { useEffect, useState } from "react";
import CapabilityIndex from "./components/CapabilityIndex";
import CaseStudies from "./components/CaseStudies";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ThemeToggle from "./components/ThemeToggle";
import {
  caseStudies,
  categories,
  contact,
  metrics,
  profile,
  projects,
  roles,
  skills,
  type CategoryId,
} from "./data/portfolio";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Automation", href: "#automation" },
  { label: "Use Cases", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("automation");

  useEffect(() => {
    if (window.location.pathname.includes("case-studies")) {
      requestAnimationFrame(() => {
        document.getElementById("case-studies")?.scrollIntoView();
      });
    }
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-mark" href="#profile" aria-label="Jonnel Esguerra home">
          <span>JE</span>
          Jonnel Esguerra
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </header>

      <main>
        <section className="hero-section" id="profile">
          <div className="hero-copy">
            <div className="hero-pill">AI Automation Solutions</div>
            <h1>
              Streamlined <span>Automation</span> For Businesses
            </h1>
            <p>{profile.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#case-studies">
                View use cases
              </a>
              <a className="button secondary" href="#contact">
                Contact me
              </a>
            </div>
          </div>

          <aside className="hero-solution-grid" aria-label="Automation solution highlights">
            {[
              ["CRM Workflow Automation", "CRM workflows, lead routing, and operational handoffs."],
              ["Workflow Automation", "n8n, Zapier, Power Platform, and API-connected operations."],
              ["AI Agents", "Decision support and AI workflow assistants grounded in process logic."],
              ["AI Staff Solutions", "Playwright automations and knowledge systems for repeatable work."],
            ].map(([title, detail]) => (
              <article className="hero-solution-card" key={title}>
                <div className="card-icon" aria-hidden="true">
                  {title.slice(0, 2)}
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </aside>
        </section>

        <section className="metric-band" aria-label="Selected automation outcomes">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
          <div>
            <strong>{profile.role}</strong>
            <span>Leader. Builder. Operator.</span>
          </div>
        </section>

        <section className="profile-strip" aria-label="Profile summary">
          <p>{profile.longSummary}</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </section>

        <CapabilityIndex
          activeCategory={activeCategory}
          categories={categories}
          onCategoryChange={setActiveCategory}
          projects={projects}
          skills={skills}
        />

        <CaseStudies caseStudies={caseStudies} />

        <ExperienceTimeline roles={roles} />

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-label">Skills matrix</div>
          <div className="split-heading">
            <h2 id="skills-title">A practical stack for messy real-world workflows.</h2>
            <p>
              The toolset covers integration, databases, production software,
              delivery practices, and documentation.
            </p>
          </div>
          <div className="skills-matrix">
            {categories.map((category) => (
              <article className="matrix-column" key={category.id}>
                <h3>
                  <span>{category.index}</span>
                  {category.label}
                </h3>
                <ul>
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <li key={skill.name}>{skill.name}</li>
                    ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div>
          <div className="section-label">Contact</div>
          <h2>Need an automation owner who can still build?</h2>
        </div>
        <address>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
          <span>{contact.location}</span>
        </address>
      </footer>
    </div>
  );
}

export default App;
