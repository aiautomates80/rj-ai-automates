import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Services } from "@/components/site/Services";
import { Automation } from "@/components/site/Automation";
import { Projects } from "@/components/site/Projects";
import { Tools, Process, WhyAndTrust } from "@/components/site/ToolsProcess";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ChatWidget } from "@/components/site/chatbot/ChatWidget";

const TITLE = "RJ AI Automates | AI Automation, AI Agents & AI Website Design";
const DESCRIPTION =
  "RJ AI Automates builds AI websites, n8n automations, AI agents and intelligent business workflows that help businesses work smarter.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "AI automation, AI automation services, n8n automation, AI agents, AI website design, WhatsApp AI agent, business automation, AI web development",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "RJ AI Automates",
          slogan: "Automating Work. Building Intelligence.",
          description: DESCRIPTION,
          telephone: "+923110613196",
          areaServed: "Worldwide",
          sameAs: [
            "https://www.facebook.com/RJautomates",
            "https://www.linkedin.com/in/rafia-jafar-514450434/",
          ],
          founder: { "@type": "Person", name: "Rafia Jafar" },
          knowsAbout: [
            "AI Automation",
            "n8n Automation",
            "AI Agents",
            "WhatsApp AI Agents",
            "AI Website Design",
            "Business Process Automation",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Automation />
        <Projects />
        <Tools />
        <Process />
        <WhyAndTrust />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
