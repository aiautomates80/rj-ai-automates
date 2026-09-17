import { CheckCheck, Globe, Sparkles, ArrowRight } from "lucide-react";
import type { ProjectVisual } from "./site-data";

/* ------------------------------------------------------------------ */
/* n8n-style workflow canvas                                           */
/* ------------------------------------------------------------------ */

export type WorkflowNode = { label: string; type: string; status: string };

export function WorkflowMockup({
  title,
  nodes,
}: {
  title: string;
  nodes: WorkflowNode[];
}) {
  return (
    <div className="glass-panel overflow-hidden rounded-[1.75rem]">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-destructive/70" />
          <span className="size-2.5 rounded-full bg-chart-5/70" />
          <span className="bg-whatsapp/70 size-2.5 rounded-full" />
          <span className="ml-3 font-mono text-[0.65rem] text-muted-foreground">{title}</span>
        </div>
        <span className="hidden font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase sm:block">
          Execution • Success
        </span>
      </div>

      <div
        className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.99 0 0 / 7%) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        {nodes.map((node, i) => (
          <div
            key={node.label}
            className="reveal card-hover relative rounded-2xl border border-border bg-surface/85 p-4"
            style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.56rem] tracking-[0.14em] text-muted-foreground uppercase">
                {node.type}
              </span>
              <span
                className="bg-brand-gradient animate-node size-2 rounded-full"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </div>
            <p className="mt-2.5 font-display text-sm font-semibold">{node.label}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.54rem] tracking-[0.12em] text-primary uppercase">
              {node.status}
            </p>
            {i < nodes.length - 1 ? (
              <ArrowRight
                aria-hidden="true"
                className="absolute top-1/2 -right-3 hidden size-4 -translate-y-1/2 text-primary/60 lg:block"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Browser / website mockup                                            */
/* ------------------------------------------------------------------ */

export function BrowserMockup() {
  return (
    <div className="glass-panel overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="size-2 rounded-full bg-destructive/70" />
        <span className="size-2 rounded-full bg-chart-5/70" />
        <span className="bg-whatsapp/70 size-2 rounded-full" />
        <span className="ml-3 flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-mono text-[0.58rem] text-muted-foreground">
          <Globe className="size-3" /> your-business.com
        </span>
      </div>
      <div className="space-y-3 bg-surface/60 p-5">
        <div className="bg-brand-gradient h-2 w-24 rounded-full opacity-70" />
        <div className="h-4 w-4/5 rounded bg-foreground/25" />
        <div className="h-4 w-3/5 rounded bg-foreground/15" />
        <div className="flex gap-2 pt-1">
          <div className="bg-brand-gradient h-7 w-24 rounded-lg" />
          <div className="h-7 w-24 rounded-lg border border-border" />
        </div>
        <div className="grid grid-cols-3 gap-2 pt-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-xl border border-border p-3">
              <div className="size-5 rounded-md bg-primary/30" />
              <div className="h-2 w-full rounded bg-foreground/15" />
              <div className="h-2 w-2/3 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* WhatsApp AI conversation mockup                                     */
/* ------------------------------------------------------------------ */

export function WhatsAppMockup() {
  const messages = [
    { from: "them", text: "Hi! Do you build AI agents for customer support?" },
    { from: "me", text: "Yes — I build WhatsApp AI agents that reply instantly and qualify leads." },
    { from: "them", text: "What do you need from us to start?" },
    { from: "me", text: "Your FAQs, your tools, and the actions the agent should trigger. Shall I send a short brief?" },
  ];
  return (
    <div className="glass-panel overflow-hidden rounded-2xl">
      <div className="bg-whatsapp/15 flex items-center gap-3 border-b border-border px-4 py-3">
        <span className="bg-whatsapp/30 flex size-8 items-center justify-center rounded-full">
          <Sparkles className="text-whatsapp size-4" />
        </span>
        <div>
          <p className="text-sm font-semibold">AI Assistant</p>
          <p className="font-mono text-[0.56rem] tracking-[0.14em] text-muted-foreground uppercase">
            Online • Auto-reply
          </p>
        </div>
      </div>
      <div className="space-y-2.5 bg-surface/60 p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                m.from === "me"
                  ? "bg-whatsapp/20 border-whatsapp/30 rounded-br-sm border"
                  : "rounded-bl-sm border border-border bg-surface-2"
              }`}
            >
              {m.text}
              {m.from === "me" ? (
                <CheckCheck className="text-whatsapp ml-1.5 inline size-3" />
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Automation dashboard mockup                                         */
/* ------------------------------------------------------------------ */

export function DashboardMockup() {
  const rows = [
    { name: "Research sources", state: "Completed" },
    { name: "AI draft generated", state: "Completed" },
    { name: "Awaiting approval", state: "Running" },
    { name: "Publish + archive", state: "Queued" },
  ];
  return (
    <div className="glass-panel overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="font-display text-sm font-semibold">Content Pipeline</p>
        <span className="font-mono text-[0.56rem] tracking-[0.14em] text-muted-foreground uppercase">
          Daily run
        </span>
      </div>
      <div className="space-y-2 bg-surface/60 p-4">
        {rows.map((r, i) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-xl border border-border bg-surface-2/60 px-3.5 py-2.5"
          >
            <span className="flex items-center gap-2 text-xs">
              <span
                className="bg-brand-gradient animate-node size-1.5 rounded-full"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              {r.name}
            </span>
            <span className="font-mono text-[0.54rem] tracking-[0.12em] text-primary uppercase">
              {r.state}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectVisualFor({ visual }: { visual: ProjectVisual }) {
  if (visual === "browser") return <BrowserMockup />;
  if (visual === "whatsapp") return <WhatsAppMockup />;
  if (visual === "dashboard") return <DashboardMockup />;
  return (
    <WorkflowMockup
      title="lead-automation.workflow"
      nodes={[
        { label: "Website Form", type: "Trigger", status: "Connected" },
        { label: "AI Qualification", type: "OpenAI", status: "AI Processing" },
        { label: "CRM Updated", type: "CRM", status: "Running" },
        { label: "Notifications", type: "WhatsApp", status: "Completed" },
      ]}
    />
  );
}
