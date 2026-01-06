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
    id: "crown",
    label: "Crown of Thorns",
    description:
      "Dozens of puncture wounds appear across the scalp region. These resemble injuries from a cap-like arrangement of sharp objects, differing from the circular wreath typically depicted in medieval Christian art [9].",
    coords: { x: 23.6, y: 9.4, depth: 0.15 },
    scienceNote:
      "Dozens of puncture wounds appear across the scalp region. These resemble injuries from a cap-like arrangement of sharp objects, differing from the circular wreath typically depicted in medieval Christian art [9]. - STURP micrographs mapped blood serum at many points.",
    proAuthenticity:
      "Dozens of puncture wounds appear across the scalp region. These resemble injuries from a cap-like arrangement of sharp objects, differing from the circular wreath typically depicted in medieval Christian art [9]. - Supporters cite anatomical precision unexpected for medieval art.",
    skepticalView:
      "Dozens of puncture wounds appear across the scalp region. These resemble injuries from a cap-like arrangement of sharp objects, differing from the circular wreath typically depicted in medieval Christian art [9]. - Skeptics suggest later touch-ups or pareidolia.",
    sources: ["Cap-like thorn injury notes", "Iconography comparison log"],
  },
  {
    id: "wrist-nail",
    label: "Wrist Nail Wound",
    description:
      "The image shows blood flows emerging from the wrist area rather than the palms. Experiments by Dr. Pierre Barbet (1930s) and Dr. Frederick Zugibe (1990s) demonstrated that nails driven through the palms cannot support a crucified person’s weight, but nails through the wrist can [5][6].",
    coords: { x: 27.9, y: 49.1, depth: 0.4 },
    scienceNote:
      "The image shows blood flows emerging from the wrist area rather than the palms. Experiments by Dr. Pierre Barbet (1930s) and Dr. Frederick Zugibe (1990s) demonstrated that nails driven through the palms cannot support a crucified person’s weight, but nails through the wrist can [5][6].",
    proAuthenticity:
      "The image shows blood flows emerging from the wrist area rather than the palms. Experiments by Dr. Pierre Barbet (1930s) and Dr. Frederick Zugibe (1990s) demonstrated that nails driven through the palms cannot support a crucified person’s weight, but nails through the wrist can [5][6]. - Supporters cite median nerve trauma patterns.",
    skepticalView:
      "The image shows blood flows emerging from the wrist area rather than the palms. Experiments by Dr. Pierre Barbet (1930s) and Dr. Frederick Zugibe (1990s) demonstrated that nails driven through the palms cannot support a crucified person’s weight, but nails through the wrist can [5][6]. - Skeptics note artistic influences from medieval art.",
    sources: ["STURP data files", "Smith 1979 Wrist Study"],
  },
  {
    id: "spear",
    label: "Spear Wound",
    description:
      "A large blood-and-serum flow on the right side of the torso is consistent with a post-mortem puncture from a sharp object. The separation of red blood cells and clear serum is visible in ultraviolet photography [10].",
    coords: { x: 29.7, y: 35.9, depth: 0.3 },
    scienceNote:
      "A large blood-and-serum flow on the right side of the torso is consistent with a post-mortem puncture from a sharp object. The separation of red blood cells and clear serum is visible in ultraviolet photography [10].",
    proAuthenticity:
      "A large blood-and-serum flow on the right side of the torso is consistent with a post-mortem puncture from a sharp object. The separation of red blood cells and clear serum is visible in ultraviolet photography [10]. - Matches water-and-blood description.",
    skepticalView:
      "A large blood-and-serum flow on the right side of the torso is consistent with a post-mortem puncture from a sharp object. The separation of red blood cells and clear serum is visible in ultraviolet photography [10]. - Narrative detail may be retrofitted.",
    sources: ["UV macro imagery log", "Skeptic Digest Issue 12"],
  },
  {
    id: "foot-wounds",
    label: "Foot Wounds",
    description:
      "Bloodstains on the dorsal image indicate wounds in the feet. These are consistent with at least one nail penetrating the feet during crucifixion, matching archaeological evidence such as the remains of \"Jehohanan\" discovered in 1968 [7].",
    coords: { x: 25.4, y: 93.9, depth: 0.5 },
    scienceNote:
      "Bloodstains on the dorsal image indicate wounds in the feet. These are consistent with at least one nail penetrating the feet during crucifixion, matching archaeological evidence such as the remains of \"Jehohanan\" discovered in 1968 [7].",
    proAuthenticity:
      "Bloodstains on the dorsal image indicate wounds in the feet. These are consistent with at least one nail penetrating the feet during crucifixion, matching archaeological evidence such as the remains of \"Jehohanan\" discovered in 1968 [7]. - Aligns with first-century execution finds.",
    skepticalView:
      "Bloodstains on the dorsal image indicate wounds in the feet. These are consistent with at least one nail penetrating the feet during crucifixion, matching archaeological evidence such as the remains of \"Jehohanan\" discovered in 1968 [7]. - Could reflect artistic shorthand for crucifixion.",
    sources: ["Dr. Barbet notebooks", "Skeptical Forum Archive"],
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
    placeholder: "/images/shroud_full_body.jpg",
  },
  {
    id: "negative",
    label: "Photographic Negative",
    description:
      "In 1898, Secondo Pia photographed the Shroud and discovered that its negative plate revealed a lifelike positive image—implying the Shroud itself behaves like a photographic negative. This was confirmed by Giuseppe Enrie in 1931 [18].",
    instructions: "Highlights tonal reversals discovered in 1898.",
    placeholder: "/images/shroud-fullbody-photographic-negative.png",
  },
  {
    id: "uv",
    label: "UV Fluorescence",
    description:
      "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13].",
    instructions: "Shows possible serum halos recorded under UV.",
    placeholder: "/images/shroud-fullbody-uv.png",
  },
  {
    id: "relief",
    label: "3D Relief Map",
    description:
      "When processed using a NASA VP-8 Image Analyzer in 1976, the Shroud image produced natural three-dimensional topography, something ordinary photographs or paintings do not generate [19].",
    instructions: "Pseudo-3D height map derived from intensity curves.",
    placeholder: "/images/shroud-vp8-3d-render.jpg",
  },
];
