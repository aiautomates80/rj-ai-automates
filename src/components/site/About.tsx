import aboutVisual from "@/assets/about-ai-visual.jpg";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            label="About RJ AI Automates"
            title="Building smarter digital experiences with AI."
            description="RJ AI Automates combines AI, automation, web design and intelligent agents to help businesses reduce repetitive work and create better digital experiences."
          />

          <dl className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { k: "Focus", v: "AI & Automation" },
              { k: "Works with", v: "Global clients" },
              { k: "Based in", v: "Pakistan" },
            ].map((s) => (
              <div key={s.k} className="glass-panel rounded-2xl p-4">
                <dt className="eyebrow">{s.k}</dt>
                <dd className="mt-2 font-display text-sm font-semibold">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative" style={{ ["--reveal-delay" as string]: "140ms" }}>
          <div
            aria-hidden="true"
            className="bg-brand-gradient absolute -inset-6 rounded-[2.5rem] opacity-20 blur-3xl"
          />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={aboutVisual}
              alt="Abstract visualisation of an AI network with glowing connected nodes representing automated business workflows"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-[24rem] w-full rounded-[1.6rem] object-cover sm:h-[30rem]"
            />
          </div>
          <div className="glass-panel animate-float absolute -bottom-5 left-5 rounded-2xl px-4 py-3">
            <p className="eyebrow">Automating Work</p>
            <p className="mt-1 text-sm font-medium">Building Intelligence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
