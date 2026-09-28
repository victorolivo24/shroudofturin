import Link from "next/link";
import { VerdictBoard } from "./verdict-board";

export const metadata = {
  title: "Your Verdict · Shroud of Turin",
  description: "Weigh the evidence from every room and see which way your scale tips.",
};

export default function VerdictPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-accent-amber">Final room · Your verdict</p>
        <h1 className="text-4xl font-semibold tracking-tight text-sand-50 sm:text-5xl">
          So what do you think?
        </h1>
        <p className="text-lg text-sand-200/80">
          Here is the key evidence from every room. Decide how convincing each piece is to you, and
          watch which way the scale tips. There is no right answer; researchers still disagree.
        </p>
      </header>
      <VerdictBoard />
      <Link
        href="/#map"
        className="mt-12 inline-block text-sand-200/70 transition hover:text-sand-50"
      >
        ← Back to the floor map
      </Link>
    </div>
  );
}
