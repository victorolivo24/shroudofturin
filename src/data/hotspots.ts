export type ExplorerMode = {
  id: "normal" | "negative" | "uv";
  label: string;
  /** What the visitor should notice in this lighting. */
  note: string;
  image: string;
  imageClass?: string;
};

// shroud_full_body.jpg is itself a photographic negative; inverting it shows the cloth as the eye sees it.
// Normal and negative therefore share one image, so hotspot coordinates line up in both.
export const explorerModes: ExplorerMode[] = [
  {
    id: "normal",
    label: "Normal light",
    note: "To the naked eye the body image is extremely faint, with no outlines or brushstrokes. The bloodstains stand out darker and more defined.",
    image: "/images/shroud_full_body.jpg",
    imageClass: "invert sepia-[.55]",
  },
  {
    id: "negative",
    label: "Photographic negative",
    note: "Reverse light and dark and the faint stain becomes a lifelike figure: facial structure and body proportions suddenly read clearly.",
    image: "/images/shroud_full_body.jpg",
  },
  {
    id: "uv",
    label: "Ultraviolet",
    note: "Under UV some areas around the bloodstains fluoresce, hinting at differences in material. This view only became possible with modern forensic imaging.",
    image: "/images/shroud-fullbody-uv.png",
  },
];

export type Hotspot = {
  id: string;
  label: string;
  note: string;
  coords: { x: number; y: number };
  coordsByMode?: Partial<Record<ExplorerMode["id"], { x: number; y: number }>>;
};

/** Ids match wound ids in the Wounds room, so markers can deep-link there. */
export const shroudHotspots: Hotspot[] = [
  {
    id: "crown",
    label: "Scalp wounds",
    note: "Numerous puncture wounds cover the scalp, suggesting sharp objects arranged over the head rather than a simple circular wreath. The blood flows look gravity-driven.",
    coords: { x: 23.6, y: 9.4 },
    coordsByMode: { uv: { x: 26.7, y: 7.7 } },
  },
  {
    id: "wrist-nail",
    label: "Wrist wound",
    note: "Blood flows emerge from the wrist rather than the palm, the placement experiments suggest could actually support a body's weight.",
    coords: { x: 27.9, y: 49.1 },
    coordsByMode: { uv: { x: 29.7, y: 44.3 } },
  },
  {
    id: "side",
    label: "Side wound",
    note: "A large blood-and-serum flow on the right side of the torso, consistent with a puncture made after death that let blood and clear fluid separate.",
    coords: { x: 29.7, y: 35.9 },
    coordsByMode: { uv: { x: 32.7, y: 32.5 } },
  },
  {
    id: "feet",
    label: "Foot wounds",
    note: "Bloodstains on the back image mark wounds in the feet, consistent with at least one nail through the feet.",
    coords: { x: 75.8, y: 90.9 },
    coordsByMode: { uv: { x: 75.4, y: 84.7 } },
  },
];
