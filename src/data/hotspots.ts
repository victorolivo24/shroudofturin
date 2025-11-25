import {
  PLACEHOLDER_SHROUD,
  PLACEHOLDER_SUDARIUM,
  PLACEHOLDER_UV,
} from "./placeholders";

export type Hotspot = {
  id: string;
  label: string;
  description: string;
  coords: { x: number; y: number; depth: number };
  scienceNote: string;
  proAuthenticity: string;
  skepticalView: string;
  sources: string[];
};

export const shroudHotspots: Hotspot[] = [
  {
    id: "wrist-nail",
    label: "Wrist Nail Wound",
    description: "<TODO: copy>",
    coords: { x: 42, y: 38, depth: 0.6 },
    scienceNote: "<TODO: copy> explanation of anatomical positioning.",
    proAuthenticity:
      "<TODO: copy> - Supporters cite median nerve trauma patterns.",
    skepticalView:
      "<TODO: copy> - Skeptics note artistic influences from medieval art.",
    sources: ["STURP data files", "Smith 1979 Wrist Study"],
  },
  {
    id: "ankle-wound",
    label: "Ankle / Feet Wounds",
    description: "<TODO: copy>",
    coords: { x: 52, y: 78, depth: 0.45 },
    scienceNote: "<TODO: copy> - Position suggests single spike.",
    proAuthenticity:
      "<TODO: copy> - Aligns with first-century execution finds.",
    skepticalView:
      "<TODO: copy> - Could reflect artistic shorthand for crucifixion.",
    sources: ["Dr. Barbet notebooks", "Skeptical Forum Archive"],
  },
  {
    id: "spear",
    label: "Spear Wound",
    description: "<TODO: copy>",
    coords: { x: 48, y: 52, depth: 0.35 },
    scienceNote:
      "<TODO: copy> - Serum and blood signatures recorded under UV.",
    proAuthenticity: "<TODO: copy> - Matches water-and-blood description.",
    skepticalView: "<TODO: copy> - Narrative detail may be retrofitted.",
    sources: ["UV macro imagery log", "Skeptic Digest Issue 12"],
  },
  {
    id: "scourge",
    label: "Scourge Marks",
    description: "<TODO: copy>",
    coords: { x: 34, y: 60, depth: 0.5 },
    scienceNote:
      "<TODO: copy> - Over 100 dumbbell shaped marks recorded by STURP.",
    proAuthenticity:
      "<TODO: copy> - Patterns align with Roman flagrum hardware.",
    skepticalView:
      "<TODO: copy> - Could be enhanced by creative negative photography.",
    sources: ["Flagrum hardware dossier", "Skeptical Inquirer 1984"],
  },
  {
    id: "uv-halow",
    label: "Blood / Serum UV Halos",
    description: "<TODO: copy>",
    coords: { x: 58, y: 42, depth: 0.2 },
    scienceNote: "<TODO: copy> - UV fluorescence suggests hemolysis rings.",
    proAuthenticity:
      "<TODO: copy> - Advocates cite rapid trauma consistent bilirubin.",
    skepticalView:
      "<TODO: copy> - Critics propose medieval tempera binder effects.",
    sources: ["STURP UV logbook", "McCrone pigment notes"],
  },
  {
    id: "fire-water",
    label: "Fire & Water Damage",
    description: "<TODO: copy>",
    coords: { x: 65, y: 30, depth: 0.1 },
    scienceNote: "<TODO: copy> - 1532 fire char and water flows traced.",
    proAuthenticity:
      "<TODO: copy> - Shows chain-of-custody after Chambéry fire.",
    skepticalView: "<TODO: copy> - Damage complicates sampling controls.",
    sources: ["1532 repair log", "Radiocarbon sample notes"],
  },
];

export type ExplorerMode = {
  id: string;
  label: string;
  description: string;
  instructions: string;
  placeholder: string;
};

export const explorerModes: ExplorerMode[] = [
  {
    id: "normal",
    label: "Normal View",
    description: "<TODO: copy>",
    instructions: "Use zoom to inspect weave density and burn marks.",
    placeholder: PLACEHOLDER_SHROUD,
  },
  {
    id: "negative",
    label: "Photographic Negative",
    description: "<TODO: copy>",
    instructions: "Highlights tonal reversals discovered in 1898.",
    placeholder: PLACEHOLDER_SHROUD,
  },
  {
    id: "uv",
    label: "UV Fluorescence",
    description: "<TODO: copy>",
    instructions: "Shows possible serum halos recorded under UV.",
    placeholder: PLACEHOLDER_UV,
  },
  {
    id: "relief",
    label: "3D Relief Map",
    description: "<TODO: copy>",
    instructions: "Pseudo-3D height map derived from intensity curves.",
    placeholder: PLACEHOLDER_SUDARIUM,
  },
];
