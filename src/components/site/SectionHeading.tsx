import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="reveal eyebrow">{label}</p>
      <h2
        className="reveal mt-4 font-display text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl"
        style={{ ["--reveal-delay" as string]: "80ms" }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className="reveal mt-5 text-base leading-relaxed text-muted-foreground"
          style={{ ["--reveal-delay" as string]: "150ms" }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
