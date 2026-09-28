// Simplified radiocarbon model for the Dating room's contamination calculator.
// ponytail: ignores the calibration curve and bomb carbon, so results are approximate to within
// a few decades; swap in IntCal calibration if the room ever needs lab-grade numbers.
const MEAN_LIFE_YEARS = 8267; // 5730-year half-life / ln 2
const REFERENCE_YEAR = 1950; // radiocarbon "present"

/** Share of original carbon-14 left in material that grew in `year`, relative to 1950. */
function fractionModern(year: number) {
  return Math.exp(-(REFERENCE_YEAR - year) / MEAN_LIFE_YEARS);
}

/**
 * Calendar year a lab would report for a sample of `trueYear` material in which `share` (0–1)
 * of the carbon actually comes from material that grew in `contaminantYear`.
 */
export function apparentYear(trueYear: number, share: number, contaminantYear: number) {
  const mixed = (1 - share) * fractionModern(trueYear) + share * fractionModern(contaminantYear);
  return REFERENCE_YEAR + MEAN_LIFE_YEARS * Math.log(mixed);
}
