// Run with: npx tsx src/lib/radiocarbon.check.ts
import assert from "node:assert/strict";
import { apparentYear } from "./radiocarbon";

const near = (actual: number, expected: number, tolerance = 1) =>
  assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} is not within ${tolerance} of ${expected}`);

near(apparentYear(30, 0, 1950), 30); // no contamination: true date comes back
near(apparentYear(30, 1, 1950), 1950); // all contaminant: contaminant's date comes back
near(apparentYear(30, 1, 1532), 1532);
assert.ok(apparentYear(30, 0.3, 1950) > 30); // mixing in younger carbon always makes it look younger

// Headline numbers the room quotes: shares needed to make a 30 CE cloth read as ~1325 CE.
near(apparentYear(30, 0.65, 1950), 1325, 15);
near(apparentYear(30, 0.85, 1532), 1325, 15);

console.log("radiocarbon checks passed");
