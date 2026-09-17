import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS, type Project } from "./site-data";
import { ProjectVisualFor } from "./mockups";
import { FlowDiagram } from "./FlowDiagram";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <SectionHeading label="Selected Work" title="Systems I build." />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <article
            key={project.id}
            className="reveal card-hover glass-panel group flex flex-col overflow-hidden rounded-3xl p-5 sm:p-7"
            style={{ ["--reveal-delay" as string]: `${(i % 2) * 120}ms` }}
          >
            <div className="transition-transform duration-500 group-hover:-translate-y-1">
              <ProjectVisualFor visual={project.visual} />
            </div>

            <p className="eyebrow mt-6">{project.category}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-6">
              <Button variant="glass" onClick={() => setActive(project)}>
                View Project
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </article>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border-border bg-popover">
          {active ? (
            <>
              <DialogHeader>
                <p className="eyebrow">{active.category}</p>
                <DialogTitle className="font-display text-2xl font-bold sm:text-3xl">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {active.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2">
                <ProjectVisualFor visual={active.visual} />
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Block title="Problem" body={active.problem} />
                <Block title="Solution" body={active.solution} />
              </div>

              <div className="mt-6">
                <h4 className="eyebrow">Tools Used</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {active.tools.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface/70 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="eyebrow">Workflow</h4>
                <FlowDiagram
                  compact
                  className="mt-3"
                  steps={active.workflow.map((label) => ({ label }))}
                />
              </div>

              <div className="mt-6">
                <h4 className="eyebrow">Key Features</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {active.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="bg-brand-gradient mt-1.5 size-1.5 shrink-0 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel mt-6 rounded-2xl p-5">
                <h4 className="eyebrow">Outcome</h4>
                <p className="mt-2 text-sm leading-relaxed">{active.outcome}</p>
              </div>

              <div className="mt-6">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <a href="#contact" onClick={() => setActive(null)}>
                    Start a similar project
                  </a>
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-5">
      <h4 className="eyebrow">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
