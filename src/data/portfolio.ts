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
  platform: string;
  title: string;
  industry: string;
  summary?: string;
  challenge: string;
  solution: string;
  impact: string;
  keyResults?: string[];
  connectedSystems?: string[];
  workflowSteps?: string[];
  workflowImage?: string;
  workflowAlt?: string;
  hasWorkflowDetails?: boolean;
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
    "Transform messy operations into reliable workflows with AI agents, CRM automation, workflow platforms, and production-grade systems thinking.",
  longSummary:
    "Self-directed Automation Solutions Lead with 14+ years of experience designing end-to-end automation across business operations and manufacturing environments. Combines C#, .NET, SQL, Python, n8n, Zapier, Power Platform, Playwright, GoHighLevel, Karbon, API/webhooks, OpenAI chatbot development, and Coda knowledge systems to move work from manual handoffs to dependable workflows.",
};

export const contact = {
  email: "jonnelcesguerra@gmail.com",
  phone: "+63 915 353 6899",
  location: "Tarlac City, Philippines",
};

export const metrics = [
  {
    value: "Up to 70%",
    label: "manual task reduction",
  },
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
    summary: "n8n, Zapier, Power Platform, Playwright, GoHighLevel, Karbon, and API/webhooks.",
  },
  {
    id: "ai",
    label: "AI Agents",
    index: "B",
    summary: "OpenAI chatbot development, AI workflow agents, and decision automation.",
  },
  {
    id: "databases",
    label: "Databases",
    index: "C",
    summary: "SQL Server, Oracle, PostgreSQL, Supabase, data accuracy, traceability.",
  },
  {
    id: "tools",
    label: "Tools",
    index: "D",
    summary: "Visual Studio, Codex, GitHub, Jenkins, Bitbucket, Postman, Tableau, Looker Studio, Confluence, Jira.",
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
  { name: "GoHighLevel", category: "automation", detail: "CRM automation, agency and sub-account setup, calendars, email, phone, forms, and lead workflows." },
  { name: "Karbon", category: "automation", detail: "Practice management automation for accounting team workflows." },
  { name: "API Integration & Webhooks", category: "automation", detail: "System-to-system workflow connections using API triggers, payloads, and webhooks." },
  { name: "AI Agents", category: "ai", detail: "Workflow assistants that turn known process logic into guided actions." },
  { name: "OpenAI Chatbot Development", category: "ai", detail: "Chatbot development for guided workflow support and AI-enabled operations." },
  { name: "Decision Automation", category: "ai", detail: "Rule-driven and AI-assisted routing for business operations." },
  { name: "Knowledge Systems", category: "ai", detail: "Coda-based SOP, how-to, and troubleshooting hubs." },
  { name: "SQL Server", category: "databases", detail: "Production data, reporting, and manufacturing IT support." },
  { name: "Oracle", category: "databases", detail: "Enterprise data environment experience." },
  { name: "PostgreSQL", category: "databases", detail: "Relational data modeling and workflow storage." },
  { name: "Supabase", category: "databases", detail: "Database-backed workflow support and application data storage." },
  { name: "C# / .NET Core", category: "tools", detail: "Enterprise-level applications and production IT tooling." },
  { name: "Python", category: "tools", detail: "Automation utilities, data processing, and scripting." },
  { name: "Java", category: "tools", detail: "Programming background across enterprise and production software contexts." },
  { name: "JavaScript", category: "tools", detail: "Browser and workflow automation interfaces." },
  { name: "Codex", category: "tools", detail: "AI-assisted development workflow for building, testing, and refining portfolio and automation code." },
  { name: "GitHub", category: "tools", detail: "Source control, repository publishing, and project collaboration." },
  { name: "Coda", category: "tools", detail: "Knowledge base structure for team process standardization." },
  { name: "Confluence", category: "tools", detail: "Team documentation and operational knowledge sharing." },
  { name: "Jira", category: "tools", detail: "Delivery tracking and workflow coordination." },
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
      "Designs and implements workflow automations as the sole automation owner, reducing manual tasks up to 70%.",
      "Implemented GoHighLevel CRM from scratch, including agency and sub-account setup, calendars, email, phone, CRM automations, and forms.",
      "Builds and manages Coda knowledge base automations, AI agents, dashboards, SOPs, how-to guides, and troubleshooting documentation.",
      "Owns automation strategy, development, governance, process analysis, and system integration.",
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
    name: "Cross-platform workflow automations",
    category: "automation",
    outcome:
      "Integrated n8n, Zapier, Power Platform, API/webhook, GoHighLevel, and Karbon workflows connecting business apps and operational handoffs.",
    stack: ["n8n", "Zapier", "Power Platform", "GoHighLevel", "Karbon"],
  },
  {
    name: "CRM and practice management systems",
    category: "automation",
    outcome:
      "GoHighLevel CRM and Karbon practice management automations for bookings, client workflows, and operational follow-through.",
    stack: ["GoHighLevel", "Karbon", "CRM automation"],
  },
  {
    name: "OpenAI chatbot and AI agents",
    category: "ai",
    outcome:
      "AI-enabled workflow assistants and chatbot experiences grounded in team process knowledge.",
    stack: ["OpenAI", "AI agents", "Workflow design"],
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
    platform: "Power Automate",
    title: "TSM ITR Doc Email Automation",
    industry: "Document workflow",
    summary:
      "Automates delivery of essential tax return documents to clients, triggered from a Microsoft Teams request and routed through Karbon, SharePoint, and Outlook.",
    challenge:
      "Manual tax document searching, email composing, attachment validation, and template switching created time, compliance, and error risk.",
    solution:
      "Built a Power Automate workflow that looks up the client in Karbon, retrieves the correct SharePoint files, verifies required PDFs, selects the right email template, and sends the package through Outlook.",
    impact: "Document delivery standardized with stronger auditability and fewer package mistakes.",
    keyResults: [
      "Eliminates manual searching, composing, and attachment handling.",
      "Sends the right documents with standardized naming and content.",
      "Maintains an auditable record of what was sent, to whom, and when.",
      "Reduces risk of incomplete packages or confidential documents being sent by mistake.",
    ],
    connectedSystems: ["SharePoint", "Microsoft Teams", "Microsoft Lists", "Outlook", "Karbon"],
    workflowSteps: [
      "Trigger from a Microsoft Teams request containing client and tax-return context.",
      "Look up the client record in Karbon using the submitted client details.",
      "Retrieve relevant files from the client folder in SharePoint.",
      "Filter for required tax return, tax estimate, and tax invoice PDFs.",
      "Verify that required files are present before the email is prepared.",
      "Select the payable or refundable email template based on the request flag.",
      "Send the email with the required attachments through Outlook.",
      "Notify the automation error log if any required step fails.",
    ],
    workflowImage: "/workflows/tsm-itr-doc-email-automation.png",
    workflowAlt: "Power Automate workflow showing Karbon lookup, JSON parsing, SharePoint file filtering, and Teams error handling branches for TSM ITR document email automation.",
    hasWorkflowDetails: true,
    stack: ["Power Automate", "Teams", "Karbon", "SharePoint", "Outlook"],
  },
  {
    platform: "Power Automate",
    title: "TSM Client Folder Automation",
    industry: "Client operations",
    summary:
      "Captures booking information, records it in SharePoint, and supports downstream folder, workbook, and notification handoffs.",
    challenge:
      "Booking and client folder setup required manual data capture, SharePoint updates, workbook population, and notification handoffs.",
    solution:
      "Built a Power Automate flow that validates booking fields, creates or updates SharePoint records, supports Excel workpaper/log updates, and notifies the team when human follow-up is needed.",
    impact: "Booking records and client folder preparation became more traceable, consistent, and ready for downstream automation.",
    keyResults: [
      "Creates a single, consistent place for booking records in SharePoint.",
      "Reduces copy/paste work, errors, and turnaround time.",
      "Improves operational visibility through optional Microsoft Teams notifications.",
      "Creates a foundation for task creation, client communications, and filing workflows.",
    ],
    connectedSystems: ["SharePoint", "Microsoft Teams", "Microsoft Lists", "Excel Online", "Karbon"],
    workflowSteps: [
      "Trigger when a new booking is submitted or created.",
      "Validate and normalize booking fields such as client name, email, date, time, and service type.",
      "Create or update the SharePoint item or folder metadata representing the booking.",
      "Optionally append booking details to an Excel log or ITR workpaper.",
      "Notify the relevant channel or owner when a manual next step is needed.",
      "Log details and notify an owner if a workflow step fails.",
    ],
    workflowImage: "/workflows/tsm-client-folder-automation.png",
    workflowAlt: "Power Automate workflow showing booking validation, new-client and returning-client branches, SharePoint folder handling, Excel updates, and Teams notifications.",
    hasWorkflowDetails: true,
    stack: ["Power Automate", "SharePoint", "Excel Online", "Teams", "Karbon"],
  },
  {
    platform: "Power Automate",
    title: "ARS/TSM SharePoint Inspiration Post Automation",
    industry: "Content operations",
    summary:
      "Automates scheduled Teams channel posts by pulling templates from Microsoft Lists, rotating assigned team members, and updating future reminder dates.",
    challenge:
      "Scheduled Teams inspiration posts required recurring manual scheduling, roster rotation, message assembly, and reminder tracking.",
    solution:
      "Built a recurring Power Automate workflow that retrieves team members and post templates, randomizes assignments, calculates dates, builds Teams messages, posts to the right channel, and updates the next post date.",
    impact: "Recurring channel posts became more consistent, fair, and easier to maintain.",
    keyResults: [
      "Creates one consistent source for Teams channel post templates.",
      "Reduces manual copy/paste and schedule calculation.",
      "Randomly rotates team members to make assignment fair and less predictable.",
      "Supports multiple post types, including daily inspiration and wellness posts.",
    ],
    connectedSystems: ["Microsoft SharePoint / Microsoft Lists", "Microsoft Teams", "Office 365 Users", "Power Automate"],
    workflowSteps: [
      "Run on a recurrence schedule.",
      "Fetch the team roster and active post templates.",
      "Randomize team-member order for fair assignment rotation.",
      "Calculate assignment dates and build the team-member list.",
      "Generate Teams mention tokens for assigned members.",
      "Build the final message from the title, post message, team list, and closing message.",
      "Branch between wellness and daily post workflows.",
      "Post the final message to the selected Microsoft Teams channel.",
      "Update the post template with the next scheduled post date.",
    ],
    workflowImage: "/workflows/sharepoint-inspiration-post-automation.png",
    workflowAlt: "Power Automate workflow showing roster setup, randomized team-member loop, final message generation, wellness and daily post branches, and Microsoft Teams posting.",
    hasWorkflowDetails: true,
    stack: ["Power Automate", "SharePoint", "Microsoft Lists", "Teams"],
  },
  {
    platform: "n8n",
    title: "ARS Onefile Invoice Automation",
    industry: "Finance operations",
    challenge:
      "Invoice handling in Onefile needed a more reliable workflow path with fewer manual touchpoints.",
    solution:
      "Used n8n to orchestrate invoice-related steps and route the work through a defined automation flow.",
    impact: "Invoice processing steps moved toward a repeatable workflow.",
    stack: ["n8n", "Onefile", "Invoice workflow"],
  },
  {
    platform: "n8n",
    title: "TSM Client Bday Milestone Automation",
    industry: "Client engagement",
    challenge:
      "Client birthday and milestone moments needed timely follow-up without relying on memory or manual checks.",
    solution:
      "Built an n8n workflow to trigger client milestone actions from structured client data.",
    impact: "Client milestone follow-up made easier to run consistently.",
    stack: ["n8n", "Client data", "Milestones"],
  },
  {
    platform: "n8n",
    title: "ARS Client BAS Health Report Automation",
    industry: "Reporting operations",
    challenge:
      "BAS health report preparation required structured client data handling and repeatable reporting steps.",
    solution:
      "Used n8n to coordinate report preparation steps and support consistent client reporting workflows.",
    impact: "Report preparation organized into a more dependable automation flow.",
    stack: ["n8n", "Reporting", "Client operations"],
  },
  {
    platform: "n8n",
    title: "ARS/TSM Knowledge Base AI Agent",
    industry: "Knowledge operations",
    challenge:
      "Team knowledge needed to be easier to search, reuse, and apply across SOPs and troubleshooting.",
    solution:
      "Built an AI agent workflow connected to the knowledge base so team information can support guided answers.",
    impact: "Knowledge access improved through an AI-assisted workflow.",
    stack: ["n8n", "AI agent", "Knowledge base"],
  },
  {
    platform: "Zapier",
    title: "TSM Client Booking Appointment Automation",
    industry: "Scheduling operations",
    challenge:
      "Client booking steps needed consistent appointment handling across connected business tools.",
    solution:
      "Used Zapier to connect booking triggers with downstream appointment and client workflow steps.",
    impact: "Booking handoffs made simpler and more repeatable.",
    stack: ["Zapier", "Appointments", "Client workflow"],
  },
  {
    platform: "Zapier",
    title: "ARS/TSM Leave Management Automation",
    industry: "Team operations",
    challenge:
      "Leave management needed cleaner routing and fewer manual status updates across the team.",
    solution:
      "Built a Zapier workflow to connect leave-related events with team process updates.",
    impact: "Leave workflow updates moved into a more consistent automation path.",
    stack: ["Zapier", "Leave management", "Operations"],
  },
  {
    platform: "Zapier",
    title: "ARS/TSM Incoming Score Calls Automation",
    industry: "Call operations",
    challenge:
      "Incoming score call handling needed structured follow-through after calls entered the workflow.",
    solution:
      "Used Zapier to route incoming score call activity into the relevant operational steps.",
    impact: "Call-related follow-up made more traceable and repeatable.",
    stack: ["Zapier", "Calls", "Workflow routing"],
  },
  {
    platform: "GoHighLevel",
    title: "ARS Booking Appointment Automation",
    industry: "CRM operations",
    challenge:
      "ARS booking workflows needed integrated appointment handling inside the CRM process.",
    solution:
      "Configured GoHighLevel booking automation around calendar, CRM, and communication touchpoints.",
    impact: "Booking activity organized inside the CRM automation workflow.",
    stack: ["GoHighLevel", "Calendar", "CRM automation"],
  },
  {
    platform: "GoHighLevel",
    title: "TSM Booking Appointment Automation",
    industry: "CRM operations",
    challenge:
      "TSM booking workflows needed reliable appointment automation without disconnected manual steps.",
    solution:
      "Configured GoHighLevel booking automation to support appointment scheduling and follow-up.",
    impact: "Appointment workflows made more structured inside GoHighLevel.",
    stack: ["GoHighLevel", "Appointments", "CRM automation"],
  },
];

