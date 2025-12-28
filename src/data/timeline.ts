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
    description:
      "Roman crucifixion varied significantly, with victims sometimes tied, nailed, or both. Archaeological evidence confirms that nailing through the feet was practiced, and wrist nailing is biomechanically more plausible than palm nailing [5][7][12].",
    comparison: "Match the scourge density with documented finds.",
  },
  {
    id: "nail-techniques",
    title: "Nailing Practices",
    era: "Archaeology",
    description:
      "The wounds visible on the Shroud—scourging, wrist-area nailing, feet wounds, scalp punctures, and a side wound—are consistent with forensic expectations for a Roman execution, though not definitive proof of identity [8][9][10].",
    comparison: "Toggle wrist vs hand data based on dig reports.",
  },
  {
    id: "crown-thorns",
    title: "Thorn Crown Evidence",
    era: "Textual",
    description:
      "Dozens of puncture wounds appear across the scalp region. These resemble injuries from a cap-like arrangement of sharp objects, differing from the circular wreath typically depicted in medieval Christian art [9].",
    comparison: "Compare head wound positions vs Roman execution logs.",
  },
];

export const executionComparisons = [
  {
    label: "Roman Methodology",
    detail:
      "Roman crucifixion varied significantly, with victims sometimes tied, nailed, or both. Archaeological evidence confirms that nailing through the feet was practiced, and wrist nailing is biomechanically more plausible than palm nailing [5][7][12].",
    intensity: 78,
  },
  {
    label: "Medieval Depictions",
    detail:
      "Some skeptics argue a medieval artist could have reproduced these details, but the wrist-wound placement contradicts most medieval iconography, which typically shows nails through the palms [9][12].",
    intensity: 42,
  },
  {
    label: "Experimental Archaeology",
    detail:
      "The wounds visible on the Shroud—scourging, wrist-area nailing, feet wounds, scalp punctures, and a side wound—are consistent with forensic expectations for a Roman execution, though not definitive proof of identity [8][9][10].",
    intensity: 63,
  },
];
