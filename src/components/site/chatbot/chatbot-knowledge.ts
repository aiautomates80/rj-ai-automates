import { BRAND } from "../site-data";

export type ChatAction = { label: string; href: string };

export type ChatAnswer = {
  text: string;
  actions?: ChatAction[];
  quickReplies?: string[];
};

export const WELCOME_TEXT = `Hi! 👋 Welcome to ${BRAND.name}.

I can help you learn about our AI website design, AI automation, n8n workflows, AI agents and WhatsApp AI solutions.

What would you like to know?`;

export const QUICK_REPLIES = [
  "AI Website Design",
  "AI Automation",
  "n8n Automation",
  "AI Agents",
  "WhatsApp AI Agent",
  "Contact RJ AI Automates",
];

const CONTACT_ACTIONS: ChatAction[] = [
  { label: "💬 WhatsApp", href: BRAND.whatsapp },
  { label: "📞 Call", href: BRAND.tel },
  { label: "LinkedIn", href: BRAND.linkedin },
  { label: "Facebook", href: BRAND.facebook },
];

const FALLBACK: ChatAnswer = {
  text: `I don't have that information yet, but you can contact ${BRAND.name} directly on WhatsApp and we'll be happy to help.`,
  actions: [{ label: "💬 WhatsApp", href: BRAND.whatsapp }],
};

const INTEREST_FOLLOW_UP = "Would you like to tell me a little about your project?";

type Topic = {
  keywords: string[];
  answer: ChatAnswer;
};

