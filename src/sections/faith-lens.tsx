"use client";

import { SectionShell } from "@/components/layout/header";
import { SectionHeader } from "@/components/shared/section-header";
import { useState } from "react";

export function FaithLens() {
  const [active, setActive] = useState<
    "official" | "papal" | "faith" | "study"
  >("official");

  const panels = {
    official: {
      title: "Official Position",
      takeaway:
        "The Church permits devotion and research while leaving authenticity unresolved.",
      body: [
        "The Catholic Church has consistently avoided issuing an official declaration on the Shroud’s origin. Popes have permitted scientific study, public exhibition, and devotional use, while refraining from defining the cloth as either authentic or inauthentic.",
        "This posture reflects a distinction between matters of faith—which are doctrinal—and historical or scientific questions, which remain open to investigation.",
      ],
    },
    papal: {
      title: "Papal Reflections",
      takeaway: "Popes speak of the Shroud as an aid to contemplation, not as a proof.",
      body: [
        "Several popes have spoken about the Shroud in reflective rather than evidentiary terms. Saint John Paul II referred to the Shroud as a “mirror of the Gospel,” emphasizing meditation on Christ’s Passion without asserting scientific certainty.",
        "Pope Benedict XVI described it as an “icon written with blood,” and Pope Francis has similarly encouraged contemplation of suffering and love while affirming the value of continued study.",
      ],
    },
    faith: {
      title: "Faith and Evidence",
      takeaway: "Catholic faith in the Resurrection is not dependent on artifacts.",
      body: [
        "In Catholic theology, belief in the Resurrection does not rest on physical objects. The Resurrection is understood through testimony and revelation, not through material verification alone.",
        "As a result, the Shroud is not presented as evidence that must convince, but as an image that may invite reflection for those who choose to engage with it.",
      ],
    },
    study: {
      title: "Why Study It?",
      takeaway:
        "The Church supports careful inquiry and does not treat science as a threat to faith.",
      body: [
        "The Church has supported careful scientific examination of the Shroud without treating scientific uncertainty as a threat. This reflects a broader Catholic tradition that views faith and reason as complementary rather than opposed.",
        "Scientific inquiry is encouraged to proceed according to its own methods, even when conclusions remain contested or incomplete.",
      ],
    },
  };

  return (
    <SectionShell id="faith-lens">
      <SectionHeader
        eyebrow="Faith Lens"
        title="What the Catholic Church says about the Shroud."
        badgeVariant="emerald"
      />
      <div className="mt-6 space-y-6 rounded-3xl border border-sand-200/15 bg-sand-900/30 p-6 text-sand-50">
        <div className="rounded-2xl border border-sand-200/20 bg-sand-900/50 p-4 text-sm text-sand-200/80">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
            Author’s Note
          </p>
          <p className="mt-2">
            I am a Catholic and personally believe the Shroud of Turin to be authentic. With that
            said, this project was designed to present the evidence, counterarguments, and
            uncertainties as accurately and fairly as possible. Where interpretations differ, both
            perspectives are presented so readers can draw their own conclusions.
          </p>
        </div>

        <p className="text-sand-200/80">
          The Catholic Church does not require belief in the authenticity of the Shroud of Turin.
          It is not a doctrine of faith, nor is it presented as proof of the Resurrection. Instead,
          the Church permits scientific study and devotional reflection while leaving historical and
          scientific questions open.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {[
            {
              id: "official",
              title: "Official Position",
              preview:
                "Why the Church avoids declaring the Shroud authentic or inauthentic.",
            },
            {
              id: "papal",
              title: "Papal Reflections",
              preview:
                "How recent popes have spoken about the Shroud — carefully.",
            },
            {
              id: "faith",
              title: "Faith and Evidence",
              preview:
                "Why Catholic belief does not depend on physical artifacts.",
            },
            {
              id: "study",
              title: "Why Study It?",
              preview:
                "How faith and reason are held together in Catholic tradition.",
            },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id as typeof active)}
              className={`w-full border-b border-sand-200/15 pb-3 text-left transition hover:border-sand-200/40 ${
                active === item.id ? "text-sand-50" : "text-sand-200/80"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-semibold">{item.title}</p>
                <span
                  className={`text-xl ${
                    active === item.id ? "text-emerald-300" : "text-sand-200/50"
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-sand-200/70">{item.preview}</p>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-sand-200/10 bg-sand-900/40 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">
            Key takeaway
          </p>
          <p className="mt-2 text-sm font-semibold text-sand-50">
            {panels[active].takeaway}
          </p>
          <div className="mt-4 space-y-3 text-sm text-sand-200/80">
            {panels[active].body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <p className="text-sand-200/80">
          For believers, the Shroud may serve as a focal point for prayer and contemplation. For
          others, it remains an object of historical and scientific inquiry. The Church allows room
          for both approaches.
        </p>
      </div>
    </SectionShell>
  );
}
