/** One numbered stop inside a room: heading, short intro, then the interactive exhibit. */
export function Station({
  number,
  title,
  intro,
  children,
}: React.PropsWithChildren<{ number: number; title: string; intro?: React.ReactNode }>) {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-sand-200/50">Station {number}</p>
        <h2 className="mt-2 text-2xl font-semibold text-sand-50 sm:text-3xl">{title}</h2>
        {intro && <div className="mt-3 space-y-3 text-sand-200/80">{intro}</div>}
      </div>
      {children}
    </section>
  );
}
