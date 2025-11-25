import { Badge } from "@/components/ui/badge";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  badgeVariant?: "amber" | "emerald" | "neutral";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  badgeVariant = "neutral",
}: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl space-y-4">
      <Badge variant={badgeVariant}>{eyebrow}</Badge>
      <h2 className="text-4xl font-semibold tracking-tight text-sand-50">{title}</h2>
      <p className="text-lg text-sand-200/80">{description}</p>
    </div>
  );
}
