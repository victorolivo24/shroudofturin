export const bilirubinScenarios = [
  {
    id: "baseline",
    label: "Baseline",
    value: 15,
    description:
      "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13].",
  },
  {
    id: "trauma",
    label: "Trauma Spike",
    value: 55,
    description:
      "Chemical tests by Heller and Adler detected unusually high levels of bilirubin, a hemoglobin breakdown product associated with severe trauma. This may explain why the blood appears reddish rather than dark brown despite age [14].",
  },
  {
    id: "pathology",
    label: "Pathology Extreme",
    value: 85,
    description:
      "A 2018 forensic bloodstain pattern study suggested that some flows might not align with natural bleeding on a vertical crucified body, though these interpretations remain debated [16].",
  },
];

export const bloodLabTabs = [
  {
    id: "chemistry",
    label: "Chemistry",
    body:
      "Chemical tests by Heller and Adler detected unusually high levels of bilirubin, a hemoglobin breakdown product associated with severe trauma. This may explain why the blood appears reddish rather than dark brown despite age [14].",
  },
  {
    id: "sturp",
    label: "STURP Findings",
    body:
      "Ultraviolet photographs taken during the 1978 STURP investigation revealed fluorescent \"serum halos\" surrounding many bloodstains, indicating natural separation of blood components as they dried [10][13].",
  },
  {
    id: "skeptical",
    label: "Skeptical Critiques",
    body:
      "A 2018 forensic bloodstain pattern study suggested that some flows might not align with natural bleeding on a vertical crucified body, though these interpretations remain debated [16].",
  },
  {
    id: "sources",
    label: "Sources",
    body:
      "Microscopy suggests the body image does not appear beneath the bloodstains, meaning the blood transferred to the cloth first, with the image forming afterward by an unknown mechanism [10][15].",
  },
];

export const imageFormationHypotheses = [
  {
    id: "sturp",
    title: "STURP Summary",
    science:
      "The body image affects only the top 0.2 microns of each linen fibril, with no penetration into the fibers—unlike paint or dye. STURP analyses concluded no pigments or binders account for the image [2][17].",
    skeptical:
      "McCrone reported iron oxide and vermilion particles consistent with pigments [21].",
  },
  {
    id: "mccrone",
    title: "McCrone Pigment Hypothesis",
    science:
      "Walter McCrone argued that the image was created using iron oxide and vermilion pigments. More recently, 3D modeling expert Cicero Moraes concluded the image may align with a low-relief sculpture, not a real body [16][21].",
    skeptical:
      "STURP found no pigments or binders; image is superficial [2][17].",
  },
  {
    id: "bas-relief",
    title: "Bas-Relief / Sculpture Hypothesis",
    science:
      "When processed using a NASA VP-8 Image Analyzer in 1976, the Shroud image produced natural three-dimensional topography, something ordinary photographs or paintings do not generate [19].",
    skeptical:
      "A low-relief bas-relief could also produce pseudo-3D shading [16].",
  },
];

export const datingEvidence = [
  {
    id: "radiocarbon",
    label: "1988 Radiocarbon",
    pro:
      "Three labs—Oxford, Zürich, and Tucson—dated a corner sample of the cloth to AD 1260–1390, consistent with the Shroud’s first undisputed historical appearance [22].",
    skeptical:
      "Chemist Raymond Rogers argued in 2004 that the dated area contained cotton, dyes, and vanillin levels inconsistent with the rest of the cloth, suggesting the sample came from a medieval repair [23].",
    value: 1260,
  },
  {
    id: "reweave",
    label: "Repair / Reweave",
    pro:
      "Chemist Raymond Rogers argued in 2004 that the dated area contained cotton, dyes, and vanillin levels inconsistent with the rest of the cloth, suggesting the sample came from a medieval repair [23].",
    skeptical:
      "Radiocarbon expert Timothy Jull later examined leftover samples and found no evidence of reweaving, supporting the original 1988 result [24].",
    value: 1500,
  },
  {
    id: "fanti",
    label: "Fanti Alternative Dating",
    pro:
      "Using infrared spectroscopy, Raman spectroscopy, and mechanical testing of fibers, Giulio Fanti’s studies dated the cloth to roughly 200 BC – AD 400, with a mean around 33 BC, though these methods are not widely accepted for dating linen [25].",
    skeptical:
      "Radiocarbon expert Timothy Jull later examined leftover samples and found no evidence of reweaving, supporting the original 1988 result [24].",
    value: 33,
  },
];

