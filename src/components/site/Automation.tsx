import { SectionHeading } from "./SectionHeading";
import { WorkflowMockup } from "./mockups";

export function Automation() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="From Idea To Automation"
          title="A real workflow, running end to end."
          description="This is how a single website enquiry becomes a qualified lead, a CRM record, a WhatsApp message and an email notification — without anyone copying data by hand."
          align="center"
        />

        <div className="reveal mt-14">
          <WorkflowMockup
            title="lead-capture-ai.workflow"
            nodes={[
              { label: "Website Form", type: "Trigger", status: "Connected" },
              { label: "Lead Captured", type: "Webhook", status: "Running" },
              { label: "AI Agent", type: "OpenAI", status: "AI Processing" },
              { label: "Lead Qualified", type: "Logic", status: "Running" },
              { label: "CRM Updated", type: "CRM", status: "Completed" },
              { label: "WhatsApp Message", type: "WhatsApp", status: "Completed" },
              { label: "Email Notification", type: "Email", status: "Completed" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
