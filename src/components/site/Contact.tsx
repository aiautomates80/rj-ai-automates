import { useState, type FormEvent } from "react";
import { Phone, Send, Facebook, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./SectionHeading";
import { BRAND, NEED_OPTIONS, BUDGET_OPTIONS } from "./site-data";
import { WhatsAppIcon } from "./WhatsAppFloat";

const fieldClass =
  "mt-2 border-border bg-surface/70 text-foreground placeholder:text-muted-foreground/70";

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const summary = [
      `New project request — ${BRAND.name}`,
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Business: ${get("company") || "—"}`,
      `Needs: ${get("need")}`,
      `Budget: ${get("budget") || "—"}`,
      "",
      get("message"),
    ].join("\n");

    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Project request ready", {
        description: "Opening WhatsApp so your request reaches me instantly.",
      });
      window.open(`${BRAND.whatsapp}?text=${encodeURIComponent(summary)}`, "_blank", "noopener");
    }, 400);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="bg-brand-gradient animate-aurora absolute -bottom-40 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full opacity-[0.14] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Contact"
          title="Let's build something intelligent."
          description="Tell me what you want to automate, build or improve."
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.15fr]">
          {/* Quick contact options */}
          <div className="space-y-4">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal card-hover bg-whatsapp/12 border-whatsapp/35 group flex items-center gap-4 rounded-3xl border p-6"
            >
              <span className="bg-whatsapp flex size-12 shrink-0 items-center justify-center rounded-2xl text-primary-foreground">
                <WhatsAppIcon className="size-6" />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold">
                  Chat on WhatsApp
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  Have a quick question? Let&apos;s talk on WhatsApp.
                </span>
              </span>
            </a>

            <a
              href={BRAND.tel}
              className="reveal card-hover glass-panel flex items-center gap-4 rounded-3xl p-6"
              style={{ ["--reveal-delay" as string]: "90ms" }}
            >
              <span className="glass-panel flex size-12 shrink-0 items-center justify-center rounded-2xl">
                <Phone className="size-5 text-primary" />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold">Call Me</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {BRAND.phoneIntl} ({BRAND.phoneLocal})
                </span>
              </span>
            </a>

            <div
              className="reveal glass-panel rounded-3xl p-6"
              style={{ ["--reveal-delay" as string]: "160ms" }}
            >
              <p className="eyebrow">Connect</p>
              <div className="mt-4 flex gap-3">
                <SocialLink
                  href={BRAND.whatsapp}
                  label={`WhatsApp ${BRAND.phoneIntl}`}
                >
                  <WhatsAppIcon className="size-5" />
                </SocialLink>
                <SocialLink href={BRAND.facebook} label={`Facebook — ${BRAND.facebookName}`}>
                  <Facebook className="size-5" />
                </SocialLink>
                <SocialLink href={BRAND.linkedin} label={`LinkedIn — ${BRAND.linkedinName}`}>
                  <Linkedin className="size-5" />
                </SocialLink>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                {BRAND.facebookName} on Facebook · {BRAND.linkedinName} on LinkedIn
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal glass-panel rounded-3xl p-6 sm:p-8"
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <Label htmlFor="company">Business / Company</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Company name"
                  className={fieldClass}
                />
              </div>
              <div>
                <Label htmlFor="need">What do you need?</Label>
                <select
                  id="need"
                  name="need"
                  required
                  defaultValue=""
                  className={`mt-2 h-9 w-full rounded-md border border-border bg-surface/70 px-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {NEED_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="budget">Budget</Label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="mt-2 h-9 w-full rounded-md border border-border bg-surface/70 px-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <option value="">Select a budget range</option>
                  {BUDGET_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What would you like to automate, build or improve?"
                  className={fieldClass}
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              disabled={sending}
              className="mt-6 w-full"
            >
              <Send className="size-4" />
              {sending ? "Preparing…" : "Send Project Request"}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Your request is delivered through WhatsApp for the fastest reply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="glass-panel flex size-11 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-foreground"
    >
      {children}
    </a>
  );
}
