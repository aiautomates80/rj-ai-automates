import {
  LayoutTemplate,
  Workflow,
  Network,
  Bot,
  MessageCircle,
  Boxes,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SERVICES, type Service } from "./site-data";

const ICONS: Record<Service["icon"], LucideIcon> = {
  layout: LayoutTemplate,
  workflow: Workflow,
  network: Network,
  bot: Bot,
  message: MessageCircle,
  boxes: Boxes,
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        label="What I Build"
        title="AI systems built around your business."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <article
              key={service.id}
              id={service.id}
              className="reveal card-hover glass-panel group relative flex scroll-mt-28 flex-col overflow-hidden rounded-3xl p-7"
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 110}ms` }}
            >
              <span
                aria-hidden="true"
                className="bg-brand-gradient pointer-events-none absolute -top-24 -right-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
              />
              <span className="glass-panel relative flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                <Icon className="size-5 text-primary" />
              </span>

              <h3 className="relative mt-6 font-display text-xl font-semibold">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="relative mt-5 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
              >
                Explore Service
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
