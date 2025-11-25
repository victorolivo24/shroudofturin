export type TimelineEvent = {
  id: string;
  title: string;
  era: string;
  description: string;
  comparison: string;
};

export const crucifixionTimeline: TimelineEvent[] = [
  {
    id: "roman-flagrum",
    title: "Roman Flagrum Usage",
    era: "1st Century",
    description: "<TODO: copy>",
    comparison: "Match the scourge density with documented finds.",
  },
  {
    id: "nail-techniques",
    title: "Nailing Practices",
    era: "Archaeology",
    description: "<TODO: copy>",
    comparison: "Toggle wrist vs hand data based on dig reports.",
  },
  {
    id: "crown-thorns",
    title: "Thorn Crown Evidence",
    era: "Textual",
    description: "<TODO: copy>",
    comparison: "Compare head wound positions vs Roman execution logs.",
  },
];

export const executionComparisons = [
  { label: "Roman Methodology", detail: "<TODO: copy>", intensity: 78 },
  { label: "Medieval Depictions", detail: "<TODO: copy>", intensity: 42 },
  { label: "Experimental Archaeology", detail: "<TODO: copy>", intensity: 63 },
];
