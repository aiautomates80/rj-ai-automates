import { SectionHeading } from "./SectionHeading";
import { PROBLEMS } from "./site-data";

export function Problem() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        label="The Problem"
        title={
          <>
            Too much manual work.
            <br />
            Too many disconnected tools.
          </>
        }
        description="Businesses lose time when repetitive tasks, customer conversations, websites and internal workflows are handled manually."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <article
            key={p.no}
            className="reveal card-hover glass-panel group relative overflow-hidden rounded-3xl p-7"
            style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
          >
            <span className="font-mono text-5xl font-bold text-primary/25 transition-colors duration-500 group-hover:text-primary/50">
              {p.no}
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            <span
              aria-hidden="true"
              className="bg-brand-gradient absolute inset-x-7 bottom-0 h-px scale-x-0 opacity-70 transition-transform duration-500 group-hover:scale-x-100"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
