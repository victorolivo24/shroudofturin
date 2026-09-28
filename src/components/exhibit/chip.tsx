import { cn } from "@/lib/utils";

/** Pill-shaped toggle button used for every "pick one" control in the rooms. */
export function Chip({
  active,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm transition",
        active
          ? "border-accent-amber bg-accent-amber/15 text-sand-50"
          : "border-sand-200/20 text-sand-200/70 hover:border-sand-200/40 hover:text-sand-50",
        className,
      )}
      {...props}
    />
  );
}
