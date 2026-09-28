import Link from "next/link";
import { sources } from "@/data/sources";

/** Numbered citation linking to the entry on the Sources page. Unknown ids fail the build via the throw. */
export function Cite({ id }: { id: string }) {
  const index = sources.findIndex((source) => source.id === id);
  if (index === -1) throw new Error(`Unknown source id: ${id}`);
  const source = sources[index];
  return (
    <sup>
      <Link
        href={`/sources#${id}`}
        title={`${source.author}, ${source.work}`}
        className="ml-0.5 text-[0.7em] font-semibold text-accent-amber/80 hover:text-accent-amber"
      >
        [{index + 1}]
      </Link>
    </sup>
  );
}
