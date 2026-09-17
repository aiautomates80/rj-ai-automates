import { SectionHeading } from "./SectionHeading";
import { FlowDiagram } from "./FlowDiagram";

export function Solution() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="bg-brand-gradient animate-aurora absolute top-1/3 left-1/2 h-[24rem] w-[52rem] -translate-x-1/2 rounded-full opacity-[0.12] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="The Solution"
          title="Turn repetitive work into intelligent systems."
          description="RJ AI Automates connects AI, websites, APIs and business workflows into systems that work automatically."
          align="center"
        />

        <div className="reveal glass-panel mt-14 rounded-[2rem] p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <p className="font-mono text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
              Automation Pipeline
            </p>
            <div className="flex flex-wrap gap-2">
              {["Connected", "Running", "AI Processing", "Completed"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[0.56rem] tracking-[0.14em] text-muted-foreground uppercase"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <FlowDiagram
            className="mt-7"
            steps={[
              { label: "Trigger", meta: "Customer message", status: "Connected" },
              { label: "AI Processing", meta: "AI agent understands intent", status: "AI Processing" },
              { label: "Automation", meta: "n8n workflow runs", status: "Running" },
              { label: "Action", meta: "CRM / WhatsApp / Email", status: "Running" },
              { label: "Result", meta: "Automated response", status: "Completed" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
