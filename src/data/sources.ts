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
    summary:
      "The body image affects only the top 0.2 microns of each linen fibril, with no penetration into the fibers—unlike paint or dye. STURP analyses concluded no pigments or binders account for the image [2][17].",
    Component: SturpSummary,
  },
  {
    id: "skeptic-file",
    title: "Skeptical Critique Digest",
    category: "skeptical",
    summary:
      "Walter McCrone argued that the image was created using iron oxide and vermilion pigments. More recently, 3D modeling expert Cicero Moraes concluded the image may align with a low-relief sculpture, not a real body [16][21].",
    Component: SkepticalCritique,
  },
];