export const pollOptions = [
  {
    id: "radiocarbon",
    label: "Lean Radiocarbon",
    description:
      "Three labs—Oxford, Zürich, and Tucson—dated a corner sample of the cloth to AD 1260–1390, consistent with the Shroud’s first undisputed historical appearance [22].",
  },
  {
    id: "repair",
    label: "Repair Hypothesis",
    description:
      "Chemist Raymond Rogers argued in 2004 that the dated area contained cotton, dyes, and vanillin levels inconsistent with the rest of the cloth, suggesting the sample came from a medieval repair [23].",
  },
  {
    id: "fanti",
    label: "Alternative Dating",
    description:
      "Using infrared spectroscopy, Raman spectroscopy, and mechanical testing of fibers, Giulio Fanti’s studies dated the cloth to roughly 200 BC – AD 400, with a mean around 33 BC, though these methods are not widely accepted for dating linen [25].",
  },
  {
    id: "undecided",
    label: "Still Gathering Data",
    description:
      "Radiocarbon expert Timothy Jull later examined leftover samples and found no evidence of reweaving, supporting the original 1988 result [24].",
  },
];

export const sudariumComparisons = [
  {
    id: "alignment",
    title: "Bloodstain Alignment",
    match: 74,
    pro:
      "Bloodstain patterns on the Sudarium—particularly around the nose and mouth—have been compared with the Shroud’s facial region. Some researchers argue that the angles and flows correspond closely when modeled in 3D [27].",
    skeptical:
      "Critics caution that pattern matching is subjective and does not conclusively prove a common origin [28].",
  },
  {
    id: "timeline",
    title: "Provenance Timeline",
    match: 52,
    pro:
      "The Sudarium of Oviedo is a smaller cloth (84 × 53 cm), historically documented in Spain since at least AD 840. Tradition traces it to Jerusalem via North Africa and Toledo during the 7th-century Persian invasion [26].",
    skeptical:
      "Critics caution that pattern matching is subjective and does not conclusively prove a common origin [28].",
  },
  {
    id: "features",
    title: "Matching Features",
    match: 61,
    pro:
      "Bloodstain patterns on the Sudarium—particularly around the nose and mouth—have been compared with the Shroud’s facial region. Some researchers argue that the angles and flows correspond closely when modeled in 3D [27].",
    skeptical:
      "Critics caution that pattern matching is subjective and does not conclusively prove a common origin [28].",
  },
];

export const debateClaims = [
  {
    id: "image-depth",
    topic: "Image Superficiality",
    supporting:
      "STURP found no pigments or binders; image is superficial [2][17].",
    skeptical:
      "McCrone reported iron oxide and vermilion particles consistent with pigments [21].",
    sources: ["STURP final report", "Skeptical Science Blog"],
  },
  {
    id: "blood-chemistry",
    topic: "Blood Chemistry",
    supporting:
      "Microscopy suggests the body image does not appear beneath the bloodstains, meaning the blood transferred to the cloth first, with the image forming afterward by an unknown mechanism [10][15].",
    skeptical:
      "A 2018 forensic bloodstain pattern study suggested that some flows might not align with natural bleeding on a vertical crucified body, though these interpretations remain debated [16].",
    sources: ["Heller & Adler notes", "McCrone lab memos"],
  },
  {
    id: "dating",
    topic: "Dating the Cloth",
    supporting:
      "1988 tests dated the cloth to 1260–1390 AD [22].",
    skeptical:
      "Rogers’ chemistry suggests the sample came from a repaired area [23].",
    sources: ["Radiocarbon 1989 paper", "Benford & Marino paper"],
  },
];

export const sourceFilters = [
  { id: "scientific", label: "Scientific" },
  { id: "historical", label: "Historical" },
  { id: "skeptical", label: "Skeptical" },
  { id: "pro", label: "Pro-Authenticity" },
];
