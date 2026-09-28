"use client";

import { useState } from "react";
import { Station } from "@/components/exhibit/station";
import { Cite } from "@/components/shared/cite";
import { cn } from "@/lib/utils";

const topics = [
  {
    id: "official",
    title: "The official position",
    preview: "Why the Church declares it neither authentic nor fake.",
    takeaway: "The Church permits devotion and research while leaving authenticity unresolved.",
    body: (
      <>
        <p>
          The Catholic Church has never issued an official declaration on the Shroud&apos;s origin.
          Popes have permitted scientific study, public exhibition and devotional use while refraining
          from defining the cloth as authentic or inauthentic.
        </p>
        <p>
          This reflects a distinction between matters of faith, which are doctrinal, and historical or
          scientific questions, which stay open to investigation.
        </p>
      </>
    ),
  },
  {
    id: "papal",
    title: "What popes have said",
    preview: "Recent popes speak about it carefully.",
    takeaway: "Popes speak of the Shroud as an aid to contemplation, not as proof.",
    body: (
      <>
        <p>
          Saint John Paul II called the Shroud a “mirror of the Gospel”, emphasising meditation on
          Christ&apos;s Passion without claiming scientific certainty.
          <Cite id="john-paul-ii" />
        </p>
        <p>
          Pope Benedict XVI described it as an “icon written with blood”,
          <Cite id="benedict-xvi" /> and Pope Francis has encouraged contemplation of suffering and
          love while affirming the value of continued study.
          <Cite id="francis" />
        </p>
      </>
    ),
  },
  {
    id: "evidence",
    title: "Faith and evidence",
    preview: "Why Catholic belief does not depend on artifacts.",
    takeaway: "Catholic faith in the Resurrection does not rest on physical objects.",
    body: (
      <>
        <p>
          In Catholic theology, belief in the Resurrection is grounded in testimony and revelation,
          not in material verification.
          <Cite id="catechism" />
        </p>
        <p>
          So the Shroud is not presented as evidence that must convince, but as an image that may
          invite reflection for those who choose to engage with it.
        </p>
      </>
    ),
  },
  {
    id: "study",
    title: "Why study it?",
    preview: "How faith and reason are held together.",
    takeaway: "The Church supports careful inquiry and does not treat science as a threat to faith.",
    body: (
      <>
        <p>
          The Church has supported scientific examination of the Shroud without treating uncertainty
          as a threat, in keeping with a tradition that sees faith and reason as complementary.
        </p>
        <p>Science is encouraged to follow its own methods, even when conclusions stay contested.</p>
      </>
    ),
  },
];

export function FaithRoom() {
  const [topicId, setTopicId] = useState(topics[0].id);
  const topic = topics.find((item) => item.id === topicId)!;

  return (
    <>
      <Station
        number={1}
        title="Four questions people ask"
        intro="The Catholic Church does not require belief in the Shroud's authenticity. It is not a doctrine of faith, nor is it presented as proof of the Resurrection. Pick a question."
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <ul className="space-y-2">
            {topics.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-pressed={item.id === topicId}
                  onClick={() => setTopicId(item.id)}
                  className={cn(
                    "w-full rounded-2xl border p-4 text-left transition",
                    item.id === topicId
                      ? "border-accent-amber bg-accent-amber/10"
                      : "border-sand-200/15 hover:border-sand-200/40",
                  )}
                >
                  <span className="block font-semibold text-sand-50">{item.title}</span>
                  <span className="mt-1 block text-sm text-sand-200/70">{item.preview}</span>
                </button>
              </li>
            ))}
          </ul>
          <div key={topic.id} className="animate-[fade-in_.3s_ease-out] rounded-3xl border border-sand-200/15 bg-sand-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-amber">In one line</p>
            <p className="mt-2 text-xl font-semibold text-sand-50">{topic.takeaway}</p>
            <div className="mt-4 space-y-3 text-sand-200/85">{topic.body}</div>
          </div>
        </div>
        <p className="max-w-3xl text-sand-200/80">
          For believers the Shroud may be a focus for prayer and contemplation. For others it remains
          an object of historical and scientific inquiry. The Church leaves room for both.
        </p>
      </Station>

      <aside className="max-w-3xl rounded-3xl border border-sand-200/20 bg-sand-900/50 p-6 text-sand-200/80">
        <p className="text-xs uppercase tracking-[0.3em] text-sand-200/60">Author&apos;s note</p>
        <p className="mt-3">
          I am a Catholic and personally believe the Shroud of Turin to be authentic. With that said,
          this project was designed to present the evidence, counterarguments, and uncertainties as
          accurately and fairly as possible. Where interpretations differ, both perspectives are
          presented so readers can draw their own conclusions.
        </p>
      </aside>
    </>
  );
}
