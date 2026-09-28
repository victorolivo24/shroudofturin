import { sourceGroups, sources } from "@/data/sources";

export const metadata = { title: "Sources · Shroud of Turin" };

export default function SourcesPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.35em] text-accent-amber">Library</p>
      <h1 className="mt-2 text-4xl font-semibold text-sand-50">Sources &amp; References</h1>
      <p className="mt-3 text-sand-200/70">
        Numbers match the citation markers used throughout the rooms.
      </p>

      <div className="mt-10 space-y-10">
        {sourceGroups.map((group) => (
          <section key={group.title}>
            <h2 className="text-xl font-semibold text-sand-100">{group.title}</h2>
            <ol className="mt-4 space-y-3">
              {group.sources.map((source) => (
                <li
                  key={source.id}
                  id={source.id}
                  className="flex scroll-mt-24 gap-4 rounded-2xl border border-sand-200/10 p-4 text-sand-200/80 target:border-accent-amber target:bg-accent-amber/10"
                >
                  <span className="font-mono text-sm text-accent-amber">
                    [{sources.indexOf(source) + 1}]
                  </span>
                  <div>
                    <p className="font-semibold text-sand-50">{source.author}</p>
                    <p className="italic">{source.work}</p>
                    <p className="mt-1 text-sm text-sand-200/70">{source.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
