export type Source = {
  id: string;
  author: string;
  work: string;
  note: string;
};

export const sourceGroups: { title: string; sources: Source[] }[] = [
  {
    title: "Core Scientific Investigations (STURP & Primary Analysis)",
    sources: [
      {
        id: "sturp",
        author: "Shroud of Turin Research Project (STURP)",
        work: "Summary of Investigations (1978) — Barrie M. Schwortz et al.",
        note: "Found no pigments, paints, or dyes; image confined to the outer fibrils of linen. UV fluorescence documented serum halos around bloodstains.",
      },
      {
        id: "heller-adler",
        author: "Heller, J.H. & Adler, A.D.",
        work: "A Chemical Investigation of the Shroud of Turin (Canadian Society of Forensic Science Journal, 1981)",
        note: "Identified real human blood; elevated bilirubin levels consistent with severe trauma.",
      },
      {
        id: "schwortz",
        author: "Schwortz, Barrie M.",
        work: "Shroud of Turin Website & Publications",
        note: "Primary STURP documentation, photography, and microscopy references.",
      },
    ],
  },
  {
    title: "Image Formation & Physical Properties",
    sources: [
      {
        id: "jackson",
        author: "Jackson, J.P., Jumper, E.J., & Ercoline, W.R.",
        work: "Correlation of Image Intensity on the Turin Shroud with the 3D Structure of a Human Body Shape (Applied Optics, 1984)",
        note: "VP-8 Image Analyzer reveals 3D depth encoding unique to the Shroud.",
      },
      {
        id: "rogers",
        author: "Rogers, Raymond N.",
        work: "Studies on the Radiocarbon Sample from the Shroud of Turin (Thermochimica Acta, 2005)",
        note: "Identified cotton fibers and dye in the 1988 radiocarbon sample area, suggesting reweaving.",
      },
      {
        id: "mccrone",
        author: "McCrone, Walter C.",
        work: "Judgment Day for the Shroud of Turin (1996)",
        note: "Argued image formed using iron oxide and vermilion pigments (minority view).",
      },
      {
        id: "moraes",
        author: "Moraes, Cicero et al.",
        work: "3D Modeling and Bas-Relief Hypothesis Studies",
        note: "Demonstrated that bas-relief techniques can generate pseudo-3D effects (contested).",
      },
    ],
  },
  {
    title: "Crucifixion Forensics & Medical Context",
    sources: [
      {
        id: "barbet",
        author: "Barbet, Pierre",
        work: "A Doctor at Calvary (1936)",
        note: "Wrist nailing required to support body weight during crucifixion.",
      },
      {
        id: "zugibe",
        author: "Zugibe, Frederick T.",
        work: "The Crucifixion of Jesus: A Forensic Inquiry (2005)",
        note: "Medical and anatomical analysis of wounds and blood flow.",
      },
      {
        id: "haas",
        author: "Haas, N., Zias, J., & Tabor, J.D.",
        work: "Crucifixion—The Archaeological Evidence (Israel Exploration Journal, 1970)",
        note: "Discovery of Jehohanan heel bone with nail confirms Roman crucifixion practice.",
      },
    ],
  },
  {
    title: "Bloodstain Pattern & UV Analysis",
    sources: [
      {
        id: "adler",
        author: "Adler, A.D.",
        work: "Updating Recent Studies on the Shroud of Turin",
        note: "Blood chemistry, serum separation, UV fluorescence discussion.",
      },
      {
        id: "bucklin",
        author: "Bucklin, R.",
        work: "Bloodstain Pattern Interpretation and the Shroud",
        note: "Forensic analysis of blood flow consistency (debated).",
      },
      {
        id: "fanti",
        author: "Fanti, Giulio",
        work: "Scientific Studies on the Shroud of Turin (various publications)",
        note: "Mechanical and spectroscopic dating methods (contested).",
      },
    ],
  },
  {
    title: "Dating",
    sources: [
      {
        id: "damon",
        author: "Damon, P.E. et al.",
        work: "Radiocarbon Dating of the Shroud of Turin (Nature, 1989)",
        note: "1988 radiocarbon test dating the sample to 1260–1390 CE.",
      },
      {
        id: "jull",
        author: "Freer-Waters, R.A. & Jull, A.J.T.",
        work: "Investigating a Dated Piece of the Shroud of Turin (Radiocarbon, 2010)",
        note: "Examined leftover sample material and reported no evidence of reweaving.",
      },
      {
        id: "de-caro",
        author: "De Caro, L. et al.",
        work: "X-ray Dating of a Turin Shroud's Linen Sample (Heritage, 2022)",
        note: "Wide-angle X-ray scattering of cellulose aging; compatible with an early-centuries origin under stated storage assumptions (debated).",
      },
    ],
  },
  {
    title: "Sudarium of Oviedo",
    sources: [
      {
        id: "villalain",
        author: "Villalain Blanco, J.D.",
        work: "The Sudarium of Oviedo (1998)",
        note: "Bloodstain analysis, forensic comparisons with the Shroud.",
      },
      {
        id: "guscin",
        author: "Guscin, Mark",
        work: "The Oviedo Cloth (1998)",
        note: "Historical documentation and provenance of the Sudarium.",
      },
    ],
  },
  {
    title: "Catholic Church & Faith Context",
    sources: [
      {
        id: "john-paul-ii",
        author: "Pope John Paul II",
        work: "Address at Turin Cathedral (1998)",
        note: "Referred to the Shroud as a “mirror of the Gospel.”",
      },
      {
        id: "benedict-xvi",
        author: "Pope Benedict XVI",
        work: "Meditations on the Shroud (2010)",
        note: "Described the Shroud as an “icon written with blood.”",
      },
      {
        id: "francis",
        author: "Pope Francis",
        work: "Shroud reflections (2013, 2015)",
        note: "Emphasized contemplation over proof.",
      },
      {
        id: "catechism",
        author: "Catechism of the Catholic Church",
        work: "On faith, evidence, and revelation",
        note: "General theological framework.",
      },
    ],
  },
];

/** All sources in display order; a source's citation number is its index + 1. */
export const sources = sourceGroups.flatMap((group) => group.sources);
