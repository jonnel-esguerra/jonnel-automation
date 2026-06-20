export type CategoryId = "automation" | "ai" | "databases" | "tools" | "leadership";

export type Category = {
  id: CategoryId;
  label: string;
  index: string;
  summary: string;
};

export type Skill = {
  name: string;
  category: CategoryId;
  detail: string;
};

export type Role = {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Project = {
  name: string;
  category: CategoryId;
  outcome: string;
  stack: string[];
};

export type CaseStudy = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  impact: string;
  stack: string[];
};

export type PromptAnswer = {
  prompt: string;
  keywords: string[];
  answer: string;
};

export const profile = {
  name: "Jonnel Esguerra",
  role: "Automation Solutions Lead",
  headline: "Streamlined automation for businesses",
  summary:
    "Transform messy operations into reliable workflows with AI agents, browser automation, workflow platforms, and production-grade systems thinking.",
  longSummary:
    "Self-directed Automation Solutions Lead designing end-to-end automation across business operations and manufacturing environments. Combines C#, .NET, SQL, Python, n8n, Zapier, Power Platform, Playwright, and Coda knowledge systems to move work from manual handoffs to dependable workflows.",
};

export const contact = {
  email: "jonnelcesguerra@gmail.com",
  phone: "+63 915 353 6899",
  location: "Tarlac City, Philippines",
};

export const metrics = [
  {
    value: "$1.5M",
    label: "cost avoidance",
  },
  {
    value: "0.5%",
    label: "yield improvement",
  },
  {
    value: "99.92%",
    label: "IT services availability",
  },
];

export const categories: Category[] = [
  {
    id: "automation",
    label: "Automation",
    index: "A",
    summary: "n8n, Zapier, Power Platform, Playwright, process integration.",
  },
  {
    id: "ai",
    label: "AI Agents",
    index: "B",
    summary: "AI-driven workflow agents and decision automation.",
  },
  {
    id: "databases",
    label: "Databases",
    index: "C",
    summary: "SQL Server, Oracle, PostgreSQL, data accuracy, traceability.",
  },
  {
    id: "tools",
    label: "Tools",
    index: "D",
    summary: "Visual Studio, Git, Jenkins, Bitbucket, Postman, Tableau, Looker Studio.",
  },
  {
    id: "leadership",
    label: "Leadership",
    index: "E",
    summary: "Automation strategy, documentation, end-to-end ownership, delivery governance.",
  },
];

export const skills: Skill[] = [
  { name: "n8n", category: "automation", detail: "Workflow orchestration and cross-platform automations." },
  { name: "Zapier", category: "automation", detail: "Business app integrations and repeatable trigger/action flows." },
  { name: "Power Platform", category: "automation", detail: "Power Automate workflows for operations teams." },
  { name: "Playwright", category: "automation", detail: "Reliable browser automation for web processes." },
  { name: "AI Agents", category: "ai", detail: "Workflow assistants that turn known process logic into guided actions." },
  { name: "Decision Automation", category: "ai", detail: "Rule-driven and AI-assisted routing for business operations." },
  { name: "Knowledge Systems", category: "ai", detail: "Coda-based SOP, how-to, and troubleshooting hubs." },
  { name: "SQL Server", category: "databases", detail: "Production data, reporting, and manufacturing IT support." },
  { name: "Oracle", category: "databases", detail: "Enterprise data environment experience." },
  { name: "PostgreSQL", category: "databases", detail: "Relational data modeling and workflow storage." },
  { name: "C# / .NET Core", category: "tools", detail: "Enterprise-level applications and production IT tooling." },
  { name: "Python", category: "tools", detail: "Automation utilities, data processing, and scripting." },
  { name: "JavaScript", category: "tools", detail: "Browser and workflow automation interfaces." },
  { name: "Coda", category: "tools", detail: "Knowledge base structure for team process standardization." },
  { name: "End-to-end ownership", category: "leadership", detail: "Sole automation owner from process analysis to deployment." },
  { name: "Process optimization", category: "leadership", detail: "Improving efficiency, traceability, and reliability across systems." },
  { name: "Continuous delivery", category: "leadership", detail: "Delivery discipline across production software and automation." },
  { name: "Documentation", category: "leadership", detail: "SOPs, how-to guides, and troubleshooting systems." },
];

