import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FlowStep = {
  label: string;
  meta?: string;
  status?: string;
};

/**
 * Realistic automation-workflow visual: connected nodes with status chips.
 * Horizontal on desktop, vertical on mobile so it stays readable.
 */
export function FlowDiagram({
  steps,
  className,
  compact = false,
}: {
  steps: FlowStep[];
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-stretch gap-3 lg:flex-row lg:items-center",
        className,
      )}
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center gap-3 lg:flex-row lg:flex-1">
          <div
            className={cn(
              "card-hover glass-panel reveal w-full rounded-2xl",
              compact ? "p-3.5" : "p-4 sm:p-5",
            )}
            style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
          >
            <div className="flex items-center gap-2">
              <span
                className="bg-brand-gradient animate-node size-2 rounded-full"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <span className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground uppercase">
                {step.status ?? `Step ${String(i + 1).padStart(2, "0")}`}
              </span>
            </div>
            <p
              className={cn(
                "mt-2 font-display font-semibold",
                compact ? "text-sm" : "text-[0.95rem]",
              )}
            >
              {step.label}
            </p>
            {step.meta ? (
              <p className="mt-1 text-xs text-muted-foreground">{step.meta}</p>
            ) : null}
          </div>

          {i < steps.length - 1 ? (
            <>
              <ArrowDown className="size-4 shrink-0 text-primary/70 lg:hidden" aria-hidden="true" />
              <ArrowRight
                className="hidden size-4 shrink-0 text-primary/70 lg:block"
                aria-hidden="true"
              />
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}
