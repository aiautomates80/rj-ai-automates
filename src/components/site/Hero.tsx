import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "./HeroVisual";
import { MARQUEE_ITEMS } from "./site-data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-8 md:pt-40">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
      <div
        aria-hidden="true"
        className="bg-brand-gradient animate-aurora absolute -top-40 left-1/2 h-[28rem] w-[46rem] -translate-x-1/2 rounded-full opacity-[0.16] blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="reveal glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="bg-whatsapp size-1.5 rounded-full" />
            <span className="font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase sm:text-[0.68rem]">
              AI Automation • AI Agents • n8n • AI Web Design
            </span>
          </span>

          <h1 className="reveal mt-7 font-display text-[2.6rem] leading-[1.03] font-extrabold sm:text-6xl lg:text-[4.25rem]">
            AI solutions that
            <br />
            <span className="text-gradient">automate the work.</span>
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            I design intelligent websites, AI agents and automated workflows that help
            businesses work smarter, respond faster, and scale with less manual effort.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap gap-3"
            style={{ ["--reveal-delay" as string]: "220ms" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Start a Project <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#projects">
                <Play className="size-4" /> View My Work
              </a>
            </Button>
          </div>
        </div>

        <div className="reveal" style={{ ["--reveal-delay" as string]: "180ms" }}>
          <HeroVisual />
        </div>
      </div>

      <TechStrip />
    </section>
  );
}

function TechStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative mt-20 border-y border-border py-6">
      <p className="mb-4 text-center font-mono text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
        Building with
      </p>
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <ul className="animate-marquee flex w-max items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="font-display text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground sm:text-2xl"
            >
              {item}
              <span className="ml-10 text-primary/50">/</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
