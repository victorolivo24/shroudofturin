import Link from "next/link";
import { rooms, type Room } from "@/data/rooms";
import { RoomNav } from "@/components/layout/room-nav";

/** Shared frame for every exhibit room: room strip, question headline, and the door to the next room. */
export function RoomLayout({ room, children }: React.PropsWithChildren<{ room: Room }>) {
  const index = rooms.indexOf(room);
  const next = rooms[index + 1];
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <RoomNav current={room.slug} />

      <header className="mb-12 mt-10 max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-accent-amber">
          Room {index + 1} · {room.title}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-sand-50 sm:text-5xl">
          {room.question}
        </h1>
        <p className="text-lg text-sand-200/80">{room.teaser}</p>
      </header>

      <div className="space-y-16">{children}</div>

      <nav className="mt-20 grid gap-4 border-t border-sand-200/15 pt-10 sm:grid-cols-2">
        <Link
          href="/#map"
          className="rounded-3xl border border-sand-200/15 p-6 text-sand-200/80 transition hover:border-sand-200/40 hover:text-sand-50"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-sand-200/50">Back to</span>
          <span className="mt-2 block text-xl font-semibold">← The floor map</span>
        </Link>
        {next && (
          <Link
            href={`/rooms/${next.slug}`}
            className="rounded-3xl border border-accent-amber/40 bg-accent-amber/10 p-6 text-right transition hover:bg-accent-amber/20"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent-amber">
              Next: Room {index + 2}
            </span>
            <span className="mt-2 block text-xl font-semibold text-sand-50">{next.title} →</span>
            <span className="mt-1 block text-sm text-sand-200/70">{next.question}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
