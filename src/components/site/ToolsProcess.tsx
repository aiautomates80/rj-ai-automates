import { SectionHeading } from "./SectionHeading";
import { TOOLS, PROCESS, WHY } from "./site-data";
import { Star } from "lucide-react";

export function Tools() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
      <SectionHeading label="Tools I Work With" title="The stack behind the systems." align="center" />
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {TOOLS.map((tool, i) => (
          <li
            key={tool}
            className="reveal card-hover glass-panel flex items-center justify-center rounded-2xl px-3 py-5 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            style={{ ["--reveal-delay" as string]: `${(i % 6) * 70}ms` }}
          >
            {tool}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading label="My Process" title="From idea to intelligent system." />

        <ol className="relative mt-14 space-y-4 border-l border-border pl-6 sm:pl-10">
          {PROCESS.map((step, i) => (
            <li
              key={step.no}
              className="reveal card-hover glass-panel relative rounded-2xl p-6"
              style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
            >
              <span
                aria-hidden="true"
                className="bg-brand-gradient animate-node absolute top-8 -left-[1.9rem] size-3 rounded-full sm:-left-[2.9rem]"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-sm text-primary">{step.no}</span>
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyAndTrust() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
      <SectionHeading
        label="Why RJ AI Automates"
        title={
          <>
            Not just AI.
            <br />
            <span className="text-gradient">Useful AI.</span>
          </>
        }
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((item, i) => (
          <article
            key={item.no}
            className="reveal card-hover glass-panel rounded-3xl p-6"
            style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
          >
            <span className="font-mono text-sm text-primary">{item.no}</span>
            <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="reveal glass-panel mt-8 grid items-center gap-8 rounded-[2rem] p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="eyebrow">Client Satisfaction</p>
          <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            Built with the client experience in mind.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every project is built around clear communication, useful solutions and a smooth
            client experience.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface/60 p-7 text-center">
          <div className="flex justify-center gap-1" aria-label="Five star client experience focus">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="mt-5 font-display text-2xl font-bold">
            100% Focused on <span className="text-gradient">Client Experience</span>
          </p>
        </div>
      </div>
    </section>
  );
}
