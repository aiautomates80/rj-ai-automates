/**
 * Premium AI system interface visual: animated node network, data flow lines
 * and a live "system" panel. Pure SVG + CSS for performance.
 */
export function HeroVisual() {
  const nodes = [
    { x: 60, y: 70, label: "Trigger" },
    { x: 200, y: 40, label: "AI Agent" },
    { x: 200, y: 160, label: "n8n" },
    { x: 340, y: 100, label: "Action" },
    { x: 120, y: 230, label: "Data" },
    { x: 320, y: 230, label: "CRM" },
  ];
  const edges: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [0, 4],
    [4, 5],
    [5, 3],
  ];

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="animate-aurora bg-brand-gradient absolute -inset-10 rounded-full opacity-20 blur-3xl"
      />
      <div className="glass-panel relative overflow-hidden rounded-3xl p-5 shadow-[var(--glow-soft)] sm:p-6">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="bg-whatsapp size-2 rounded-full" />
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
              System Online
            </span>
          </div>
          <span className="font-mono text-[0.65rem] text-muted-foreground">
            rj-ai/automation-core
          </span>
        </div>

        <svg
          viewBox="0 0 400 290"
          role="img"
          aria-label="Animated diagram of an AI automation network connecting triggers, an AI agent, n8n workflows, data and a CRM"
          className="mt-4 w-full"
        >
          <defs>
            <linearGradient id="rj-edge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.68 0.16 256)" />
              <stop offset="100%" stopColor="oklch(0.65 0.18 295)" />
            </linearGradient>
          </defs>

          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a]!.x}
              y1={nodes[a]!.y}
              x2={nodes[b]!.x}
              y2={nodes[b]!.y}
              stroke="url(#rj-edge)"
              strokeWidth="1.5"
              className="animate-dash"
              style={{ animationDelay: `${i * 0.4}s` }}
              opacity="0.85"
            />
          ))}

          {nodes.map((n, i) => (
            <g key={n.label} className="animate-node" style={{ animationDelay: `${i * 0.45}s` }}>
              <circle cx={n.x} cy={n.y} r="20" fill="oklch(0.68 0.16 256 / 12%)" />
              <circle
                cx={n.x}
                cy={n.y}
                r="7"
                fill="url(#rj-edge)"
                stroke="oklch(0.99 0 0 / 35%)"
                strokeWidth="1"
              />
              <text
                x={n.x}
                y={n.y + 36}
                textAnchor="middle"
                className="fill-muted-foreground font-mono"
                fontSize="9"
                letterSpacing="1"
              >
                {n.label.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { k: "Latency", v: "0.4s" },
            { k: "Steps", v: "12" },
            { k: "Status", v: "Running" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-surface/60 p-3">
              <p className="font-mono text-[0.6rem] tracking-[0.16em] text-muted-foreground uppercase">
                {s.k}
              </p>
              <p className="mt-1 font-display text-sm font-semibold">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-panel animate-float absolute -bottom-6 -left-4 hidden rounded-2xl px-4 py-3 sm:block">
        <p className="font-mono text-[0.6rem] tracking-[0.16em] text-muted-foreground uppercase">
          AI Processing
        </p>
        <p className="mt-1 text-sm font-medium">Lead qualified → CRM updated</p>
      </div>
    </div>
  );
}
