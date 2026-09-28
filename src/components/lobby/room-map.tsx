"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { rooms } from "@/data/rooms";
import { useVisited } from "@/lib/visited";

export function RoomMap() {
  const visited = useVisited();
  const explored = rooms.filter((room) => visited.includes(room.slug)).length;
  return (
    <section id="map" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent-amber">Floor map</p>
          <h2 className="mt-2 text-3xl font-semibold text-sand-50">Choose a room</h2>
          <p className="mt-2 text-sand-200/70">
            Each room asks one question. Visit them in order or follow your curiosity.
          </p>
        </div>
        <div className="w-48 text-right text-sm text-sand-200/70">
          {explored} of {rooms.length} rooms explored
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sand-200/15">
            <div
              className="h-full rounded-full bg-accent-emerald transition-all"
              style={{ width: `${(explored / rooms.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rooms.map((room, index) => (
          <li key={room.slug}>
            <Link
              href={`/rooms/${room.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sand-200/15 bg-sand-900/40 transition hover:-translate-y-1 hover:border-accent-amber/60"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={room.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[11px] text-sand-100">
                  Room {index + 1}
                </span>
                {index === 0 && explored === 0 && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent-amber px-2.5 py-1 text-[11px] font-semibold text-black">
                    Start here
                  </span>
                )}
                {visited.includes(room.slug) && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent-emerald/90 px-2.5 py-1 text-[11px] font-semibold text-black">
                    ✓ Visited
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-xl font-semibold text-sand-50">{room.title}</h3>
                <p className="font-medium text-accent-amber/90">{room.question}</p>
                <p className="text-sm text-sand-200/70">{room.teaser}</p>
                <span className="mt-auto pt-3 text-sm font-semibold text-sand-100 transition group-hover:text-accent-amber">
                  Enter room →
                </span>
              </div>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/verdict"
            className="group flex h-full flex-col justify-between rounded-3xl border border-dashed border-accent-amber/50 bg-accent-amber/5 p-5 transition hover:-translate-y-1 hover:bg-accent-amber/10"
          >
            <span className="font-mono text-[11px] text-accent-amber">Final room</span>
            <span>
              <span className="block text-xl font-semibold text-sand-50">Your Verdict</span>
              <span className="mt-2 block font-medium text-accent-amber/90">So what do you think?</span>
              <span className="mt-2 block text-sm text-sand-200/70">
                Weigh the key evidence from every room and see which way your scale tips.
              </span>
            </span>
            <span className="pt-3 text-sm font-semibold text-sand-100 transition group-hover:text-accent-amber">
              Give your verdict →
            </span>
          </Link>
        </li>
      </ol>
    </section>
  );
}
