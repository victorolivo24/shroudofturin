"use client";
/* eslint-disable @next/next/no-img-element */

import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";

export function ReferenceResearch() {
  return (
    <SectionShell id="reference-research">
      <SectionHeader
        eyebrow="Reference & Research"
        title="STURP field work and archival efforts."
        description="The 1978 investigation established the foundation for modern Shroud science."
        badgeVariant="amber"
      />
      <div className="rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <p className="text-xs uppercase tracking-[0.4em] text-sand-200/60">
          SECTION 7 — REFERENCE &amp; RESEARCH
        </p>
        <h3 className="mt-4 text-2xl font-semibold">STURP Research Team</h3>
        <p className="mt-3 text-sand-200/80">
          The 1978 scientific investigation involved physicists, chemists, and engineers
          conducting the most comprehensive analysis to date.
        </p>
        <img
          src="/images/sturp-team-researchers-4.jpg"
          alt="STURP research team"
          loading="lazy"
          className="mt-4 w-full rounded-2xl border border-sand-200/15 object-cover"
        />
      </div>
    </SectionShell>
  );
}
