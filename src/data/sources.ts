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
    id: "skeptic-file",
    title: "Skeptical Critique Digest",
    category: "skeptical",
    summary:
      "Walter McCrone argued that the image was created using iron oxide and vermilion pigments. More recently, 3D modeling expert Cicero Moraes concluded the image may align with a low-relief sculpture, not a real body [16][21].",
    Component: SkepticalCritique,
  },
];