export const promptAnswers: PromptAnswer[] = [
  {
    prompt: "What automations has Jonnel built?",
    keywords: ["automation", "built", "workflow", "n8n", "zapier", "power", "playwright"],
    answer:
      "Jonnel builds browser automations with Playwright, cross-platform workflows with n8n, Zapier, Power Platform, GoHighLevel, Karbon, API/webhooks, plus production IT automation for manufacturing operations. The practical theme: fewer manual handoffs, cleaner data, and workflows that keep running after launch.",
  },
  {
    prompt: "Show Playwright experience",
    keywords: ["playwright", "browser", "web", "testing"],
    answer:
      "In his Automation Solutions Lead role, Jonnel delivers reliable Playwright-based web automations from design to deployment. Think repeatable browser work turned into predictable systems instead of someone clicking through the same process every day.",
  },
  {
    prompt: "Summarize leadership impact",
    keywords: ["leadership", "impact", "metrics", "cost", "yield", "availability", "70%"],
    answer:
      "The headline impact: sole automation owner at Accountant Ready Services, manual tasks reduced up to 70%, $1.5M cost avoidance and 0.5% yield improvement at onsemi, and 99.92% IT services availability while supporting CIM/MOS operations. Strong mix of hands-on building and operational ownership.",
  },
  {
    prompt: "What is his AI workflow experience?",
    keywords: ["ai", "agent", "agents", "decision", "knowledge", "openai", "chatbot"],
    answer:
      "Jonnel has experience building AI-driven workflow agents, OpenAI chatbot development, decision automation patterns, and Coda-based knowledge systems. His AI work is grounded in real process design, not demo-only chatbot theater.",
  },
  {
    prompt: "Which stack does he use?",
    keywords: ["stack", "skills", "tools", "programming", "database", "supabase", "confluence", "jira"],
    answer:
      "Core stack: n8n, Zapier, Power Platform, Playwright, GoHighLevel, Karbon, API/webhooks, OpenAI chatbot development, C#, .NET Core, Python, Java, JavaScript, SQL Server, Oracle, PostgreSQL, Supabase, Coda, Confluence, Jira, Git, Jenkins, Bitbucket, Postman, Tableau, and Looker Studio.",
  },
  {
    prompt: "Show CRM and practice automation",
    keywords: ["crm", "gohighlevel", "go high level", "karbon", "booking", "appointment", "calendar"],
    answer:
      "Jonnel implemented GoHighLevel CRM from scratch, covering agency and sub-account setup, calendar, email, phone, CRM automations, and forms. He also works with Karbon practice management automation for accounting operations and client workflow follow-through.",
  },
  {
    prompt: "Which use cases are in the portfolio?",
    keywords: ["use case", "case", "sharepoint", "onefile", "bas", "score", "leave", "knowledge base"],
    answer:
      "Current use cases include Power Automate workflows for ITR docs, client folders, and SharePoint posts; n8n workflows for Onefile invoices, birthday milestones, BAS health reports, and a Knowledge Base AI Agent; Zapier flows for bookings, leave management, and incoming score calls; plus GoHighLevel booking automations for ARS and TSM.",
  },
];