const TOPICS: Topic[] = [
  {
    keywords: ["hi", "hello", "hey", "salam", "assalam", "good morning", "good evening"],
    answer: {
      text: "Hello! 😊 I'm the RJ AI Assistant. Ask me about our services, projects or how we work — or tell me what you'd like to automate.",
      quickReplies: ["What services do you provide?", "How do you work?", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["service", "what do you provide", "what do you offer", "what do you build", "offer"],
    answer: {
      text: `${BRAND.name} provides:
• AI Website Design
• AI Automation
• n8n Automation
• AI Agents
• WhatsApp AI Agents
• Custom AI Business Systems

If you'd like, I can help you choose the right solution for your business.`,
      quickReplies: ["AI Website Design", "AI Automation", "AI Agents", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["website", "web design", "web development", "landing page", "site"],
    answer: {
      text: `AI Website Design — modern, fast, conversion-focused websites with AI features built in: smart lead capture, chat-style assistants and clean, responsive design that works on every screen.

${INTEREST_FOLLOW_UP}`,
      quickReplies: ["Start a project", "See projects", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["ai automation", "automate", "automation", "repetitive", "manual work"],
    answer: {
      text: `AI Automation — we remove repetitive manual work by connecting your tools into one intelligent flow: lead capture, follow-ups, data entry, notifications and reporting run on their own.

${INTEREST_FOLLOW_UP}`,
      quickReplies: ["n8n Automation", "See projects", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["n8n", "workflow", "integration", "webhook", "api"],
    answer: {
      text: `n8n Automation — custom workflows that connect forms, APIs, CRMs, email and messaging apps. A typical flow: Website Form → Lead Captured → AI Agent → Lead Qualified → CRM Updated → WhatsApp Message → Email Notification.

${INTEREST_FOLLOW_UP}`,
      quickReplies: ["AI Agents", "How do you work?", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["agent", "chatbot", "assistant", "bot"],
    answer: {
      text: `AI Agents — assistants that answer questions, qualify leads, handle routine requests and pass the right information to your team or CRM, 24/7.

${INTEREST_FOLLOW_UP}`,
      quickReplies: ["WhatsApp AI Agent", "Start a project", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["whatsapp"],
    answer: {
      text: `WhatsApp AI Agents — reply to customers instantly on WhatsApp, answer common questions, capture enquiries and hand over to a human when needed.

You can also message ${BRAND.name} directly on WhatsApp any time.`,
      actions: [{ label: "💬 WhatsApp", href: BRAND.whatsapp }],
    },
  },
  {
    keywords: ["business system", "custom system", "crm", "dashboard", "internal"],
    answer: {
      text: `AI Business Systems — custom internal systems that bring your data, tools and AI together: dashboards, CRM syncing, content automation and reporting.

${INTEREST_FOLLOW_UP}`,
      quickReplies: ["Start a project", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["project", "work", "portfolio", "case study", "example"],
    answer: {
      text: `You can see the work in the "Selected Work" section of this page — including an AI Website Experience, a WhatsApp AI Agent, a Lead Automation System and AI Content Automation. Each one opens with the problem, solution, tools and workflow.`,
      quickReplies: ["AI Automation", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["process", "how do you work", "steps", "how it works", "timeline"],
    answer: {
      text: `The process has five steps: Discover → Design → Build → Integrate → Launch & Improve. We start by understanding the work you want to remove, then design and build the system around it.`,
      quickReplies: ["Start a project", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["tool", "tech", "stack", "technology"],
    answer: {
      text: `Tools we work with: n8n, OpenAI, AI agents, APIs, webhooks, WhatsApp, automation platforms, AI website design, CRMs, Google Workspace, email and JavaScript.`,
      quickReplies: ["n8n Automation", "Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["contact", "reach", "email", "phone", "call", "talk", "get in touch"],
    answer: {
      text: `Sure! You can contact ${BRAND.name} directly:`,
      actions: CONTACT_ACTIONS,
      quickReplies: ["Start a project"],
    },
  },
  {
    keywords: ["start a project", "hire", "quote", "interested", "work together", "get started"],
    answer: {
      text: `Great — ${INTEREST_FOLLOW_UP}

Feel free to share your name, business, the service you need, a short description and how you'd like to be contacted. You can also send it straight through WhatsApp or the contact form below.`,
      actions: [{ label: "💬 WhatsApp", href: BRAND.whatsapp }],
    },
  },
  {
    keywords: ["location", "based", "where are you", "country"],
    answer: {
      text: `${BRAND.name} is based in Pakistan and works with clients globally.`,
      quickReplies: ["Contact RJ AI Automates"],
    },
  },
  {
    keywords: ["thanks", "thank you", "great", "awesome", "ok"],
    answer: {
      text: "Happy to help! 🙌 Anything else you'd like to know?",
      quickReplies: ["What services do you provide?", "Contact RJ AI Automates"],
    },
  },
];

/**
 * Local rule-based reply engine. Used as a fallback when the n8n webhook
 * is unreachable, so the chatbot always has something helpful to say.
 */
export function getAnswer(input: string): ChatAnswer {
  const q = input.toLowerCase().trim();
  if (!q) return FALLBACK;

  let best: { score: number; answer: ChatAnswer } | null = null;
  for (const topic of TOPICS) {
    for (const kw of topic.keywords) {
      if (q.includes(kw) && (!best || kw.length > best.score)) {
        best = { score: kw.length, answer: topic.answer };
      }
    }
  }
  return best?.answer ?? FALLBACK;
}

/**
 * n8n backend — the ONLY backend endpoint for the chatbot.
 * The n8n workflow holds any AI provider keys (Gemini/OpenAI) server-side;
 * no API keys ever live in this frontend code.
 *
 * n8n Production Webhook URL.
 */
const N8N_WEBHOOK_URL: string =
  "https://aiautomates.app.n8n.cloud/webhook/9b41c6a9-5875-4aff-b55e-48aad4c14022/chat";

export const N8N_CONFIGURED =
  N8N_WEBHOOK_URL !== "YOUR_PRODUCTION_WEBHOOK_URL";

const REQUEST_TIMEOUT_MS = 30_000;

export type BackendResult =
  | { ok: true; reply: string }
  | { ok: false };

export function getSessionId(): string {
  const KEY = "rj-chat-session-id";
  try {
    let id = window.localStorage.getItem(KEY);
    if (!id) {
      id =
        typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : `rj-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      window.localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    return `rj-${Date.now()}`;
  }
}

/**
 * Send the visitor's message to the n8n webhook and return the AI reply.
 * Returns { ok: false } on any failure so the UI can show a friendly error.
 */
export async function askN8n(message: string): Promise<BackendResult> {
  if (!N8N_WEBHOOK_URL || N8N_WEBHOOK_URL === "YOUR_PRODUCTION_WEBHOOK_URL") {
    return { ok: false };
  }
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId: getSessionId() }),
      signal: controller.signal,
    });
    if (!res.ok) return { ok: false };
    const data: unknown = await res.json();
    const reply =
      typeof data === "object" && data !== null && "reply" in data
        ? String((data as { reply: unknown }).reply)
        : "";
    return reply.trim() ? { ok: true, reply } : { ok: false };
  } catch {
    return { ok: false };
  } finally {
    window.clearTimeout(timer);
  }
}

export const BACKEND_ERROR: ChatAnswer = {
  text: `Sorry, I'm having trouble reaching the assistant right now. Please try again in a moment, or message ${BRAND.name} directly on WhatsApp and we'll help you right away.`,
  actions: [{ label: "💬 WhatsApp", href: BRAND.whatsapp }],
};
