export const bilirubinScenarios = [
  {
    id: "baseline",
    label: "Baseline",
    value: 15,
    description: "<TODO: copy>",
  },
  {
    id: "trauma",
    label: "Trauma Spike",
    value: 55,
    description: "<TODO: copy>",
  },
  {
    id: "pathology",
    label: "Pathology Extreme",
    value: 85,
    description: "<TODO: copy>",
  },
];

export const bloodLabTabs = [
  { id: "chemistry", label: "Chemistry", body: "<TODO: copy>" },
  { id: "sturp", label: "STURP Findings", body: "<TODO: copy>" },
  { id: "skeptical", label: "Skeptical Critiques", body: "<TODO: copy>" },
  { id: "sources", label: "Sources", body: "<TODO: copy>" },
];

export const imageFormationHypotheses = [
  {
    id: "sturp",
    title: "STURP Summary",
    science: "<TODO: copy>",
    skeptical: "<TODO: copy>",
  },
  {
    id: "mccrone",
    title: "McCrone Pigment Hypothesis",
    science: "<TODO: copy>",
    skeptical: "<TODO: copy>",
  },
  {
    id: "bas-relief",
    title: "Bas-Relief / Sculpture Hypothesis",
    science: "<TODO: copy>",
    skeptical: "<TODO: copy>",
  },
];

export const datingEvidence = [
  {
    id: "radiocarbon",
    label: "1988 Radiocarbon",
    pro: "<TODO: copy>",
    skeptical: "<TODO: copy>",
    value: 1260,
  },
  {
    id: "reweave",
    label: "Repair / Reweave",
    pro: "<TODO: copy>",
    skeptical: "<TODO: copy>",
    value: 1500,
  },
  {
    id: "fanti",
    label: "Fanti Alternative Dating",
    pro: "<TODO: copy>",
    skeptical: "<TODO: copy>",
    value: 33,
  },
];

export const pollOptions = [
  { id: "radiocarbon", label: "Lean Radiocarbon", description: "<TODO: copy>" },
  { id: "repair", label: "Repair Hypothesis", description: "<TODO: copy>" },
  { id: "fanti", label: "Alternative Dating", description: "<TODO: copy>" },
  { id: "undecided", label: "Still Gathering Data", description: "<TODO: copy>" },
];

export const sudariumComparisons = [
  {
    id: "alignment",
    title: "Bloodstain Alignment",
    match: 74,
    pro: "<TODO: copy>",
    skeptical: "<TODO: copy>",
  },
  {
    id: "timeline",
    title: "Provenance Timeline",
    match: 52,
    pro: "<TODO: copy>",
    skeptical: "<TODO: copy>",
  },
  {
    id: "features",
    title: "Matching Features",
    match: 61,
    pro: "<TODO: copy>",
    skeptical: "<TODO: copy>",
  },
];

export const debateClaims = [
  {
    id: "image-depth",
    topic: "Image Superficiality",
    supporting: "<TODO: copy>",
    skeptical: "<TODO: copy>",
    sources: ["STURP final report", "Skeptical Science Blog"],
  },
  {
    id: "blood-chemistry",
    topic: "Blood Chemistry",
    supporting: "<TODO: copy>",
    skeptical: "<TODO: copy>",
    sources: ["Heller & Adler notes", "McCrone lab memos"],
  },
  {
    id: "dating",
    topic: "Dating the Cloth",
    supporting: "<TODO: copy>",
    skeptical: "<TODO: copy>",
    sources: ["Radiocarbon 1989 paper", "Benford & Marino paper"],
  },
];

export const sourceFilters = [
  { id: "scientific", label: "Scientific" },
  { id: "historical", label: "Historical" },
  { id: "skeptical", label: "Skeptical" },
  { id: "pro", label: "Pro-Authenticity" },
];
