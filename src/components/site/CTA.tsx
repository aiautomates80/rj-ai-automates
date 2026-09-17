import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "./site-data";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
      <div
        aria-hidden="true"
        className="bg-brand-gradient animate-aurora absolute top-1/2 left-1/2 h-[22rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
      />

      <div className="reveal glass-panel relative mx-auto max-w-5xl rounded-[2.5rem] px-6 py-14 text-center md:px-14 md:py-20">
        <svg
          aria-hidden="true"
          viewBox="0 0 600 200"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rj-cta-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.68 0.16 256 / 0%)" />
              <stop offset="50%" stopColor="oklch(0.68 0.16 256 / 70%)" />
              <stop offset="100%" stopColor="oklch(0.65 0.18 295 / 0%)" />
            </linearGradient>
          </defs>
          {[40, 90, 140].map((y, i) => (
            <path
              key={y}
              d={`M0 ${y} C 150 ${y - 30}, 450 ${y + 30}, 600 ${y}`}
              stroke="url(#rj-cta-line)"
              fill="none"
              strokeWidth="1.2"
              className="animate-dash"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}
        </svg>

        <h2 className="relative font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
          Have a process that should be <span className="text-gradient">automated?</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-base text-muted-foreground">
          Let&apos;s turn repetitive work into an intelligent system.
        </p>
        <div className="relative mt-9 flex flex-wrap justify-center gap-3">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">
              Start a Project <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href={BRAND.tel}>
              <Phone className="size-4" /> Let&apos;s Talk
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
