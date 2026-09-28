"use client";

import Link from "next/link";
import { rooms } from "@/data/rooms";
import { useMarkVisited, useVisited } from "@/lib/visited";
import { cn } from "@/lib/utils";

/** Strip of all rooms with visited markers; also records the current room as visited. */
export function RoomNav({ current }: { current: string }) {
  useMarkVisited(current);
  const visited = useVisited();
  return (
    <nav aria-label="Rooms" className="-mx-4 overflow-x-auto px-4">
      <ol className="flex min-w-max gap-2">
        {rooms.map((room, index) => (
          <li key={room.slug}>
            <Link
              href={`/rooms/${room.slug}`}
              aria-current={room.slug === current ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition",
                room.slug === current
                  ? "border-accent-amber bg-accent-amber/15 text-sand-50"
                  : "border-sand-200/15 text-sand-200/70 hover:border-sand-200/40 hover:text-sand-50",
              )}
            >
              <span className="font-mono text-[10px] text-sand-200/50">{index + 1}</span>
              {room.title}
              {visited.includes(room.slug) && room.slug !== current && (
                <span className="text-accent-emerald" aria-label="visited">✓</span>
              )}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
