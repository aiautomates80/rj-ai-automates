import { Sparkles, Facebook, Linkedin, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "./site-data";
import { WhatsAppIcon } from "./WhatsAppFloat";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="bg-brand-gradient flex size-8 items-center justify-center rounded-lg">
                <Sparkles className="size-4 text-primary-foreground" />
              </span>
              <span className="font-display text-base font-extrabold">
                RJ <span className="text-gradient">AI Automates</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{BRAND.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="glass-panel flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:scale-105 hover:text-foreground"
              >
                <WhatsAppIcon className="size-4.5" />
              </a>
              <a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook — ${BRAND.facebookName}`}
                className="glass-panel flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:scale-105 hover:text-foreground"
              >
                <Facebook className="size-4.5" />
              </a>
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn — ${BRAND.linkedinName}`}
                className="glass-panel flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:scale-105 hover:text-foreground"
              >
                <Linkedin className="size-4.5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Get in touch</p>
            <a
              href={BRAND.tel}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-4" /> {BRAND.phoneLocal}
            </a>
            <p className="mt-5 font-display text-lg font-semibold">
              Let&apos;s build something <span className="text-gradient">intelligent.</span>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 {BRAND.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
