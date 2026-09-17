export const BRAND = {
  name: "RJ AI Automates",
  tagline: "Automating Work. Building Intelligence.",
  phoneLocal: "03110613196",
  phoneIntl: "+923110613196",
  whatsapp: "https://wa.me/923110613196",
  tel: "tel:+923110613196",
  facebook: "https://www.facebook.com/RJautomates",
  facebookName: "RJ Automates",
  linkedin: "https://www.linkedin.com/in/rafia-jafar-514450434/",
  linkedinName: "Rafia Jafar",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
  "AI",
  "n8n",
  "Automation",
  "AI Agents",
  "Web Design",
  "WhatsApp",
  "APIs",
  "Workflows",
];

export const PROBLEMS = [
  {
    no: "01",
    title: "Repetitive Tasks",
    body: "Hours spent on work that could be automated.",
  },
  {
    no: "02",
    title: "Slow Customer Response",
    body: "Customers expect instant answers and seamless experiences.",
  },
  {
    no: "03",
    title: "Disconnected Systems",
    body: "Your tools should work together instead of creating more manual work.",
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: "layout" | "workflow" | "network" | "bot" | "message" | "boxes";
};

export const SERVICES: Service[] = [
  {
    id: "ai-website-design",
    title: "AI Website Design",
    description:
      "Modern, conversion-focused websites designed with AI-powered experiences and intelligent interactions.",
    items: [
      "AI-powered websites",
      "Landing pages",
      "Business websites",
      "Portfolio websites",
      "Conversion-focused UI",
      "Responsive design",
    ],
    icon: "layout",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Automate repetitive business processes and connect the tools your business already uses.",
    items: [
      "Workflow automation",
      "API integrations",
      "Data automation",
      "Email automation",
      "Lead automation",
      "Business process automation",
    ],
    icon: "workflow",
  },
  {
    id: "n8n-automation",
    title: "n8n Automation",
    description:
      "Build powerful visual workflows that connect apps, APIs, AI models and business systems.",
    items: [
      "n8n workflows",
      "API integrations",
      "Webhooks",
      "Data processing",
      "CRM automation",
      "Multi-step workflows",
    ],
    icon: "network",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Intelligent AI agents that can understand requests, use tools and trigger business actions.",
    items: [
      "AI agents",
      "Customer support agents",
      "Lead qualification agents",
      "Research agents",
      "Task automation agents",
      "Tool-using AI agents",
    ],
    icon: "bot",
  },
  {
    id: "whatsapp-ai-agents",
    title: "WhatsApp AI Agents",
    description: "Turn WhatsApp into an intelligent customer communication system.",
    items: [
      "AI customer support",
      "Automated replies",
      "Lead qualification",
      "FAQ automation",
      "Appointment workflows",
      "CRM integration",
    ],
    icon: "message",
  },
  {
    id: "ai-business-systems",
    title: "AI Business Systems",
    description:
      "Connect AI and automation into complete systems designed around your workflow.",
    items: [
      "AI + automation",
      "CRM systems",
      "Lead management",
      "Internal workflows",
      "Reporting automation",
      "Custom integrations",
    ],
    icon: "boxes",
  },
];

export type ProjectVisual = "browser" | "whatsapp" | "workflow" | "dashboard";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  visual: ProjectVisual;
  overview: string;
  problem: string;
  solution: string;
  tools: string[];
  workflow: string[];
  features: string[];
  outcome: string;
};

