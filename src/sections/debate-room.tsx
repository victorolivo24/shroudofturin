"use client";

import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { debateClaims } from "@/data/labs";

export function DebateRoom() {
  return (
    <SectionShell id="debate-room">
      <SectionHeader
        eyebrow="Debate Room"
        title="Structured, impartial claim-by-claim review."
        description="Expand each card to read both the supporting and skeptical arguments with source lists."
        badgeVariant="amber"
      />
      <Badge variant="outline" className="mb-4">
        Respectful Comparison
      </Badge>
      <Accordion type="single" collapsible className="space-y-4">
        {debateClaims.map((claim) => (
          <AccordionItem key={claim.id} value={claim.id}>
            <AccordionTrigger>{claim.topic}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-sm text-sand-200/80">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                    Supporting Argument
                  </p>
                  <p>{claim.supporting}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                    Skeptical Argument
                  </p>
                  <p>{claim.skeptical}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
                    Sources
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    {claim.sources.map((source) => (
                      <li key={source}>{source}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  );
}
