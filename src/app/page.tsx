import Link from "next/link";
import { RoomMap } from "@/components/lobby/room-map";

const facts = [
  { value: "4.4 × 1.1 m", label: "a single piece of linen" },
  { value: "c. 1350s", label: "first securely documented, in France" },
  { value: "1898", label: "first photographed, revealing a hidden negative" },
  { value: "Turin", label: "kept in the Cathedral of St John the Baptist" },
];

export default function Lobby() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[url('/images/shroud-fullbody-photographic-negative.png')] bg-cover bg-center opacity-20"
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/70 to-[#030405]" aria-hidden />
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-accent-amber">An interactive museum</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-sand-50 sm:text-7xl">
            The Shroud of Turin
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-sand-100/90">
            A linen cloth bearing the faint image of a man who appears to have been crucified. It has
            been photographed, examined under ultraviolet light, carbon-dated and argued over for more
            than a century, and no one has fully explained how the image got there.
          </p>
          <p className="mt-4 max-w-2xl text-sand-200/70">
            Walk through the rooms in any order. Each one lets you examine the evidence yourself, with
            the case for and against side by side.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/rooms/cloth"
              className="rounded-full bg-accent-amber px-6 py-3 font-semibold text-black transition hover:bg-accent-amber/90"
            >
              Begin in Room 1: The Cloth →
            </Link>
            <Link
              href="#map"
              className="rounded-full border border-sand-200/40 px-6 py-3 font-semibold text-sand-50 transition hover:bg-sand-900/60"
            >
              See all rooms
            </Link>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-sand-200/15 pt-8 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.value}>
                <dt className="text-2xl font-semibold text-sand-50">{fact.value}</dt>
                <dd className="mt-1 text-sm text-sand-200/70">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <RoomMap />
    </>
  );
}
