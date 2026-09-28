import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-sand-200/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-sand-200/60 sm:px-6 lg:px-8">
        <p>Shroud of Turin Interactive Atlas · evidence and counterarguments, side by side.</p>
        <Link href="/sources" className="transition hover:text-sand-50">
          Sources &amp; references →
        </Link>
      </div>
    </footer>
  );
}
