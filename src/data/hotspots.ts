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
    description:
      "The image shows blood flows emerging from the wrist area rather than the palms. Experiments by Dr. Pierre Barbet (1930s) and Dr. Frederick Zugibe (1990s) demonstrated that nails driven through the palms cannot support a crucified person’s weight, but nails through the wrist can [5][6].",
    coords: { x: 42, y: 38, depth: 0.6 },
    scienceNote:
      "The image shows blood flows emerging from the wrist area rather than the palms. Experiments by Dr. Pierre Barbet (1930s) and Dr. Frederick Zugibe (1990s) demonstrated that nails driven through the palms cannot support a crucified person’s weight, but nails through the wrist can [5][6]. explanation of anatomical positioning.",
    proAuthenticity:
      "The image shows blood flows emerging from the wrist area rather than the palms. Experiments by Dr. Pierre Barbet (1930s) and Dr. Frederick Zugibe (1990s) demonstrated that nails driven through the palms cannot support a crucified person’s weight, but nails through the wrist can [5][6]. - Supporters cite median nerve trauma patterns.",
    skepticalView:
      "The image shows blood flows emerging from the wrist area rather than the palms. Experiments by Dr. Pierre Barbet (1930s) and Dr. Frederick Zugibe (1990s) demonstrated that nails driven through the palms cannot support a crucified person’s weight, but nails through the wrist can [5][6]. - Skeptics note artistic influences from medieval art.",
    sources: ["STURP data files", "Smith 1979 Wrist Study"],
  },
  {
    id: "ankle-wound",
    label: "Ankle / Feet Wounds",
    description:
      "Bloodstains on the dorsal image indicate wounds in the feet. These are consistent with at least one nail penetrating the feet during crucifixion, matching archaeological evidence such as the remains of \"Jehohanan\" discovered in 1968 [7].",
    coords: { x: 52, y: 78, depth: 0.45 },
    scienceNote:
      "Bloodstains on the dorsal image indicate wounds in the feet. These are consistent with at least one nail penetrating the feet during crucifixion, matching archaeological evidence such as the remains of \"Jehohanan\" discovered in 1968 [7]. - Position suggests single spike.",
    proAuthenticity:
      "Bloodstains on the dorsal image indicate wounds in the feet. These are consistent with at least one nail penetrating the feet during crucifixion, matching archaeological evidence such as the remains of \"Jehohanan\" discovered in 1968 [7]. - Aligns with first-century execution finds.",
    skepticalView:
      "Bloodstains on the dorsal image indicate wounds in the feet. These are consistent with at least one nail penetrating the feet during crucifixion, matching archaeological evidence such as the remains of \"Jehohanan\" discovered in 1968 [7]. - Could reflect artistic shorthand for crucifixion.",
    sources: ["Dr. Barbet notebooks", "Skeptical Forum Archive"],
  },
  {
    id: "spear",
    label: "Spear Wound",
    description:
      "A large blood-and-serum flow on the right side of the torso is consistent with a post-mortem puncture from a sharp object. The separation of red blood cells and clear serum is visible in ultraviolet photography [10].",
    coords: { x: 48, y: 52, depth: 0.35 },
    scienceNote:
      "A large blood-and-serum flow on the right side of the torso is consistent with a post-mortem puncture from a sharp object. The separation of red blood cells and clear serum is visible in ultraviolet photography [10]. - Serum and blood signatures recorded under UV.",
    proAuthenticity:
      "A large blood-and-serum flow on the right side of the torso is consistent with a post-mortem puncture from a sharp object. The separation of red blood cells and clear serum is visible in ultraviolet photography [10]. - Matches water-and-blood description.",
    skepticalView:
      "A large blood-and-serum flow on the right side of the torso is consistent with a post-mortem puncture from a sharp object. The separation of red blood cells and clear serum is visible in ultraviolet photography [10]. - Narrative detail may be retrofitted.",
    sources: ["UV macro imagery log", "Skeptic Digest Issue 12"],
  },
  {
    id: "scourge",
    label: "Scourge Marks",
    description:
      "Over 100 dumbbell-shaped wounds appear across the body image. These patterns match injuries inflicted by a Roman flagrum, a whip made of leather thongs tipped with metal or bone [8].",
    coords: { x: 34, y: 60, depth: 0.5 },
    scienceNote:
      "Over 100 dumbbell-shaped wounds appear across the body image. These patterns match injuries inflicted by a Roman flagrum, a whip made of leather thongs tipped with metal or bone [8]. - Over 100 dumbbell shaped marks recorded by STURP.",
    proAuthenticity:
      "Over 100 dumbbell-shaped wounds appear across the body image. These patterns match injuries inflicted by a Roman flagrum, a whip made of leather thongs tipped with metal or bone [8]. - Patterns align with Roman flagrum hardware.",
    skepticalView:
      "Over 100 dumbbell-shaped wounds appear across the body image. These patterns match injuries inflicted by a Roman flagrum, a whip made of leather thongs tipped with metal or bone [8]. - Could be enhanced by creative negative photography.",
    sources: ["Flagrum hardware dossier", "Skeptical Inquirer 1984"],
  },
  {
    id: "uv-halow",
    label: "Blood / Serum UV Halos",
    description:
      "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13].",
    coords: { x: 58, y: 42, depth: 0.2 },
    scienceNote:
      "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13]. - UV fluorescence suggests hemolysis rings.",
    proAuthenticity:
      "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13]. - Advocates cite rapid trauma consistent bilirubin.",
    skepticalView:
      "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13]. - Critics propose medieval tempera binder effects.",
    sources: ["STURP UV logbook", "McCrone pigment notes"],
  },
  {
    id: "fire-water",
    label: "Fire & Water Damage",
    description:
      "In 1532, the Shroud was damaged in a fire in Chambéry, France. Molten silver burned through the folded cloth, creating symmetrical burns, and water used to extinguish the fire left stains. Despite this, the body image remained intact [11].",
    coords: { x: 65, y: 30, depth: 0.1 },
    scienceNote:
      "In 1532, the Shroud was damaged in a fire in Chambéry, France. Molten silver burned through the folded cloth, creating symmetrical burns, and water used to extinguish the fire left stains. Despite this, the body image remained intact [11]. - 1532 fire char and water flows traced.",
    proAuthenticity:
      "In 1532, the Shroud was damaged in a fire in Chambéry, France. Molten silver burned through the folded cloth, creating symmetrical burns, and water used to extinguish the fire left stains. Despite this, the body image remained intact [11]. - Shows chain-of-custody after Chambéry fire.",
    skepticalView:
      "In 1532, the Shroud was damaged in a fire in Chambéry, France. Molten silver burned through the folded cloth, creating symmetrical burns, and water used to extinguish the fire left stains. Despite this, the body image remained intact [11]. - Damage complicates sampling controls.",
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
    description:
      "The body image affects only the top 0.2 microns of each linen fibril, with no penetration into the fibers—unlike paint or dye. STURP analyses concluded no pigments or binders account for the image [2][17].",
    instructions: "Use zoom to inspect weave density and burn marks.",
    placeholder: PLACEHOLDER_SHROUD,
  },
  {
    id: "negative",
    label: "Photographic Negative",
    description:
      "In 1898, Secondo Pia photographed the Shroud and discovered that its negative plate revealed a lifelike positive image—implying the Shroud itself behaves like a photographic negative. This was confirmed by Giuseppe Enrie in 1931 [18].",
    instructions: "Highlights tonal reversals discovered in 1898.",
    placeholder: PLACEHOLDER_SHROUD,
  },
  {
    id: "uv",
    label: "UV Fluorescence",
    description:
      "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13].",
    instructions: "Shows possible serum halos recorded under UV.",
    placeholder: PLACEHOLDER_UV,
  },
  {
    id: "relief",
    label: "3D Relief Map",
    description:
      "When processed using a NASA VP-8 Image Analyzer in 1976, the Shroud image produced natural three-dimensional topography, something ordinary photographs or paintings do not generate [19].",
    instructions: "Pseudo-3D height map derived from intensity curves.",
    placeholder: PLACEHOLDER_SUDARIUM,
  },
];
