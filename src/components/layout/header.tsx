import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand-200/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-[0.25em] text-sand-50 sm:text-base">
          TURIN ATLAS
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/#map" className="text-sand-200/70 transition hover:text-sand-50">
            Floor map
          </Link>
          <Link href="/verdict" className="text-sand-200/70 transition hover:text-sand-50">
            Your verdict
          </Link>
          <Link href="/sources" className="text-sand-200/70 transition hover:text-sand-50">
            Sources
          </Link>
        </nav>
      </div>
    </header>
  );
}