export const roles: Role[] = [
  {
    title: "Automation Solutions Lead",
    company: "Accountant Ready Services",
    period: "2025 - Present",
    summary:
      "Leads end-to-end automation as the sole automation owner, moving workflows from design to deployment.",
    highlights: [
      "Delivers Playwright-based web automations for repeatable business processes.",
      "Builds scalable workflows using n8n, Power Platform, and Zapier.",
      "Maintains a Coda knowledge base for SOPs, how-to guides, and troubleshooting documentation.",
    ],
  },
  {
    title: "Analyst Developer",
    company: "onsemi",
    period: "2023 - 2024",
    summary:
      "Delivered automation and software solutions for global semiconductor projects.",
    highlights: [
      "Supported Buchoen Probing Standardization and Niigata Transfer initiatives.",
      "Designed enterprise applications using C# and .NET Core.",
      "Contributed to $1.5M cost avoidance and 0.5% yield improvement across transferred product lines.",
    ],
  },
  {
    title: "Senior MOS/CIM Automation Engineer",
    company: "ON Semiconductor",
    period: "2018 - 2023",
    summary:
      "Owned key local IT automation solutions for production process efficiency and data accuracy.",
    highlights: [
      "Developed and maintained automation solutions for manufacturing operations.",
      "Integrated IT automation to streamline operations and improve data accuracy.",
      "Maintained 99.92% IT services availability while supporting CIM/MOS operations.",
    ],
  },
  {
    title: "MOS/CIM MES Engineer",
    company: "ON Semiconductor",
    period: "2015 - 2018",
    summary:
      "Implemented manufacturing application solutions and supported MES systems.",
    highlights: [
      "Recognized as Employee of the Quarter for manufacturing application delivery.",
      "Supported MES solutions that improved manufacturing efficiency and quality.",
      "Collaborated with IT and production teams to implement MES improvements.",
    ],
  },
  {
    title: "IT Systems Engineer",
    company: "Sanyo Semiconductor Manufacturing Philippines",
    period: "2012 - 2015",
    summary:
      "Developed and maintained production IT solutions for process visibility and efficiency.",
    highlights: [
      "Supported Inventory Integration Solution (IMLite).",
      "Improved traceability and system reliability in production environments.",
    ],
  },
  {
    title: "Jr. IT Systems Engineer",
    company: "Sanyo Semiconductor Manufacturing Philippines",
    period: "2011 - 2012",
    summary:
      "Supported testing, debugging, and documentation for production software applications.",
    highlights: [
      "Assisted production software validation and debugging.",
      "Documented application behavior for operational continuity.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Browser automation workflows",
    category: "automation",
    outcome:
      "Playwright-based web automations that reduce manual browser work and standardize repeatable tasks.",
    stack: ["Playwright", "JavaScript", "Process design"],
  },
  {
    name: "Cross-platform workflow fabric",
    category: "automation",
    outcome:
      "Integrated n8n, Zapier, and Power Platform workflows connecting business apps and operational handoffs.",
    stack: ["n8n", "Zapier", "Power Platform"],
  },
  {
    name: "Coda knowledge base",
    category: "ai",
    outcome:
      "Structured SOPs, how-to guides, and troubleshooting docs that scale organizational learning.",
    stack: ["Coda", "Documentation", "Knowledge systems"],
  },
  {
    name: "Manufacturing systems modernization",
    category: "databases",
    outcome:
      "Production IT solutions improving traceability, data accuracy, process visibility, and reliability.",
    stack: ["C#", ".NET Core", "SQL", "MES"],
  },
  {
    name: "Global semiconductor transfer support",
    category: "leadership",
    outcome:
      "$1.5M cost avoidance and 0.5% yield improvement across transferred product lines.",
    stack: ["Project delivery", "Automation strategy", "Cross-functional leadership"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Global semiconductor transfer support",
    industry: "Manufacturing IT",
    challenge:
      "Transferred product lines needed consistent process visibility, reliable data, and cross-functional execution across global teams.",
    solution:
      "Delivered automation and software solutions using C#, .NET Core, SQL, and manufacturing systems experience to support standardization and transfer activity.",
    impact: "$1.5M cost avoidance and 0.5% yield improvement.",
    stack: ["C#", ".NET Core", "SQL", "MES"],
  },
  {
    title: "Production automation reliability",
    industry: "Semiconductor operations",
    challenge:
      "Production teams needed dependable local IT automation, better data accuracy, and strong operational availability.",
    solution:
      "Built and maintained MOS/CIM automation solutions, integrated IT workflows, and supported production process improvements.",
    impact: "Maintained 99.92% IT services availability.",
    stack: ["CIM", "MOS", "Automation", "SQL"],
  },
  {
    title: "Browser workflow automation",
    industry: "Business operations",
    challenge:
      "Manual web processes created repeat work, avoidable variation, and time lost to browser-based tasks.",
    solution:
      "Designed and deployed Playwright-based automations with supporting workflow logic and documentation.",
    impact: "Repeatable browser work converted into reliable operational workflows.",
    stack: ["Playwright", "JavaScript", "Process design"],
  },
  {
    title: "Coda knowledge operations hub",
    industry: "Team operations",
    challenge:
      "SOPs, how-to guides, and troubleshooting knowledge needed one structured home for reuse and onboarding.",
    solution:
      "Organized a Coda knowledge base around process standardization, support docs, and operational learning.",
    impact: "A living knowledge system that scales team execution.",
    stack: ["Coda", "Documentation", "Knowledge systems"],
  },
];

export const promptAnswers: PromptAnswer[] = [
  {
    prompt: "What automations has Jonnel built?",
    keywords: ["automation", "built", "workflow", "n8n", "zapier", "power", "playwright"],
    answer:
      "Jonnel builds browser automations with Playwright, cross-platform workflows with n8n, Zapier, and Power Platform, plus production IT automation for manufacturing operations. The practical theme: fewer manual handoffs, cleaner data, and workflows that keep running after launch.",
  },
  {
    prompt: "Show Playwright experience",
    keywords: ["playwright", "browser", "web", "testing"],
    answer:
      "In his Automation Solutions Lead role, Jonnel delivers reliable Playwright-based web automations from design to deployment. Think repeatable browser work turned into predictable systems instead of someone clicking through the same process every day.",
  },
  {
    prompt: "Summarize leadership impact",
    keywords: ["leadership", "impact", "metrics", "cost", "yield", "availability"],
    answer:
      "The headline impact: sole automation owner at Accountant Ready Services, $1.5M cost avoidance and 0.5% yield improvement at onsemi, and 99.92% IT services availability while supporting CIM/MOS operations. Strong mix of hands-on building and operational ownership.",
  },
  {
    prompt: "What is his AI workflow experience?",
    keywords: ["ai", "agent", "agents", "decision", "knowledge"],
    answer:
      "Jonnel has experience building AI-driven workflow agents, decision automation patterns, and Coda-based knowledge systems. His AI work is grounded in real process design, not demo-only chatbot theater.",
  },
  {
    prompt: "Which stack does he use?",
    keywords: ["stack", "skills", "tools", "programming", "database"],
    answer:
      "Core stack: n8n, Zapier, Power Platform, Playwright, C#, .NET Core, Python, JavaScript, SQL Server, Oracle, PostgreSQL, Coda, Git, Jenkins, Bitbucket, Postman, Tableau, and Looker Studio.",
  },
];