export const PROJECTS: Project[] = [
  {
    id: "ai-website-experience",
    title: "AI Website Experience",
    category: "AI Website Design",
    description:
      "Modern AI-powered website experience designed for a business looking to present its services professionally and convert visitors into leads.",
    visual: "browser",
    overview:
      "A conversion-focused business website with an AI assistant layer that answers visitor questions and routes qualified enquiries straight into the owner's inbox.",
    problem:
      "Visitors landed on a dated site, could not quickly understand the service offering, and enquiries arrived with too little detail to act on.",
    solution:
      "A clear content structure, fast responsive front end, and an embedded AI assistant that answers service questions and collects structured project briefs.",
    tools: ["AI Website Design", "OpenAI", "APIs", "Webhooks", "JavaScript"],
    workflow: [
      "Visitor lands on site",
      "AI assistant answers questions",
      "Structured brief captured",
      "Webhook to workflow",
      "Owner notified",
    ],
    features: [
      "Conversion-focused page structure",
      "Embedded AI assistant",
      "Structured enquiry capture",
      "Fully responsive layout",
      "Accessible, fast-loading pages",
    ],
    outcome:
      "Enquiries arrive pre-qualified with the context needed to reply, and the site communicates the offer within seconds.",
  },
  {
    id: "whatsapp-ai-agent",
    title: "WhatsApp AI Agent",
    category: "AI Agent + n8n",
    description:
      "An intelligent WhatsApp automation system that can understand customer messages, respond automatically and trigger business workflows.",
    visual: "whatsapp",
    overview:
      "A WhatsApp agent that handles first-line customer conversation: answering FAQs, qualifying interest and handing complex cases to a human.",
    problem:
      "Customer messages arrived at all hours and repetitive questions consumed time that should go to real project work.",
    solution:
      "An AI agent connected to WhatsApp through an n8n workflow, with a knowledge base for FAQs, qualification logic and human handover rules.",
    tools: ["n8n", "AI Agents", "WhatsApp", "OpenAI", "CRM", "Webhooks"],
    workflow: [
      "Customer message",
      "AI agent understands intent",
      "Knowledge base lookup",
      "Reply or human handover",
      "CRM record updated",
    ],
    features: [
      "Natural conversation handling",
      "FAQ and pricing answers",
      "Lead qualification questions",
      "Appointment request flow",
      "Human handover with full context",
    ],
    outcome:
      "Customers get instant answers around the clock while every qualified conversation is logged for follow-up.",
  },
  {
    id: "lead-automation-system",
    title: "Lead Automation System",
    category: "n8n Automation",
    description:
      "Automated lead capture, AI qualification, notifications and CRM workflow.",
    visual: "workflow",
    overview:
      "An end-to-end lead pipeline: a website form triggers an n8n workflow that scores the lead with AI, updates the CRM and notifies the team.",
    problem:
      "Leads were copied between a form inbox, a spreadsheet and a CRM by hand, so follow-up was slow and inconsistent.",
    solution:
      "A single n8n workflow that captures the form submission, enriches and scores it with an AI step, then fans out to CRM, WhatsApp and email.",
    tools: ["n8n", "Webhooks", "OpenAI", "CRM", "Google Workspace", "Email"],
    workflow: [
      "Website form",
      "Lead captured",
      "AI qualification",
      "CRM updated",
      "WhatsApp + email notification",
    ],
    features: [
      "Webhook lead capture",
      "AI scoring and summary",
      "Automatic CRM records",
      "Instant team notifications",
      "Error handling and retries",
    ],
    outcome:
      "Every lead is qualified and routed within seconds of submission, with no manual copying between tools.",
  },
  {
    id: "ai-content-automation",
    title: "AI Content Automation",
    category: "AI Automation",
    description:
      "An automated content workflow connecting AI, APIs and publishing processes.",
    visual: "dashboard",
    overview:
      "A content production pipeline where research, drafting, review and publishing run as scheduled automated steps with a human approval gate.",
    problem:
      "Content production stalled because research, writing and publishing lived in separate tools with manual handoffs.",
    solution:
      "A scheduled workflow that gathers sources, drafts with AI against a brand brief, queues drafts for approval and publishes on approval.",
    tools: ["AI Automation", "OpenAI", "APIs", "n8n", "Google Workspace"],
    workflow: [
      "Scheduled trigger",
      "Research and sources",
      "AI draft generation",
      "Human approval",
      "Publish and archive",
    ],
    features: [
      "Scheduled content runs",
      "Brand-brief prompting",
      "Approval queue dashboard",
      "Multi-channel publishing",
      "Run history and logs",
    ],
    outcome:
      "Content moves from idea to published on a predictable schedule while a person still approves every piece.",
  },
];

export const TOOLS = [
  "n8n",
  "OpenAI",
  "AI Agents",
  "APIs",
  "Webhooks",
  "WhatsApp",
  "Automation",
  "AI Website Design",
  "CRM",
  "Google Workspace",
  "Email",
  "JavaScript",
];

export const PROCESS = [
  {
    no: "01",
    title: "Discover",
    body: "Understand your business, workflow and goals.",
  },
  {
    no: "02",
    title: "Design",
    body: "Plan the user experience, automation logic and system architecture.",
  },
  {
    no: "03",
    title: "Build",
    body: "Build the website, AI agent or automation workflow.",
  },
  {
    no: "04",
    title: "Integrate",
    body: "Connect APIs, apps, databases and communication channels.",
  },
  {
    no: "05",
    title: "Launch & Improve",
    body: "Test, launch and continuously improve the system.",
  },
];

export const WHY = [
  {
    no: "01",
    title: "Business-first thinking",
    body: "Automation should solve a real business problem.",
  },
  {
    no: "02",
    title: "Human-friendly experiences",
    body: "Technology should make work easier, not more complicated.",
  },
  {
    no: "03",
    title: "Connected systems",
    body: "AI becomes more powerful when your tools work together.",
  },
  {
    no: "04",
    title: "Built to scale",
    body: "Create systems that can grow with your business.",
  },
];

export const NEED_OPTIONS = [
  "AI Website Design",
  "AI Automation",
  "n8n Workflow",
  "AI Agent",
  "WhatsApp AI Agent",
  "Custom AI System",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];
