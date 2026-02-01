export type Hotspot = {
  id: string;
  label: string;
  description: string;
  coords: { x: number; y: number; depth: number };
  coordsByMode?: Record<ExplorerMode["id"], { x: number; y: number }>;
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
      "Numerous puncture wounds are visible across the scalp region, suggesting contact with sharp objects arranged over the head rather than a simple circular wreath. Blood flows appear consistent with gravity-driven movement.",
    coords: { x: 23.6, y: 9.4, depth: 0.15 },
    coordsByMode: {
      uv: { x: 26.7, y: 7.7 },
    },
    scienceNote:
      "Numerous puncture wounds are visible across the scalp region, suggesting contact with sharp objects arranged over the head rather than a simple circular wreath. Blood flows appear consistent with gravity-driven movement.",
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
      "Blood flows emerge from the wrist area rather than the palms. This placement aligns with anatomical experiments showing that nails driven through the wrists are more capable of supporting a body’s weight during crucifixion.",
    coords: { x: 27.9, y: 49.1, depth: 0.4 },
    coordsByMode: {
      uv: { x: 29.7, y: 44.3 },
    },
    scienceNote:
      "Blood flows emerge from the wrist area rather than the palms. This placement aligns with anatomical experiments showing that nails driven through the wrists are more capable of supporting a body’s weight during crucifixion.",
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
      "A large blood-and-serum flow is visible on the right side of the torso. Its appearance is consistent with a puncture wound inflicted after death, allowing blood and clear fluid to separate as they exited the body.",
    coords: { x: 29.7, y: 35.9, depth: 0.3 },
    coordsByMode: {
      uv: { x: 32.7, y: 32.5 },
    },
    scienceNote:
      "A large blood-and-serum flow is visible on the right side of the torso. Its appearance is consistent with a puncture wound inflicted after death, allowing blood and clear fluid to separate as they exited the body.",
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
      "Bloodstains on the dorsal image indicate wounds in the feet. These marks are consistent with at least one nail penetrating the feet during crucifixion.",
    coords: { x: 75.8, y: 90.9, depth: 0.5 },
    coordsByMode: {
      uv: { x: 75.4, y: 84.7 },
    },
    scienceNote:
      "Bloodstains on the dorsal image indicate wounds in the feet. These marks are consistent with at least one nail penetrating the feet during crucifixion.",
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
      "The image does not appear to be painted, printed, or dyed, yet it exhibits anatomical coherence, depth-related behavior, and forensic detail that researchers continue to debate.",
    instructions: "Use zoom to inspect weave texture and hotspots",
    placeholder: "/images/shroud_full_body.jpg",
  },
  {
    id: "negative",
    label: "Photographic Negative",
    description:
      "The image does not appear to be painted, printed, or dyed, yet it exhibits anatomical coherence, depth-related behavior, and forensic detail that researchers continue to debate.",
    instructions: "Highlights tonal reversals discovered in 1898.",
    placeholder: "/images/shroud-fullbody-photographic-negative.png",
  },
  {
    id: "uv",
    label: "UV Fluorescence",
    description:
      "The image does not appear to be painted, printed, or dyed, yet it exhibits anatomical coherence, depth-related behavior, and forensic detail that researchers continue to debate.",
    instructions: "Shows possible serum halos recorded under UV.",
    placeholder: "/images/shroud-fullbody-uv.png",
  },
];
