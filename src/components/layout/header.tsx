import Link from "next/link";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand-200/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="text-lg font-semibold tracking-[0.2em]">
          TURIN ATLAS
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sand-200/70 transition hover:text-sand-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="#sources-library">Source Library</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="#shroud-explorer">Enter Explorer</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function SectionShell({
  id,
  children,
  className,
}: React.PropsWithChildren<{ id: string; className?: string }>) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8", className)}
    >
      {children}
    </section>
  );
}
