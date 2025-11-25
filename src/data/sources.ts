import SturpSummary from "@/data/mdx/sources/sturp-summary.mdx";
import SkepticalCritique from "@/data/mdx/sources/skeptical-critique.mdx";

export type SourceEntry = {
  id: string;
  title: string;
  category: "scientific" | "historical" | "skeptical" | "pro";
  summary: string;
  Component: () => JSX.Element;
};

export const sourceLibrary: SourceEntry[] = [
  {
    id: "sturp",
    title: "STURP Summary Report",
    category: "scientific",
    summary: "<TODO: copy>",
    Component: SturpSummary,
  },
  {
    id: "skeptic-file",
    title: "Skeptical Critique Digest",
    category: "skeptical",
    summary: "<TODO: copy>",
    Component: SkepticalCritique,
  },
];
