"use client";

import Link from "next/link";
import { useState } from "react";
import { Chip } from "@/components/exhibit/chip";

type Direction = "ancient" | "medieval";
type Weight = "strong" | "unsure" | "weak";

const evidence: { id: string; claim: string; points: Direction; room: string }[] = [
  { id: "wounds", claim: "The wounds match Roman practice rather than medieval art: wrist nails, a cap of thorns.", points: "ancient", room: "wounds" },
  { id: "no-paint", claim: "No brush strokes or binders; colour sits only on the outermost fibrils.", points: "ancient", room: "image" },
  { id: "negative", claim: "The image is a photographic negative that also encodes 3D shape.", points: "ancient", room: "cloth" },
  { id: "blood-first", claim: "The body image does not continue beneath the bloodstains.", points: "ancient", room: "blood" },
  { id: "halos", claim: "Serum halos visible only under UV surround the bloodstains.", points: "ancient", room: "blood" },
  { id: "material", claim: "Material and X-ray tests suggest linen from the early centuries CE.", points: "ancient", room: "dating" },
  { id: "sudarium", claim: "The Sudarium, documented since the 9th century, may share stain patterns and AB blood.", points: "ancient", room: "sudarium" },
  { id: "carbon", claim: "Three laboratories radiocarbon-dated the sample to 1260–1390 CE.", points: "medieval", room: "dating" },
  { id: "record", claim: "There is no secure historical record of the Shroud before the 1350s.", points: "medieval", room: "dating" },
  { id: "pigment", claim: "McCrone reported iron oxide and vermilion pigment on the cloth.", points: "medieval", room: "blood" },
  { id: "bas-relief", claim: "Bas-relief experiments can produce similar 3D-like faces.", points: "medieval", room: "image" },
  { id: "no-mechanism", claim: "No one has demonstrated a process that reproduces the full image.", points: "medieval", room: "image" },
];

const weights: { id: Weight; label: string }[] = [
  { id: "strong", label: "Convincing" },
  { id: "unsure", label: "Not sure" },
  { id: "weak", label: "Unconvincing" },
];

const MAX_TILT_DEG = 18;

export function VerdictBoard() {
  const [answers, setAnswers] = useState<Record<string, Weight>>({});
  const convincing = (direction: Direction) =>
    evidence.filter((item) => item.points === direction && answers[item.id] === "strong").length;
  const ancient = convincing("ancient");
  const medieval = convincing("medieval");
  const answered = Object.keys(answers).length;
  const tilt = Math.max(-MAX_TILT_DEG, Math.min(MAX_TILT_DEG, (medieval - ancient) * 4));

  const summary =
    ancient + medieval === 0
      ? "Mark the evidence you find convincing and watch the scale."
      : ancient > medieval
        ? "The evidence you find convincing leans toward an ancient burial cloth."
        : medieval > ancient
          ? "The evidence you find convincing leans toward a medieval origin."
          : "You find the two sides equally weighty, which is where many researchers stand.";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <ol className="space-y-3">
        {evidence.map((item) => (
          <li key={item.id} className="rounded-3xl border border-sand-200/15 bg-sand-900/40 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="max-w-xl text-sand-50">{item.claim}</p>
              <Link href={`/rooms/${item.room}`} className="text-xs text-sand-200/50 hover:text-accent-amber">
                Revisit room →
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {weights.map((weight) => (
                <Chip
                  key={weight.id}
                  active={answers[item.id] === weight.id}
                  onClick={() => setAnswers({ ...answers, [item.id]: weight.id })}
                >
                  {weight.label}
                </Chip>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <aside className="h-fit rounded-3xl border border-accent-amber/30 bg-accent-amber/5 p-6 lg:sticky lg:top-20">
        <p className="text-xs uppercase tracking-[0.3em] text-accent-amber">Your scale</p>
        <div className="relative mx-auto mt-8 h-32 w-full max-w-72" aria-hidden>
          <div
            className="absolute left-0 right-0 top-6 transition-transform duration-500"
            style={{ transform: `rotate(${tilt}deg)` }}
          >
            <div className="h-1 rounded-full bg-sand-200/70" />
            <div className="absolute left-0 top-2 w-20 rounded-xl border border-accent-emerald/60 bg-accent-emerald/10 py-2 text-center text-2xl font-semibold text-accent-emerald">
              {ancient}
            </div>
            <div className="absolute right-0 top-2 w-20 rounded-xl border border-accent-rose/60 bg-accent-rose/10 py-2 text-center text-2xl font-semibold text-accent-rose">
              {medieval}
            </div>
          </div>
          <div className="absolute left-1/2 top-6 h-24 w-1 -translate-x-1/2 bg-sand-200/40" />
          <div className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-sand-200/40" />
        </div>
        <div className="mt-2 flex justify-between text-xs">
          <span className="text-accent-emerald">Ancient</span>
          <span className="text-accent-rose">Medieval</span>
        </div>
        <p className="mt-6 text-lg font-semibold text-sand-50">{summary}</p>
        <p className="mt-3 text-sm text-sand-200/60">
          {answered} of {evidence.length} weighed. Your choices stay in this page and are not sent
          anywhere.
        </p>
        {answered > 0 && (
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="mt-4 text-sm text-sand-200/60 underline hover:text-sand-50"
          >
            Start over
          </button>
        )}
      </aside>
    </div>
  );
}
